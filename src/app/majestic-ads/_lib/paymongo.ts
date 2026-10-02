import crypto from "node:crypto";
import { db, type Order } from "./db";
import { PLANS, phpFor, type PlanKey } from "./plans";

const BASE = "https://api.paymongo.com";
const strip = (v?: string) => v?.replace(/^["']|["']$/g, "");

export const secretKey = () => strip(process.env.PAYMONGO_SECRET_KEY);
export const publicKey = () => strip(process.env.PAYMONGO_PUBLIC_KEY);

// PayMongo Subscriptions must be enabled on the account first (it was not on 2026-10-02: "no subscription payment methods are configured").
// Until then the monthly plan is a one-time charge for month 1. Set MA_SUBSCRIPTIONS=on once PayMongo enables it.
export const subscriptionsOn = () => process.env.MA_SUBSCRIPTIONS === "on";

export async function pm(path: string, method: "GET" | "POST", body?: unknown) {
  const key = secretKey();
  if (!key) throw new Error("PAYMONGO_SECRET_KEY is missing");
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: { Authorization: `Basic ${Buffer.from(`${key}:`).toString("base64")}`, "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`PayMongo ${method} ${path}: ${JSON.stringify(json?.errors ?? json).slice(0, 300)}`);
  return json;
}

export const newRef = () => `MA-${crypto.randomBytes(9).toString("base64url")}`;

export async function createCheckout(order: Pick<Order, "ref" | "email" | "name">, plan: PlanKey, origin: string) {
  const { usd, name } = PLANS[plan];
  const json = await pm("/v2/checkout_sessions", "POST", {
    data: {
      attributes: {
        line_items: [{ name, amount: Math.round(phpFor(usd) * 100), currency: "PHP", quantity: 1 }],
        payment_method_types: ["card", "gcash", "qrph"],
        success_url: `${origin}/majestic-ads/thank-you?ref=${order.ref}`,
        cancel_url: `${origin}/majestic-ads/start?plan=${plan}`,
        reference_number: order.ref,
        description: name,
        send_email_receipt: true,
        billing: { name: order.name, email: order.email },
        pass_on_fees: true, // customer pays PayMongo's fee on top, same as Trinity Dossier
      },
    },
  });
  return { id: json.data.id as string, url: json.data.attributes.checkout_url as string };
}

// PayMongo plans are PHP only. Find the plan by name, create it once.
async function monthlyPlanId() {
  const test = Number(process.env.MA_MONTHLY_TEST_PHP) || 0; // set to e.g. 20 to test with a PHP 20 plan
  const centavos = test ? test * 100 : Math.round(phpFor(PLANS.monthly.usd) * 100);
  const name = test ? `${PLANS.monthly.name} (test PHP ${test})` : PLANS.monthly.name;
  const list = await pm("/v1/subscriptions/plans", "GET");
  const found = (list.data as { id: string; attributes: { name: string; amount: number } }[]).find(
    (p) => p.attributes.name === name && p.attributes.amount === centavos,
  );
  if (found) return found.id;
  const created = await pm("/v1/subscriptions/plans", "POST", {
    data: {
      attributes: {
        name,
        description: "3 Majestic Ads sets a month, charged monthly",
        amount: centavos,
        currency: "PHP",
        interval: "monthly",
        interval_count: 1,
      },
    },
  });
  return created.data.id as string;
}

export async function createSubscription(order: Pick<Order, "name" | "email">) {
  const [first, ...rest] = order.name.trim().split(/\s+/);
  const customer = await pm("/v1/customers", "POST", {
    data: { attributes: { first_name: first, last_name: rest.join(" ") || first, email: order.email, default_device: "email" } },
  });
  const sub = await pm("/v1/subscriptions", "POST", {
    data: { attributes: { customer_id: customer.data.id, plan_id: await monthlyPlanId() } },
  });
  const paymentIntentId = sub.data.attributes?.latest_invoice?.payment_intent?.id as string | undefined;
  if (!paymentIntentId) throw new Error("Subscription created without a payment intent");
  return { subscriptionId: sub.data.id as string, paymentIntentId };
}

export async function paymentIntentClientKey(id: string) {
  const json = await pm(`/v1/payment_intents/${id}`, "GET");
  return json.data.attributes.client_key as string;
}

// Asks PayMongo directly whether the order is paid, so no webhook is needed.
export async function refreshPaid(order: Order): Promise<boolean> {
  if (order.status === "paid") return true;
  let paid = false;
  try {
    if (order.plan === "monthly" && order.subscription_id) {
      const sub = await pm(`/v1/subscriptions/${order.subscription_id}`, "GET");
      paid = sub.data.attributes.status === "active";
    } else if (order.session_id) {
      const s = await pm(`/v1/checkout_sessions/${order.session_id}`, "GET");
      const payments = (s.data.attributes.payments ?? []) as { attributes?: { status?: string } }[];
      paid = payments.some((p) => p.attributes?.status === "paid");
    }
  } catch {
    return false;
  }
  if (paid) {
    const q = await db();
    await q`UPDATE ma_orders SET status = 'paid', paid_at = now() WHERE ref = ${order.ref} AND status <> 'paid'`;
  }
  return paid;
}
