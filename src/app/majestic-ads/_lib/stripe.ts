import crypto from "node:crypto";
import { db, type Order } from "./db";
import { PLANS, type PlanKey } from "./plans";

const secretKey = () => process.env.STRIPE_SECRET_KEY?.replace(/^["']|["']$/g, "");

export const newRef = () => `MA-${crypto.randomBytes(9).toString("base64url")}`;

// Stripe's API takes form-encoded bodies with bracketed keys.
async function stripe(path: string, method: "GET" | "POST", params?: Record<string, string>) {
  const key = secretKey();
  if (!key) throw new Error("STRIPE_SECRET_KEY is missing");
  const res = await fetch(`https://api.stripe.com${path}`, {
    method,
    headers: { Authorization: `Bearer ${key}`, ...(params && { "Content-Type": "application/x-www-form-urlencoded" }) },
    body: params ? new URLSearchParams(params).toString() : undefined,
    cache: "no-store",
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`Stripe ${method} ${path}: ${JSON.stringify(json?.error ?? json).slice(0, 300)}`);
  return json;
}

// Charged in USD. The monthly plan is a real Stripe subscription (renews every month until cancelled).
export async function createCheckout(order: Pick<Order, "ref" | "email" | "name">, plan: PlanKey, origin: string) {
  const { usd, name } = PLANS[plan];
  const monthly = plan === "monthly";
  const json = await stripe("/v1/checkout/sessions", "POST", {
    mode: monthly ? "subscription" : "payment",
    "line_items[0][quantity]": "1",
    "line_items[0][price_data][currency]": "usd",
    "line_items[0][price_data][unit_amount]": String(usd * 100),
    "line_items[0][price_data][product_data][name]": name,
    ...(monthly && { "line_items[0][price_data][recurring][interval]": "month" }),
    customer_email: order.email,
    client_reference_id: order.ref,
    success_url: `${origin}/majestic-ads/thank-you?ref=${order.ref}`,
    cancel_url: `${origin}/majestic-ads/start?plan=${plan}`,
    ...(!monthly && { "invoice_creation[enabled]": "true" }), // Stripe emails an invoice/receipt for one-off orders
  });
  return { id: json.id as string, url: json.url as string };
}

// Asks Stripe directly whether the order is paid, so no webhook is needed.
export async function refreshPaid(order: Order): Promise<boolean> {
  if (order.status === "paid") return true;
  if (!order.session_id) return false;
  let paid = false;
  try {
    const s = await stripe(`/v1/checkout/sessions/${order.session_id}`, "GET");
    paid = s.payment_status === "paid";
  } catch {
    return false;
  }
  if (paid) {
    const q = await db();
    await q`UPDATE ma_orders SET status = 'paid', paid_at = now() WHERE ref = ${order.ref} AND status <> 'paid'`;
  }
  return paid;
}
