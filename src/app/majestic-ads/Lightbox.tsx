"use client";

import { useEffect, useState } from "react";

type Item = { kind: "img" | "video"; src: string; alt: string };

// Click any sample image or video (class .ma-slot, not the before/after slider) to see it enlarged.
export function Lightbox() {
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>(".ma-slot");
      if (!el || el.classList.contains("ma-slot--empty") || el.closest(".ma-compare")) return;
      if (el instanceof HTMLVideoElement) setItem({ kind: "video", src: el.currentSrc || el.src, alt: el.ariaLabel ?? "" });
      else if (el instanceof HTMLImageElement) setItem({ kind: "img", src: el.currentSrc || el.src, alt: el.alt });
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setItem(null);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = item ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  if (!item) return null;
  return (
    <div className="ma-lb" role="dialog" aria-modal="true" aria-label={item.alt || "Enlarged sample"} onClick={() => setItem(null)}>
      <button type="button" className="ma-lb__close" aria-label="Close" onClick={() => setItem(null)}>
        ×
      </button>
      {item.kind === "video" ? (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video className="ma-lb__media" src={item.src} autoPlay loop muted playsInline controls onClick={(e) => e.stopPropagation()} />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="ma-lb__media" src={item.src} alt={item.alt} onClick={(e) => e.stopPropagation()} />
      )}
    </div>
  );
}
