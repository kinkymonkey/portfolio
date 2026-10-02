import type { Metadata } from "next";
import Link from "next/link";
import { db, type Order } from "../_lib/db";
import { paymentIntentClientKey, publicKey } from "../_lib/paymongo";
import { PLANS, phpFor } from "../_lib/plans";
import { CardForm } from "./CardForm";

export const metadata: Metadata = { title: "Pay | Majestic Ads", robots: { index: false } };

export default async function Pay({ searchParams }: { searchParams: Promise<{ ref?: string }> }) {
  const { ref } = await searchParams;
  let order: Order | undefined;
  let clientKey = "";
  try {
    const q = await db();
    order = ((await q`SELECT * FROM ma_orders WHERE ref = ${ref ?? ""} AND plan = 'monthly'`) as Order[])[0];
    if (order?.payment_intent_id) clientKey = await paymentIntentClientKey(order.payment_intent_id);
  } catch (err) {
    console.error("majestic-ads pay page failed", err);
  }

  if (!order || !order.payment_intent_id || !clientKey || !publicKey()) {
    return (
      <main className="ma-sec">
        <div className="ma-wrap ma-narrow">
          <h1 className="ma-h2">This payment link is not valid.</h1>
          <Link className="ma-btn" href="/majestic-ads/start?plan=monthly">Start again</Link>
        </div>
      </main>
    );
  }

  const usd = PLANS.monthly.usd;
  return (
    <main className="ma-sec">
      <div className="ma-wrap ma-narrow">
        <h1 className="ma-h2">3 sets a month: ${usd.toLocaleString("en-US")}</h1>
        <p className="ma-body">
          Your card is charged ₱{phpFor(usd).toLocaleString("en-PH")} now and again every month. Cancel anytime by messaging me.
        </p>
        <CardForm
          publicKey={publicKey()!}
          clientKey={clientKey}
          paymentIntentId={order.payment_intent_id}
          returnUrl={`/majestic-ads/thank-you?ref=${order.ref}`}
          name={order.name}
          email={order.email}
        />
        <p className="ma-small">Card details go straight to PayMongo. They never touch this site.</p>
      </div>
    </main>
  );
}
