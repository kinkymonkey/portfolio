import Image from "next/image";
import { Reveal } from "./Reveal";

const paragraphs = [
  "Fifteen years in graphic design and art direction led here, followed by ten more in creative leadership, running teams from three people up to 300. Leading Creative Teams: SOPs, KPIs, quality assurance, resourcing, and the systems that let creative work ship reliably across a team bigger than one person can manage alone. Whether the team is human, AI, or both, it still needs someone who knows how to run it.",
  "The part I'm actually good at starts before anyone's touched a single asset. Most creative problems aren't solved by working harder on the brief as written. They're solved by reading the actual situation: the category nobody's questioned, the catalogue nobody's looked at twice, the process everyone's just tolerating. That's the same instinct I bring to evaluating a new tool or a stalled process.",
  "Leading a team means the system has to survive contact with reality, not just look good on paper. The SOPs get written so people actually follow them; quality assurance catches problems before a client does. Real KPIs drive performance management, and when someone tries to avoid them, I step in, including making the hard call to let someone go when the alternative is letting errors reach a client. Team leadership has scaled past 30 people directly, plus a spin-off venture that reached roughly 300 at peak.",
  "Right now, that same rigor around SOPs and KPIs gets pointed at AI: tools get judged against real production standards. A video model that takes multiple reference images instead of just a start and end frame, or one that generates native audio instead of needing a bolted-on post pass, that's the kind of detail that decides whether a pipeline scales or falls apart. AI production has gone from brief to delivery, and an agent system now runs actual content operations.",
];

export function About() {
  return (
    <section id="about" className="border-t border-hairline bg-bg py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <Reveal>
            <div className="flex items-baseline gap-3 md:gap-5">
              <span
                aria-hidden
                className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-paper/10"
              >
                01
              </span>
              <h2 className="font-display text-4xl uppercase tracking-tight text-paper md:text-5xl">
                About
              </h2>
            </div>
          </Reveal>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-graphite md:text-lg">
            {paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.25}>
            <blockquote className="mt-8 border-l-2 border-ember pl-5 font-display text-2xl uppercase leading-snug tracking-tight text-paper md:text-3xl">
              The goal isn't running the tools. It's leading the team that
              does.
            </blockquote>
          </Reveal>
        </div>

        <div className="md:col-span-5">
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -top-3 -left-3 z-10 border border-paper/25 bg-bg px-2 py-0.5 font-data text-[10px] uppercase tracking-[0.1em] text-paper">
                Sys.Portrait // 001
              </div>
              <div className="img-shimmer relative aspect-[4/5] w-full overflow-hidden border border-paper/15">
                <Image
                  src="/images/jt-main.jpg"
                  alt="Portrait of Justin Teh"
                  fill
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
