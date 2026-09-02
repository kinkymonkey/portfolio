import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Play } from "@phosphor-icons/react/dist/ssr";
import { caseStudies, ugcCaseStudies } from "@/lib/data";
import { Nav } from "@/components/Nav";
import { Contact } from "@/components/Contact";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Case Studies, Justin Teh",
  description:
    "The full case study repository: campaign and ops work, plus AI video production write-ups, pipeline decisions, failure modes, and what actually held up.",
};

const accentBg = {
  ember: "border-ember bg-ember",
  cerulean: "border-cerulean bg-cerulean",
};

type DisplayCase = {
  slug: string;
  href: string;
  title: string;
  client: string;
  tag: string;
  accent: "ember" | "cerulean";
  hook: string;
  thumbnail: string;
  focus?: string;
  isVideo: boolean;
};

// Main portfolio case studies first, UGC video case studies last.
const items: DisplayCase[] = [
  ...caseStudies.map((cs) => ({
    slug: cs.slug,
    href: `/work/${cs.slug}`,
    title: cs.title,
    client: cs.client,
    tag: cs.tag,
    accent: cs.accent,
    hook: cs.hook,
    thumbnail: cs.coverImage.src,
    focus: cs.coverImage.focus,
    isVideo: false,
  })),
  ...ugcCaseStudies.map((cs) => ({
    slug: cs.slug,
    href: `/case-studies/${cs.slug}`,
    title: cs.title,
    client: cs.client,
    tag: cs.tag,
    accent: cs.accent,
    hook: cs.hook,
    thumbnail: cs.coverVideo.poster,
    isVideo: true,
  })),
];

export default function CaseStudiesIndex() {
  return (
    <>
      <Nav />
      <main className="bg-bg">
        <header className="border-b border-hairline py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <span className="font-data text-xs uppercase tracking-[0.1em] text-cerulean">
                Repository
              </span>
              <h1 className="mt-4 text-balance font-display text-4xl uppercase leading-[0.95] tracking-tight text-paper md:text-5xl">
                Case Studies
              </h1>
              <p className="mt-4 max-w-[56ch] text-balance text-lg leading-relaxed text-graphite">
                The full record: campaign and ops work, plus AI video
                production write-ups, what was built, what broke, and what
                the fix actually was. Grows as new work ships.
              </p>
            </Reveal>
          </div>
        </header>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <RevealStagger className="grid grid-cols-2 gap-px border border-hairline bg-hairline sm:grid-cols-3 lg:grid-cols-4">
              {items.map((cs, i) => (
                <RevealItem key={cs.slug} className="bg-bg">
                  <Link
                    href={cs.href}
                    className="group flex h-full flex-col p-3 transition-colors hover:bg-surface/60 md:p-4"
                  >
                    <div className="relative aspect-[4/5] w-full overflow-hidden border border-paper/15 bg-surface">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={cs.thumbnail}
                        alt={cs.title}
                        style={{ objectPosition: cs.focus ?? "50% 50%" }}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-1.5 left-1.5 border border-paper/25 bg-bg/80 px-1.5 py-0.5 font-data text-[9px] uppercase tracking-[0.1em] text-paper backdrop-blur-sm">
                        №{String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`absolute right-1.5 bottom-1.5 border px-1.5 py-0.5 font-data text-[9px] uppercase tracking-[0.1em] text-bg ${accentBg[cs.accent]}`}
                      >
                        {cs.tag}
                      </span>
                      {cs.isVideo && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/40 bg-bg/60 backdrop-blur-sm transition-transform group-hover:scale-110">
                            <Play size={14} weight="fill" className="text-paper" />
                          </span>
                        </span>
                      )}
                    </div>

                    <div className="mt-3 flex flex-1 flex-col border-t border-hairline pt-3">
                      <h3 className="font-display text-base uppercase tracking-tight text-paper md:text-lg">
                        {cs.title}
                      </h3>
                      <p className="mt-1 font-data text-[10px] uppercase tracking-[0.05em] text-graphite">
                        {cs.client}
                      </p>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-graphite">
                        {cs.hook}
                      </p>
                      <div className="mt-3 inline-flex items-center gap-1.5 font-data text-[10px] uppercase tracking-[0.1em] text-paper">
                        Read the case file
                        <ArrowUpRight
                          size={12}
                          weight="bold"
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </div>
                  </Link>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>
      </main>
      <Contact />
    </>
  );
}
