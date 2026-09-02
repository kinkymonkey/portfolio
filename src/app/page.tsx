import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Brands } from "@/components/Brands";
import { WorkGrid } from "@/components/WorkGrid";
import { AboutSnippet } from "@/components/AboutSnippet";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Brands />
        <WorkGrid />
        <AboutSnippet />
      </main>
      <Contact />
    </>
  );
}
