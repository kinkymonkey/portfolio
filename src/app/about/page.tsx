import type { Metadata } from "next";
import { About } from "@/components/About";
import { Brands } from "@/components/Brands";
import { Capabilities } from "@/components/Capabilities";
import { Timeline } from "@/components/Timeline";

export const metadata: Metadata = {
  title: "About, Justin Henry Teh",
  description:
    "20+ years designing, 8 running teams. Same standard, now pointed at AI production: SOPs, quality assurance, and the call to make the stack work.",
};

export default function AboutPage() {
  return (
    <main>
      <About />
      <Brands />
      <Capabilities />
      <Timeline />
    </main>
  );
}
