"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home", exact: true },
  { href: "/work", label: "Work", route: "/work" },
  { href: "/journal", label: "Journal", route: "/journal" },
  { href: "/about", label: "About", route: "/about" },
  { href: "/contact", label: "Contact", route: "/contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const overlay = pathname === "/";

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

  const isActive = (link: (typeof LINKS)[number]) => {
    if ("exact" in link && link.exact) return pathname === "/";
    if ("route" in link && link.route)
      return pathname === link.route || pathname.startsWith(`${link.route}/`);
    return false;
  };

  if (overlay) {
    const navClass =
      "font-body text-[13px] tracking-[0.06em] text-white/80 transition-colors duration-200 hover:text-white";

    return (
      <header className="absolute top-0 right-0 z-20 w-full px-8 pt-8 md:w-5/12 md:px-12">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-display block text-[clamp(1.15rem,2vw,1.35rem)] font-normal leading-none tracking-[0.2em] text-white uppercase"
        >
          Justin Henry Teh
        </Link>
        <nav className="mt-4 hidden flex-wrap items-center gap-x-6 gap-y-2 sm:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link) ? "page" : undefined}
              className={navClass}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className={`mt-4 sm:hidden ${navClass}`}
        >
          {open ? "Close" : "Menu"}
        </button>
        <div
          id="mobile-nav"
          className={`mt-4 sm:hidden ${open ? "block" : "hidden"}`}
        >
          <nav className="flex flex-col gap-3">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(link) ? "page" : undefined}
                className={navClass}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    );
  }

  const innerNav =
    "font-body text-[13px] tracking-[0.06em] text-ink transition-colors duration-200 hover:text-ink/70";

  return (
    <header className="border-b border-hairline bg-bg">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-5 md:px-6 md:py-6">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-display shrink-0 text-[13px] font-normal tracking-[0.2em] text-ink uppercase md:text-sm"
        >
          Justin Henry Teh
        </Link>
        <nav className="hidden items-center gap-x-7 sm:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link) ? "page" : undefined}
              className={innerNav}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className={`sm:hidden ${innerNav}`}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-hairline sm:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 md:px-6">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(link) ? "page" : undefined}
              className={`${innerNav} py-3`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
