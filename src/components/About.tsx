import Image from "next/image";
import { Reveal } from "./Reveal";

const paragraphs = [
  "If you're hiring a Creative Operations Director, the question is whether they can run the team when the stack changes. That's the job. This page is how it got learned.",
  "Fifteen years in graphic design and art direction. Ten more running creative teams, from three people up to about 300 when a spin-off is counted in. SOPs. KPIs. Quality assurance. Resourcing. The systems that deliver the work when one person can no longer hold every file.",
  "The useful work starts before anyone opens a file. Most creative problems aren't solved by working harder on the brief as written. They're solved by reading the situation: the category nobody questioned, the catalogue nobody looked at twice, the process everyone is just living with.",
  "A system people can skip is not a system. When someone tried, they were let go. A replacement was in the chair in two weeks. The client never saw the gap.",
  "That same standard now points at AI. Whether a model takes multiple reference images, or only a start and end frame, is not trivia. Native audio versus a bolted-on post pass is the difference between a demo and a pipeline that scales. The pipeline now runs from brief to delivery. An agent system runs the content operations.",
];

export function About() {
  return (
    <section id="about" className="border-t border-hairline bg-bg py-[60px] md:py-[100px]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-4 md:grid-cols-12 md:gap-12 md:px-6">
        <div className="md:col-span-7">
          <Reveal>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5.625rem)] font-normal leading-[1.05] tracking-[-0.02em] text-ink">
              About
            </h1>
          </Reveal>

          <div className="mt-10 space-y-5 font-body text-base leading-[1.7] text-ink md:text-[17px]">
            {paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="max-w-[62ch]">{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.25}>
            <p className="mt-10 max-w-[20ch] font-display text-[clamp(1.75rem,3vw,2.5rem)] font-normal leading-[1.15] tracking-[-0.02em] text-ink">
              The goal isn&apos;t running the tools. It&apos;s leading the team that does.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-5">
          <Reveal delay={0.1}>
            <div className="img-shimmer relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/jt-main.jpg"
                alt="Portrait of Justin Henry Teh"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
