import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { About } from "@/components/About";
import { Capabilities } from "@/components/Capabilities";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "About, Justin Teh",
  description:
    "Creative operations director: the pipelines, SOPs, and QA gates that let creative work ship on schedule and on brand, and twenty-plus years of trajectory that led here.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <About />
        <Capabilities />
        <Timeline />
      </main>
      <Contact />
    </>
  );
}
