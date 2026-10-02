import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { Contact } from "@/components/Contact";
import { site } from "@/lib/data";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://justinhenryteh.com"),
  title: "Justin Henry Teh, Creative Operations Director",
  description:
    "20+ years as a designer and art director, 8 of them running creative teams. Same job now, with AI in the pipeline, judged in production, not from a vendor demo.",
  openGraph: {
    title: "Justin Henry Teh, Creative Operations Director",
    description:
      "20+ years as a designer and art director, 8 of them running creative teams. Same job now, with AI in the pipeline, judged in production, not from a vendor demo.",
    url: "https://justinhenryteh.com",
    siteName: "Justin Henry Teh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Henry Teh, Creative Operations Director",
    description:
      "20+ years as a designer and art director, 8 of them running creative teams. Same job now, with AI in the pipeline, judged in production, not from a vendor demo.",
  },
  alternates: { canonical: "./" },
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: "https://justinhenryteh.com",
  sameAs: [site.linkedin],
};

export const viewport: Viewport = {
  themeColor: "#0b101c",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${sans.variable} antialiased`}
      >
        {/*
          THESIS: A printed editorial issue, not a navy dossier — the work is the magazine.
          OWN-WORLD: Midnight blue-black (#0b101c); Playfair Display for all serif; Inter for nav and body.
          STORY: Recruiters and clients scan case studies like features, then open one, then message on LinkedIn.
          FIRST VIEWPORT: Full-bleed portrait banner with overlay masthead; copy sits in the right-hand void; then the 4-column 3:4 work grid.
          FORM: Exhibition Magazine, user-pinned, with the requested global type system.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <SmoothScroll />
        <Nav />
        {children}
        <Contact />
        <Analytics />
      </body>
    </html>
  );
}
