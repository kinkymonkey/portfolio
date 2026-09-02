import Image from "next/image";
import Link from "next/link";
import { ArrowSquareOut, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { caseStudies } from "@/lib/data";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

const accentBg = {
  ember: "border-ember bg-ember",
  cerulean: "border-cerulean bg-cerulean",
};

export function WorkGrid() {
  return (
    <section id="work" className="border-t border-hairline bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-end justify-between gap-4 border-b border-hairline pb-4">
            <div className="flex items-baseline gap-3 md:gap-5">
              <span
                aria-hidden
                className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-paper/10"
              >
                01
              </span>
              <h2 className="font-display text-4xl uppercase tracking-tight text-paper md:text-5xl">
                Selected <span className="text-ember">work</span>
              </h2>
            </div>
            <span className="hidden font-data text-xs uppercase tracking-[0.1em] text-graphite sm:block">
              [ {String(caseStudies.length).padStart(2, "0")} records ]
            </span>
          </div>
        </Reveal>

        <RevealStagger className="mt-10 grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <RevealItem key={cs.slug} className="bg-bg">
              <Link
                href={`/work/${cs.slug}`}
                className="group flex h-full flex-col p-5 transition-colors hover:bg-surface/60"
              >
                <div className="img-shimmer relative aspect-[4/5] w-full overflow-hidden border border-paper/15">
                  <Image
                    src={cs.coverImage.src}
                    alt={cs.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    style={{ objectPosition: cs.coverImage.focus ?? "50% 50%" }}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 border border-paper/25 bg-bg/80 px-2 py-0.5 font-data text-[10px] uppercase tracking-[0.1em] text-paper backdrop-blur-sm">
                    №{String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`absolute right-2 bottom-2 border px-2 py-0.5 font-data text-[10px] uppercase tracking-[0.1em] text-bg ${accentBg[cs.accent]}`}
                  >
                    {cs.tag}
                  </span>
                </div>

                <div className="mt-4 flex flex-1 flex-col border-t border-hairline pt-4">
                  <h3 className="font-display text-xl uppercase tracking-tight text-paper">
                    {cs.title}
                  </h3>
                  <p className="mt-1 font-data text-xs uppercase tracking-[0.05em] text-graphite">
                    {cs.client}
                  </p>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-graphite">
                    {cs.hook}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 font-data text-xs uppercase tracking-[0.1em] text-paper">
                    Read the case file
                    <ArrowUpRight
                      size={14}
                      weight="bold"
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 border border-paper/15 bg-surface px-6 py-3 font-data text-xs uppercase tracking-[0.1em] text-paper transition-colors hover:border-ember/60 hover:bg-surface-2"
            >
              See more
              <ArrowUpRight
                size={14}
                weight="bold"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <a
              href="https://www.behance.net/kinkymonkey"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-paper/15 bg-surface px-6 py-3 font-data text-xs uppercase tracking-[0.1em] text-paper transition-colors hover:border-ember/60 hover:bg-surface-2"
            >
              More work on Behance
              <ArrowSquareOut
                size={14}
                weight="bold"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
