import { NextRequest, NextResponse } from "next/server";
import { db, normEmail, siteHost, type Order } from "@/app/majestic-ads/_lib/db";
import { createCheckout, createSubscription, newRef, refreshPaid, subscriptionsOn } from "@/app/majestic-ads/_lib/paymongo";
import { isPlan } from "@/app/majestic-ads/_lib/plans";

const field = (form: FormData, key: string) => String(form.get(key) ?? "").trim();

// Old links and prefetchers land here with GET; send them to the form.
export async function GET(req: NextRequest) {
  const plan = req.nextUrl.searchParams.get("plan");
  return NextResponse.redirect(`${req.nextUrl.origin}/majestic-ads/start${isPlan(plan) ? `?plan=${plan}` : ""}`, 303);
}

export async function POST(req: NextRequest) {
  const origin = req.nextUrl.origin;
  const form = await req.formData();
  const plan = field(form, "plan");
  const back = (query: string) => NextResponse.redirect(`${origin}/majestic-ads/start?plan=${isPlan(plan) ? plan : "first"}&${query}`, 303);

  if (!isPlan(plan)) return NextResponse.redirect(`${origin}/majestic-ads#price`, 303);
  if (field(form, "company")) return NextResponse.redirect(`${origin}/majestic-ads`, 303); // honeypot

  const name = field(form, "name");
  const email = normEmail(field(form, "email"));
  const host = siteHost(field(form, "site"));
  if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return back("error=details");
  if (!host || !host.includes(".")) return back("error=site");

  try {
    const q = await db();

    // The first-set price is for brands with no paid order yet. Match on email or website.
    if (plan === "first") {
      const prior = (await q`SELECT * FROM ma_orders WHERE email = ${email} OR site_host = ${host} ORDER BY created_at DESC LIMIT 10`) as Order[];
      for (const o of prior) {
        if (await refreshPaid(o)) return NextResponse.redirect(`${origin}/majestic-ads/start?plan=single&notice=first-used`, 303);
      }
    }

    const ref = newRef();
    await q`INSERT INTO ma_orders (ref, plan, name, email, site_host) VALUES (${ref}, ${plan}, ${name}, ${email}, ${host})`;

    if (plan === "monthly" && subscriptionsOn()) {
      const { subscriptionId, paymentIntentId } = await createSubscription({ name, email });
      await q`UPDATE ma_orders SET subscription_id = ${subscriptionId}, payment_intent_id = ${paymentIntentId} WHERE ref = ${ref}`;
      return NextResponse.redirect(`${origin}/majestic-ads/pay?ref=${ref}`, 303);
    }

    const session = await createCheckout({ ref, email, name }, plan, origin);
    await q`UPDATE ma_orders SET session_id = ${session.id} WHERE ref = ${ref}`;
    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    console.error("majestic-ads checkout failed", err);
    return NextResponse.redirect(`${origin}/majestic-ads/checkout-error`, 303);
  }
}
