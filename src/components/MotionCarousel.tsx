"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motionClips, type MotionClip } from "@/lib/motion";

export function MotionCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const [index, setIndex] = useState(0);

  const go = useCallback((next: number) => {
    const el = scroller.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(motionClips.length - 1, next));
    setIndex(clamped);
    const slide = el.querySelectorAll<HTMLElement>("[data-slide]")[clamped];
    if (!slide) return;
    const slideRect = slide.getBoundingClientRect();
    const scrollerRect = el.getBoundingClientRect();
    const left =
      el.scrollLeft +
      (slideRect.left - scrollerRect.left) -
      (el.clientWidth - slide.offsetWidth) / 2;
    el.scrollLeft = left;
  }, []);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    let frame = 0;

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const slides = [...el.querySelectorAll<HTMLElement>("[data-slide]")];
        if (!slides.length) return;
        const mid = el.scrollLeft + el.clientWidth / 2;
        let closest = 0;
        let best = Infinity;
        slides.forEach((slide, i) => {
          const scrollerRect = el.getBoundingClientRect();
          const slideRect = slide.getBoundingClientRect();
          const center =
            el.scrollLeft + (slideRect.left - scrollerRect.left) + slide.offsetWidth / 2;
          const dist = Math.abs(center - mid);
          if (dist < best) {
            best = dist;
            closest = i;
          }
        });
        setIndex(closest);
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    videos.current.forEach((video, i) => {
      if (!video) return;
      if (i === index) {
        video.preload = "auto";
        const play = video.play();
        if (play) play.catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [index]);

  const clip = motionClips[index];

  return (
    <div>
      <div
        ref={scroller}
        tabIndex={0}
        data-lenis-prevent
        aria-label="Motion studies videos"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            go(index + 1);
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            go(index - 1);
          }
        }}
        className="flex snap-x snap-mandatory overflow-x-auto pb-2 outline-none touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div
          aria-hidden
          className="w-[max(0px,calc((100%-min(100%,420px))/2))] shrink-0"
        />
        {motionClips.map((item, i) => (
          <Slide
            key={item.id}
            item={item}
            active={i === index}
            setVideo={(node) => {
              videos.current[i] = node;
            }}
          />
        ))}
        <div
          aria-hidden
          className="w-[max(0px,calc((100%-min(100%,420px))/2))] shrink-0"
        />
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => go(index - 1)}
          disabled={index === 0}
          className="link-ui disabled:border-transparent disabled:opacity-30"
        >
          Prev
        </button>
        <p className="font-body text-xs tracking-[0.2em] text-ink/50 uppercase">
          {String(index + 1).padStart(2, "0")} / {String(motionClips.length).padStart(2, "0")}
        </p>
        <button
          type="button"
          onClick={() => go(index + 1)}
          disabled={index === motionClips.length - 1}
          className="link-ui disabled:border-transparent disabled:opacity-30"
        >
          Next
        </button>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2">
        {motionClips.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => go(i)}
            aria-current={i === index ? "true" : undefined}
            className={`font-body text-[12px] tracking-[0.08em] uppercase transition-colors ${
              i === index ? "text-ink" : "text-ink/40 hover:text-ink/70"
            }`}
          >
            {item.clip === "Daily 1" || item.clip === "Daily 2"
              ? `${item.title} ${item.clip}`
              : item.title}
          </button>
        ))}
      </div>

      <div
        aria-live="polite"
        className="mt-10 min-h-[16rem] max-w-[680px] border-t border-hairline pt-8 md:min-h-[14rem]"
      >
        <p className="font-body text-xs tracking-[0.2em] text-ink/50 uppercase">
          {clip.clip}
        </p>
        <h2 className="font-display mt-3 text-[clamp(1.75rem,3vw,2.35rem)] font-normal leading-[1.15] tracking-[-0.02em] text-ink">
          {clip.title}
        </h2>
        <div className="mt-5 space-y-5">
          {clip.body.map((p) => (
            <p key={p.slice(0, 24)} className="study-copy">
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function Slide({
  item,
  active,
  setVideo,
}: {
  item: MotionClip;
  active: boolean;
  setVideo: (node: HTMLVideoElement | null) => void;
}) {
  return (
    <div data-slide className="mr-4 w-[min(100%,420px)] shrink-0 snap-center [&:nth-last-child(2)]:mr-0">
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-ash">
        <video
          ref={setVideo}
          src={item.src}
          poster={item.poster}
          controls
          playsInline
          loop
          muted
          preload={active ? "auto" : "none"}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
