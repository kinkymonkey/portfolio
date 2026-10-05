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

const title = "Majestic Ads: test-ready Meta and TikTok ads for your product";
const description =
  "New hooks, angles and formats for Meta and TikTok, checked against your real product. First creative sprint: 6 image ads and 3 videos in 5 to 7 business days, $499.";

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
