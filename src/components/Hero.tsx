import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative min-h-screen md:min-h-[70vh]">
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
          className="absolute inset-0 z-[1] bg-gradient-to-t from-black/85 via-black/45 to-transparent md:hidden"
        />

        <div className="relative z-10 flex min-h-screen items-end md:min-h-[70vh] md:items-center">
          <div className="w-full px-8 pb-12 pt-28 text-left md:ml-auto md:w-6/12 md:px-12 md:py-16 lg:w-5/12">
            <h1 className="font-display mb-6 text-3xl leading-[1.05] font-normal text-white italic md:text-5xl">
              Creative Operations
            </h1>
            <div className="max-w-md space-y-4 font-body text-sm leading-relaxed text-white/90 md:text-base">
              <p>
                Designer first, 20+ years of it. 8 of those leading teams.
                I&apos;ve grown one from 1 person to 300, and run as many as 25
                designers, 15 customer service associates, and 3 managers at
                once.
              </p>
              <p>
                Now: take a request that&apos;s still just a feeling, turn it
                into a brief people can actually build from, then stay on it
                until it ships.
              </p>
              <p>I&apos;ve watched leads dodge the call.</p>
              <p>
                I&apos;ve watched bad briefs go out because nobody had the nerve
                to send them back before they landed on the team who&apos;d have
                to live with them.
              </p>
              <p>I don&apos;t do either.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
