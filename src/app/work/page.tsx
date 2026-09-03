import type { Metadata } from "next";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import { WorkCard, workCards } from "@/components/WorkCards";

export const metadata: Metadata = {
  title: "Work, Justin Henry Teh",
  description:
    "Named-client work and AI video production: what was built, what broke, and what actually held.",
};

export default function WorkIndex() {
  return (
    <main className="bg-bg">
      <header className="border-b border-hairline py-14 md:py-20">
        <div className="mx-auto max-w-[1400px] px-4 md:px-6">
          <Reveal>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5.625rem)] font-normal leading-[1.05] tracking-[-0.02em] text-ink">
              Work
            </h1>
            <p className="mt-6 max-w-[52ch] font-body text-base leading-[1.7] text-ink md:text-[17px]">
              Full-depth write-ups and visual production showcases. What was
              built. What broke. What the fix actually was.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="py-[60px] md:py-[100px]">
        <div className="mx-auto max-w-[1400px] px-4 md:px-6">
          <RevealStagger className="grid grid-cols-1 items-start gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {workCards.map((item) => (
              <RevealItem key={item.slug}>
                <WorkCard item={item} heading="h2" />
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>
    </main>
  );
}
