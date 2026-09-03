import { timeline } from "@/lib/data";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

export function Timeline() {
  return (
    <section id="experience" className="border-t border-hairline bg-bg py-[60px] md:py-[100px]">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <Reveal>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5.625rem)] font-normal leading-[1.05] tracking-[-0.02em] text-ink">
            Trajectory
          </h2>
        </Reveal>

        <RevealStagger className="mt-12 border-t border-hairline">
          {timeline.map((entry) => (
            <RevealItem
              key={`${entry.org}-${entry.years}`}
              className="grid grid-cols-1 gap-2 border-b border-hairline py-8 md:grid-cols-12 md:gap-8"
            >
              <p className="font-body text-sm tracking-[0.04em] text-ink/70 md:col-span-3">
                {entry.years}
              </p>
              <div className="md:col-span-9">
                <h3 className="font-display text-[clamp(1.5rem,2.4vw,2.25rem)] font-normal leading-[1.15] tracking-[-0.02em] text-ink">
                  {entry.role}
                </h3>
                <p className="mt-2 font-body text-base leading-snug text-ink/70">
                  {entry.org}
                </p>
                <p className="mt-3 max-w-[62ch] font-body text-base leading-[1.7] text-ink">
                  {entry.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
