import type { Metadata } from "next";
import Link from "next/link";
import { PLANS, isPlan } from "../_lib/plans";

export const metadata: Metadata = { title: "Checkout | Majestic Ads", robots: { index: false } };

const ERRORS: Record<string, string> = {
  details: "Add your name and a valid email.",
  site: "Add your brand's website, like yourbrand.com.",
};

export default async function Start({ searchParams }: { searchParams: Promise<{ plan?: string; error?: string; notice?: string }> }) {
  const sp = await searchParams;
  const key = isPlan(sp.plan) ? sp.plan : "first";
  const plan = PLANS[key];

  return (
    <main className="ma-sec">
      <div className="ma-wrap ma-narrow">
        <Link href="/majestic-ads#price" className="ma-small">Back to pricing</Link>
        <h1 className="ma-h2">{plan.label}: ${plan.usd.toLocaleString("en-US")}</h1>
        <p className="ma-body">{plan.blurb}</p>
        {key === "monthly" && (
          <p className="ma-body">
            Your card is charged every month until you cancel. Cancel anytime by messaging me.
          </p>
        )}

        {sp.notice === "first-used" && (
          <p className="ma-notice" role="status">
            This email or website has already had a set, so the first-set price no longer applies. A core sprint is $1,500.
          </p>
        )}
        {sp.error && ERRORS[sp.error] && (
          <p className="ma-notice ma-notice--error" role="alert">{ERRORS[sp.error]}</p>
        )}

        <form className="ma-form" method="post" action="/api/majestic-ads/checkout">
          <input type="hidden" name="plan" value={key} />
          <input className="ma-hp" type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <label>
            Your name
            <input name="name" required autoComplete="name" maxLength={120} />
          </label>
          <label>
            Email
            <input name="email" type="email" required autoComplete="email" maxLength={200} />
          </label>
          <label>
            Your brand&apos;s website
            <input name="site" required placeholder="yourbrand.com" inputMode="url" maxLength={200} />
          </label>
          <button className="ma-btn" type="submit">Continue to payment</button>
        </form>

        <p className="ma-small">
          You are charged ${plan.usd.toLocaleString("en-US")} in US dollars through Stripe. If your card is in another currency, your card issuer
          converts it at its own rate.
        </p>
      </div>
    </main>
  );
}
