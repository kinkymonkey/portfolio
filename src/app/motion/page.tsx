import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { MotionCarousel } from "@/components/MotionCarousel";
import { motionIntro } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Motion studies, Justin Henry Teh",
  description:
    "Working tests in generated motion: character continuity, lip sync, camera, lighting. A running log, not a finished set.",
};

export default function MotionPage() {
  return (
    <main className="bg-bg">
      <section className="border-b border-hairline pt-8 pb-12 md:pt-10 md:pb-16">
        <div className="mx-auto max-w-[1400px] px-4 md:px-6">
          <h1 className="font-body mb-8 text-xs tracking-[0.2em] text-ink/50 uppercase">
            {motionIntro.title}
          </h1>
          <MotionCarousel />
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-4 md:px-6">
          <p className="study-copy max-w-[52ch]">{motionIntro.dek}</p>
          <Reveal className="mt-10">
            <Image
              src={motionIntro.workflow.src}
              alt={motionIntro.workflow.alt}
              width={motionIntro.workflow.width}
              height={motionIntro.workflow.height}
              className="h-auto w-full"
            />
          </Reveal>
          <div className="mt-10 max-w-[52ch] space-y-5">
            {motionIntro.after.map((p) => (
              <p key={p.slice(0, 32)} className="study-copy">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
