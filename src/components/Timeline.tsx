import { timeline } from "@/lib/data";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

export function Timeline() {
  return (
    <section id="experience" className="border-t border-hairline bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="font-display text-4xl uppercase tracking-tight text-paper md:text-5xl">
            Trajectory
          </h2>
        </Reveal>

        <RevealStagger className="mt-10 border-t border-hairline">
          {timeline.map((entry, i) => (
            <RevealItem
              key={`${entry.org}-${entry.years}`}
              className="group flex flex-col gap-2 border-b border-hairline px-2 py-6 transition-colors hover:bg-bg md:flex-row md:items-baseline md:gap-8 md:px-4"
            >
              <span className="font-display text-2xl text-paper/20 md:w-16">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h3 className="font-display text-xl uppercase tracking-tight text-paper">
                  {entry.role}
                </h3>
                <p className="mt-0.5 font-data text-xs uppercase tracking-[0.05em] text-graphite">
                  {entry.org}
                </p>
                <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-graphite">
                  {entry.description}
                </p>
              </div>
              <span className="font-data text-xs uppercase tracking-[0.06em] text-cerulean md:whitespace-nowrap">
                {entry.years}
              </span>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
