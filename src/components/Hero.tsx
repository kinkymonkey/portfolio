import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden md:h-[70vh] md:max-h-[650px]">
      <Image
        src="/images/hero-banner-009.png"
        alt="Justin Henry Teh"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[15%_30%]"
      />

      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/40 to-transparent md:hidden"
      />

      <div className="absolute top-1/2 right-0 z-10 w-full -translate-y-1/2 px-8 text-left md:w-5/12 md:px-12">
        <h1 className="font-display mb-3 text-3xl leading-[1.05] font-normal text-white italic md:text-5xl">
          Creative Operations
        </h1>
        <p className="mb-6 font-body text-lg font-normal leading-snug text-white md:text-2xl">
          The prompt is the easy part.
        </p>
        <p className="max-w-md font-body text-sm leading-relaxed text-white/90 md:text-base">
          The job is the team that has to live with the output. Thirty-five
          people. Four-market print catalogues. Quality assurance that held. He
          built the AI pipeline himself.
        </p>
      </div>
    </section>
  );
}
