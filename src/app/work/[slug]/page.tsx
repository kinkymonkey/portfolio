import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { caseStudies, getCaseStudy } from "@/lib/data";
import { Nav } from "@/components/Nav";
import { Contact } from "@/components/Contact";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.title}, Justin Teh`,
    description: cs.hook,
  };
}

const accentText = {
  ember: "text-ember",
  cerulean: "text-cerulean",
};
const accentBg = {
  ember: "bg-ember",
  cerulean: "bg-cerulean",
};
const accentBorder = {
  ember: "border-ember",
  cerulean: "border-cerulean",
};

/** Pulls a short opening sentence out for a display-sized quote; returns
 * null when the first sentence runs too long to read well at that size. */
function splitLede(text: string): { quote: string; rest: string } | null {
  const match = text.match(/^([\s\S]{1,150}?[.!?])\s([\s\S]*)$/);
  if (!match) return null;
  return { quote: match[1], rest: match[2] };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const index = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  const gallery = cs.gallery ?? [];
  const bodySections = cs.sections.slice(0, -1);
  const closer = cs.sections[cs.sections.length - 1];

  // Spread gallery images evenly between the body sections so the page
  // reads image / text / image instead of dumping the gallery at the end.
  const insertAfter = new Map<number, (typeof gallery)[number]>();
  gallery.forEach((img, g) => {
    const slot = Math.min(
      bodySections.length - 1,
      Math.round(((g + 1) * bodySections.length) / (gallery.length + 1)) - 1
    );
    if (!insertAfter.has(slot)) insertAfter.set(slot, img);
  });

  return (
    <>
      <Nav />
      <main className="bg-bg">
        <header className="border-b border-hairline py-14 md:py-20">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <Link
                href="/#work"
                className="inline-flex items-center gap-1.5 font-data text-xs uppercase tracking-[0.1em] text-graphite transition-colors hover:text-paper"
              >
                <ArrowLeft size={14} weight="bold" />
                All work
              </Link>

              <div className="mt-8 flex items-center gap-3">
                <span className={`h-2 w-2 ${accentBg[cs.accent]}`} aria-hidden />
                <span
                  className={`font-data text-xs uppercase tracking-[0.1em] ${accentText[cs.accent]}`}
                >
                  {cs.tag}
                </span>
              </div>

              <h1 className="mt-4 text-balance font-display text-4xl uppercase leading-[0.95] tracking-tight text-paper md:text-5xl">
                {cs.title}
              </h1>
              <p className="mt-3 font-data text-xs uppercase tracking-[0.05em] text-graphite">
                {cs.client}
              </p>
              <p className="mt-6 max-w-[52ch] text-balance text-lg leading-relaxed text-graphite">
                {cs.hook}
              </p>
            </div>

            <div className="md:col-span-5">
              <Reveal delay={0.1}>
                <div className="relative">
                  <div className="absolute -top-3 -left-3 z-10 border border-paper/25 bg-bg px-2 py-0.5 font-data text-[10px] uppercase tracking-[0.1em] text-paper">
                    Fig. 01
                  </div>
                  <div className="relative aspect-[4/5] w-full overflow-hidden border border-paper/15 bg-surface">
                    <Image
                      src={cs.coverImage.src}
                      alt={cs.title}
                      fill
                      priority
                      sizes="(min-width: 768px) 40vw, 90vw"
                      style={{ objectPosition: cs.coverImage.focus ?? "50% 50%" }}
                      className="object-cover"
                    />
                  </div>
                  <div
                    className={`absolute -right-3 -bottom-3 z-10 border ${accentBorder[cs.accent]} ${accentBg[cs.accent]} px-2 py-0.5 font-data text-[10px] uppercase tracking-[0.1em] text-bg`}
                  >
                    {cs.tag}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </header>

        <article className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            {bodySections.map((section, i) => {
              const img = insertAfter.get(i);
              const alignEnd = i % 2 === 1;
              return (
                <div key={section.heading}>
                  <Reveal delay={i === 0 ? 0 : 0.05}>
                    <div
                      className={`grid grid-cols-1 gap-4 border-t border-hairline py-10 md:grid-cols-[12rem_1fr] md:gap-8 ${
                        i === bodySections.length - 1 && !img ? "border-b" : ""
                      }`}
                    >
                      <h2 className="font-data text-xs uppercase tracking-[0.1em] text-graphite">
                        {section.heading}
                      </h2>
                      <div className="space-y-4">
                        {section.body.map((p, j) => (
                          <p
                            key={j}
                            className="max-w-[64ch] text-base leading-relaxed text-paper/85 md:text-[17px]"
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                  {img && (
                    <Reveal>
                      <div
                        className={`flex border-b border-hairline py-8 ${
                          alignEnd ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden border border-paper/15 bg-surface md:max-w-sm">
                          <Image
                            src={img.src}
                            alt={cs.title}
                            fill
                            sizes="(min-width: 768px) 384px, 90vw"
                            style={{ objectPosition: img.focus ?? "50% 50%" }}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </Reveal>
                  )}
                </div>
              );
            })}

            <Reveal>
              <div className="py-14">
                <span
                  className={`font-data text-xs uppercase tracking-[0.1em] ${accentText[cs.accent]}`}
                >
                  {closer.heading}
                </span>
                {(() => {
                  const lede = splitLede(closer.body[0]);
                  if (!lede) {
                    return (
                      <div className="mt-4 space-y-4">
                        {closer.body.map((p, j) => (
                          <p
                            key={j}
                            className="max-w-[64ch] text-base leading-relaxed text-paper/85 md:text-[17px]"
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <>
                      <blockquote
                        className={`mt-4 max-w-[36ch] border-l-2 pl-5 font-display text-2xl uppercase leading-snug tracking-tight text-paper md:text-3xl ${accentBorder[cs.accent]}`}
                      >
                        {lede.quote}
                      </blockquote>
                      <div className="mt-5 space-y-4">
                        <p className="max-w-[64ch] text-base leading-relaxed text-paper/85 md:text-[17px]">
                          {lede.rest}
                        </p>
                        {closer.body.slice(1).map((p, j) => (
                          <p
                            key={j}
                            className="max-w-[64ch] text-base leading-relaxed text-paper/85 md:text-[17px]"
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </div>
            </Reveal>
          </div>
        </article>

        <div className="border-t border-hairline py-14">
          <div className="mx-auto max-w-3xl px-6">
            <Link
              href={`/work/${next.slug}`}
              className="group flex items-center justify-between border border-paper/15 bg-surface p-7 transition-colors hover:border-ember/60 hover:bg-surface-2"
            >
              <div>
                <span className="font-data text-xs uppercase tracking-[0.1em] text-graphite">
                  Next case file
                </span>
                <h3 className="mt-2 font-display text-2xl uppercase tracking-tight text-paper">
                  {next.title}
                </h3>
              </div>
              <ArrowUpRight
                size={22}
                weight="bold"
                className="shrink-0 text-paper transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </main>
      <Contact />
    </>
  );
}
