import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

const whatIDo = [
  {
    title: "Creative Direction",
    body: "When briefs come in, I set the creative direction and assign tasks to the right team member, watching due dates and checking quality before it goes back to the client.",
  },
  {
    title: "Creative Operations",
    body: "Resourcing, traffic, and quality assurance, keeping turnaround time and KPIs on track across the whole team.",
  },
  {
    title: "Team Leadership",
    body: "Performance management against real KPIs. Recruitment when a gap opens up. And the harder call: holding the line when someone puts the work at risk, even when it costs the team a person.",
  },
  {
    title: "AI Production",
    body: "AI production work has gone from brief to delivery, keeping the team current on the latest tools and technology. Leading a team through new technology is still leading a team.",
  },
];

export function AboutSnippet() {
  return (
    <section id="about" className="border-t border-hairline bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between gap-6 border-b border-hairline pb-14">
          <Reveal>
            <span className="font-data text-xs uppercase tracking-[0.15em] text-graphite">
              (About me)
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <Link
              href="/about"
              className="group inline-flex items-center gap-1.5 font-data text-xs uppercase tracking-[0.1em] text-paper transition-colors hover:text-ember"
            >
              Read the full story
              <ArrowUpRight
                size={14}
                weight="bold"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          <div className="flex items-start justify-between border-b border-hairline pb-8 md:col-span-3 md:border-b-0">
            <span className="font-data text-xs uppercase tracking-[0.15em] text-graphite">
              (What I do)
            </span>
            <ArrowDownRight size={18} weight="light" className="text-ember" />
          </div>

          <RevealStagger className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 md:col-span-9">
            {whatIDo.map((item) => (
              <RevealItem key={item.title} className="border-b border-hairline pb-8">
                <h3 className="font-display text-xl uppercase tracking-tight text-paper">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite">
                  {item.body}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
