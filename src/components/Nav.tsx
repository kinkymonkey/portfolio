import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/data";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-bg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-2xl uppercase tracking-tight text-paper"
        >
          JT<span className="text-ember">_</span>
        </Link>
        <nav className="hidden items-center gap-8 font-data text-xs uppercase tracking-[0.15em] text-graphite sm:flex">
          <Link href="/#work" className="transition-colors hover:text-paper">
            // Work
          </Link>
          <Link href="/case-studies" className="transition-colors hover:text-paper">
            // Case Studies
          </Link>
          <Link href="/about" className="transition-colors hover:text-paper">
            // About
          </Link>
          <Link href="#contact" className="transition-colors hover:text-paper">
            // Contact
          </Link>
        </nav>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 border border-paper/25 px-4 py-2 font-data text-xs uppercase tracking-[0.1em] text-paper transition-colors hover:border-ember hover:bg-ember hover:text-bg"
        >
          Get in touch
          <ArrowUpRight
            size={14}
            weight="bold"
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </header>
  );
}
