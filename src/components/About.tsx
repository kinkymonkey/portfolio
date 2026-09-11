import Image from "next/image";
import { Reveal } from "./Reveal";

const paragraphs = [
  "If you're hiring a Creative Operations Director, the real question is whether I can run the team when the stack changes. That's the job. Here's how I learned it.",
  "20+ years in graphic design and art direction. 8 of those running creative teams, from 3 people up to about 300 counting a spin-off. I built the SOPs, KPIs, QA, resourcing, the systems that keep work moving once one person can't hold every file.",
  "The useful work starts before anyone opens a file. Most creative problems aren't fixed by grinding harder on the brief. They're fixed by reading the situation: the category nobody questioned, the catalogue nobody looked at twice, the process everyone's just putting up with.",
  "A system people can skip isn't a system, and I've proven it. When someone tried, I let them go and had a replacement in the chair within 2 weeks. The client never saw the gap.",
  "I hold AI to the same standard now. Whether a model takes multiple reference images or just a start and end frame isn't trivia, it's the gap between a demo and a pipeline that scales. So is native audio versus a bolted-on post pass. My pipeline runs brief to delivery; an agent system runs the content operations under it.",
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
              I&apos;m not here to run the tools. I&apos;m here to lead the team that does.
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
