"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, List, X } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/data";

const LINKS = [
  { href: "/#work", label: "Work", section: "work" },
  { href: "/case-studies", label: "Case Studies", route: "/case-studies" },
  { href: "/about", label: "About", route: "/about" },
  { href: "#contact", label: "Contact", section: "contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const targets = ["work", "contact"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (link: (typeof LINKS)[number]) =>
    "route" in link
      ? pathname === link.route
      : pathname === "/" && activeSection === link.section;

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-bg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-2xl uppercase tracking-tight text-paper"
          onClick={() => setOpen(false)}
        >
          JT<span className="text-ember">_</span>
        </Link>
        <nav className="hidden items-center gap-8 font-data text-xs uppercase tracking-[0.15em] text-graphite sm:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link) ? "page" : undefined}
              className={`transition-colors hover:text-paper ${
                isActive(link) ? "text-ember" : ""
              }`}
            >
              // {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex min-h-11 items-center gap-1.5 border border-paper/25 px-4 py-2 font-data text-xs uppercase tracking-[0.1em] text-paper transition-colors hover:border-ember hover:bg-ember hover:text-bg"
          >
            Get in touch
            <ArrowUpRight
              size={14}
              weight="bold"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center border border-paper/25 text-paper transition-colors hover:border-ember hover:bg-ember hover:text-bg sm:hidden"
          >
            {open ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`fixed inset-x-0 top-16 bottom-0 z-30 bg-bg transition-opacity duration-200 sm:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col">
          {LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex min-h-16 items-center gap-4 border-b border-hairline px-6 font-display text-2xl uppercase tracking-tight text-paper transition-colors active:text-ember"
            >
              <span className="font-data text-xs text-graphite">
                №{String(i + 1).padStart(2, "0")}
              </span>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
