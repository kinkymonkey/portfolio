import { Cpu, PenNib, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { capabilities, toolkit } from "@/lib/data";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

const icons = {
  "AI Creative Pipelines": Cpu,
  "Creative Operations": UsersThree,
  "Direction & Craft": PenNib,
} as const;

export function Capabilities() {
  const [pipelines, operations, direction] = capabilities;
  const PipelinesIcon = icons[pipelines.title as keyof typeof icons];
  const OperationsIcon = icons[operations.title as keyof typeof icons];
  const DirectionIcon = icons[direction.title as keyof typeof icons];

  return (
    <section className="border-t border-hairline bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-baseline gap-3 md:gap-5">
            <span
              aria-hidden
              className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-paper/10"
            >
              02
            </span>
            <h2 className="font-display uppercase tracking-tight">
              <span className="text-2xl text-graphite md:text-3xl">What I</span>{" "}
              <span className="text-4xl text-ember md:text-5xl">run</span>
            </h2>
          </div>
        </Reveal>

        <RevealStagger className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <RevealItem className="border border-ember bg-ember p-6 text-bg md:col-span-1">
            <OperationsIcon size={30} weight="light" />
            <h3 className="mt-6 font-display text-xl uppercase tracking-tight">
              {operations.title}
            </h3>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed">
              {operations.items.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden className="mt-0.5">
                    /
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </RevealItem>

          <RevealItem className="border border-paper/15 bg-bg p-6 transition-colors hover:border-cerulean/60 md:col-span-2">
            <div className="flex items-start justify-between">
              <PipelinesIcon size={30} weight="light" className="text-cerulean" />
              <span className="border border-paper/20 px-2 py-1 font-data text-[11px] uppercase tracking-[0.1em] text-graphite">
                23 yrs in ops
              </span>
            </div>
            <h3 className="mt-6 font-display text-xl uppercase tracking-tight text-paper md:text-2xl">
              {pipelines.title}
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm leading-relaxed text-graphite sm:grid-cols-2">
              {pipelines.items.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden className="mt-0.5 text-cerulean">
                    /
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </RevealItem>

          <RevealItem className="flex flex-col gap-4 border-t-2 border-ember bg-bg p-6 sm:flex-row sm:items-center sm:justify-between md:col-span-3">
            <div className="flex items-center gap-4">
              <DirectionIcon size={28} weight="light" className="text-ember shrink-0" />
              <h3 className="font-display text-xl uppercase tracking-tight text-paper">
                {direction.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {direction.items.map((item) => (
                <span
                  key={item}
                  className="border border-paper/20 px-3 py-1 font-data text-xs uppercase text-graphite"
                >
                  {item}
                </span>
              ))}
            </div>
          </RevealItem>
        </RevealStagger>

        <Reveal delay={0.1} className="mt-14">
          <p className="font-data text-xs uppercase tracking-[0.15em] text-graphite">
            Toolkit
          </p>
          <div className="mt-5 border-t border-hairline">
            {toolkit.map((group) => (
              <div
                key={group.label}
                className="flex flex-col gap-3 border-b border-hairline py-4 sm:flex-row sm:items-start sm:gap-6"
              >
                <span className="w-44 shrink-0 font-data text-xs uppercase tracking-[0.05em] text-paper">
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="border border-paper/15 px-3 py-1 font-data text-xs uppercase text-graphite"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
