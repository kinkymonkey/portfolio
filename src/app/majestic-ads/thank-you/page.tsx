import type { Metadata } from "next";
import Link from "next/link";
import { db, type Order } from "../_lib/db";
import { refreshPaid } from "../_lib/paymongo";
import { links } from "../links";
import { IntakeForm } from "./IntakeForm";

export const metadata: Metadata = { title: "Thank you | Majestic Ads", robots: { index: false } };

export default async function ThankYou({ searchParams }: { searchParams: Promise<{ ref?: string }> }) {
  const { ref } = await searchParams;
  let order: Order | undefined;
  let paid = false;
  try {
    const q = await db();
    order = ((await q`SELECT * FROM ma_orders WHERE ref = ${ref ?? ""}`) as Order[])[0];
    if (order) paid = await refreshPaid(order);
  } catch (err) {
    console.error("majestic-ads thank-you failed", err);
  }

  return (
    <main className="ma-sec">
      <div className="ma-wrap ma-narrow">
        {paid && order ? (
          <>
            <h1 className="ma-h1">Thank you.</h1>
            <p className="ma-lede">PayMongo emails your receipt. Now tell me about your brand and send your files.</p>
            {order.intake ? (
              <p className="ma-notice" role="status">I already have your details. Your set is ready about 10 days after I received them.</p>
            ) : (
              <IntakeForm reference={order.ref} defaultBrand={order.site_host} />
            )}
          </>
        ) : order ? (
          <>
            <h1 className="ma-h2">Waiting for your payment to confirm.</h1>
            <p className="ma-body">Some payments take a minute. Refresh this page. If you have not paid yet, you can go back.</p>
            <div className="ma-cta-row">
              <Link className="ma-btn" href={`/majestic-ads/thank-you?ref=${order.ref}`}>Refresh</Link>
              <Link className="ma-btn ma-btn--ghost" href={`/majestic-ads/start?plan=${order.plan}`}>Back to checkout</Link>
            </div>
          </>
        ) : (
          <>
            <h1 className="ma-h2">We could not find that order.</h1>
            <p className="ma-body">If you paid and landed here, message me and I will sort it out.</p>
            <div className="ma-cta-row">
              <a className="ma-btn" href={links.linkedin}>Message me on LinkedIn</a>
              <Link className="ma-btn ma-btn--ghost" href="/majestic-ads">Back to Majestic Ads</Link>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
