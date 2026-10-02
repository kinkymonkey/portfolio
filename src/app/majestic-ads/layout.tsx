import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./majestic-ads.css";

const display = Bricolage_Grotesque({
  variable: "--font-ma-display",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const body = Instrument_Sans({
  variable: "--font-ma-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const title = "Majestic Ads: a fresh set of ads for your product";
const description =
  "6 image ads and 3 videos, each video with 3 different openings. Made from your product link, checked against your real product, ready in 10 days. $249 for your first set.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: "https://justinhenryteh.com/majestic-ads", type: "website" },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: "/majestic-ads" },
};

export default function MajesticAdsLayout({ children }: { children: React.ReactNode }) {
  return <div className={`ma ${display.variable} ${body.variable}`}>{children}</div>;
}
