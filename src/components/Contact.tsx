import { ArrowUpRight, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Contact() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="border-t-2 border-ember bg-bg py-20 text-paper md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-[18ch] text-balance font-display text-4xl uppercase leading-[0.95] tracking-tight md:text-6xl">
            Let&apos;s talk about what you&apos;re building.
          </h2>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group mt-8 inline-flex items-center gap-2.5 border border-ember bg-ember px-7 py-3.5 font-data text-xs uppercase tracking-[0.1em] text-bg transition-colors hover:bg-transparent hover:text-ember"
          >
            <LinkedinLogo size={16} weight="bold" />
            Get in touch
            <ArrowUpRight
              size={14}
              weight="bold"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>

        <div className="mt-20 flex flex-col gap-3 border-t border-hairline pt-8 font-data text-xs uppercase tracking-[0.06em] text-graphite sm:flex-row sm:items-center sm:justify-between">
          <span>
            {site.name} &middot; {site.role}
          </span>
          <span>{site.location}</span>
          <span>
            &copy; {year} {site.domain}
          </span>
        </div>
      </div>
    </footer>
  );
}
