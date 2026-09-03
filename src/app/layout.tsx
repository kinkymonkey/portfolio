import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { Contact } from "@/components/Contact";
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
  metadataBase: new URL("https://justinteh.me"),
  title: "Justin Henry Teh, Creative Operations Director",
  description:
    "Fifteen years as a designer and art director. Ten more running creative teams. Same job now, with AI in the pipeline, judged in production, not from a vendor demo.",
  openGraph: {
    title: "Justin Henry Teh, Creative Operations Director",
    description:
      "Fifteen years as a designer and art director. Ten more running creative teams. Same job now, with AI in the pipeline, judged in production, not from a vendor demo.",
    url: "https://justinteh.me",
    siteName: "Justin Henry Teh",
    type: "website",
  },
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
        <SmoothScroll />
        <Nav />
        {children}
        <Contact />
      </body>
    </html>
  );
}
