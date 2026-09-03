import { toolkit } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Capabilities() {
  return (
    <section className="border-t border-hairline bg-bg">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Reveal>
          <h2 className="mb-8 font-mono text-xs tracking-[0.25em] text-neutral-500 uppercase">
            Capabilities & Infrastructure
          </h2>
        </Reveal>

        <div className="border-t border-neutral-800/80">
          {toolkit.map((group) => (
            <div
              key={group.label}
              className="-mx-3 flex flex-col justify-between gap-2 rounded-sm border-b border-neutral-800/80 px-3 py-5 transition-colors duration-150 hover:bg-white/[0.02] md:flex-row md:items-center md:gap-8"
            >
              <span className="w-48 shrink-0 font-mono text-xs tracking-widest text-neutral-400 uppercase">
                {group.label}
              </span>
              <p className="text-sm font-light text-neutral-200">
                {group.tools.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
