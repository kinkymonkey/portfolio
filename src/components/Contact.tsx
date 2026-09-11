import { site } from "@/lib/data";
import { SiteStar } from "./SiteStar";

export function Contact() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-footer text-ink">
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-6 md:py-24">
        <p className="font-display text-sm font-normal tracking-[0.2em] text-ink uppercase">
          {site.name}
        </p>
        <nav className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
          <a href="/work" className="link-ui w-fit">
            Work
          </a>
          <a href="/about" className="link-ui w-fit">
            About
          </a>
          <a href="/contact" className="link-ui w-fit">
            Contact
          </a>
        </nav>
        <p className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="link-ui border-0">© {year} justinhenryteh.com</span>
          <SiteStar className="link-ui" label="this site" />
        </p>
      </div>
    </footer>
  );
}
