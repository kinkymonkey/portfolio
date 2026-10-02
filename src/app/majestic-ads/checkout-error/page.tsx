import type { Metadata } from "next";
import Link from "next/link";
import { links } from "../links";

export const metadata: Metadata = {
  title: "Checkout unavailable | Majestic Ads",
  robots: { index: false },
};

export default function CheckoutError() {
  return (
    <main className="ma-sec">
      <div className="ma-wrap">
        <h1 className="ma-h1">Checkout did not open.</h1>
        <p className="ma-lede">Nothing was charged. Try again, or message me and I will send a payment link.</p>
        <div className="ma-cta-row">
          <Link className="ma-btn" href="/majestic-ads#price">
            Back to pricing
          </Link>
          <a className="ma-btn ma-btn--ghost" href={links.linkedin}>
            Message me on LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
}
