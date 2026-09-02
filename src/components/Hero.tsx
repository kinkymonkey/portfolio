import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-bg pt-28 pb-16 md:pt-36 md:pb-24">
      <div
        aria-hidden
        className="hero-glow pointer-events-none absolute -top-1/4 -left-1/4 h-[60vw] w-[60vw] max-h-[560px] max-w-[560px] rounded-full bg-ember/30 blur-[130px]"
      />
      <div
        aria-hidden
        className="hero-glow-alt pointer-events-none absolute -right-1/4 -bottom-1/3 h-[50vw] w-[50vw] max-h-[480px] max-w-[480px] rounded-full bg-cerulean/20 blur-[130px]"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <Reveal>
            <h1 className="text-balance font-display uppercase tracking-tight text-paper">
              <span className="block text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.92]">
                Creative Operations
              </span>
              <span className="mt-3 block whitespace-nowrap text-[clamp(1.15rem,2.8vw,2rem)] leading-tight text-graphite">
                for a <span className="text-ember">generative</span> era.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-8 max-w-[46ch] border-l-2 border-ember pl-5 text-base leading-relaxed text-graphite md:text-lg">
              Justin Teh, creative operations. Fifteen years as a graphic
              designer and art director, print, web, everything. The last
              ten spent stepping into creative leadership, running teams for
              top brands. Whatever the team looks like today, human, AI, or
              both, it still needs someone who knows how to run it.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="#work"
                className="group inline-flex items-center gap-2 border border-paper/25 px-6 py-3 font-data text-xs uppercase tracking-[0.1em] text-paper transition-colors hover:border-ember hover:bg-ember hover:text-bg"
              >
                View my work
                <ArrowDown
                  size={14}
                  weight="bold"
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </Link>
              <span className="font-data text-xs uppercase tracking-[0.15em] text-graphite/70">
                Sys.Init // Creative Operations Director // V.1
              </span>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-5">
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -top-3 -left-3 z-10 border border-paper/25 bg-bg px-2 py-0.5 font-data text-[10px] uppercase tracking-[0.1em] text-paper">
                Sys.Portrait // 001
              </div>
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-paper/15 bg-surface">
                <Image
                  src="/images/jt-main.jpg"
                  alt="Portrait of Justin Teh"
                  fill
                  priority
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                />
              </div>
              <div className="absolute -right-3 -bottom-3 z-10 border border-ember bg-ember px-2 py-0.5 font-data text-[10px] uppercase tracking-[0.1em] text-bg">
                Coord: Remote
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
