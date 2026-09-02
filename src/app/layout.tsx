import type { Metadata, Viewport } from "next";
import { Anton, Public_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://justinteh.me"),
  title: "Justin Teh, Creative Operations Director",
  description:
    "Fifteen years as a graphic designer and art director across print, web, and more. The last ten spent stepping into creative leadership, running teams for top brands. Creative operations, and the leadership to run any team, AI included.",
  openGraph: {
    title: "Justin Teh, Creative Operations Director",
    description:
      "Fifteen years as a graphic designer and art director across print, web, and more. The last ten spent stepping into creative leadership, running teams for top brands. Creative operations, and the leadership to run any team, AI included.",
    url: "https://justinteh.me",
    siteName: "Justin Teh",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#14132c",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${publicSans.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
