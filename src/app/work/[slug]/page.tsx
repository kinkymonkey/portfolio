import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import {
  caseStudies,
  getCaseStudy,
  getNextWork,
  getUgcCaseStudy,
  ugcCaseStudies,
  type CaseImage,
  type CaseVideo,
  type UgcCaseStudy,
} from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { MotionCarousel } from "@/components/MotionCarousel";
import { motionIntro, motionStudy } from "@/lib/motion";

const READ = "w-full max-w-[680px]";

export function generateStaticParams() {
  return [
    ...caseStudies.map((cs) => ({ slug: cs.slug })),
    ...ugcCaseStudies.map((cs) => ({ slug: cs.slug })),
    { slug: motionStudy.slug },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (slug === motionStudy.slug) {
    return {
      title: `${motionStudy.title}, Justin Henry Teh`,
      description: motionStudy.dek,
    };
  }
  const cs = getCaseStudy(slug) ?? getUgcCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.title}, Justin Henry Teh`,
    description: cs.dek,
  };
}

function NextWork({ slug }: { slug: string }) {
  const next = getNextWork(slug);
  return (
    <div className="border-t border-hairline py-16">
      <div className="flex justify-center px-6">
        <div className={READ}>
        <Link href={`/work/${next.slug}`} className="group block">
          <span className="link-ui">Next</span>
          <h3 className="mt-3 font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.02em] text-ink">
            {next.title}
          </h3>
        </Link>
        </div>
      </div>
    </div>
  );
}

function StudyHeader({
  title,
  client,
  hook,
}: {
  title: string;
  client: string;
  hook: string;
}) {
  return (
    <header className="pt-14 pb-10 md:pt-20 md:pb-12">
      <div className="flex justify-center px-6">
        <div className={READ}>
        <Link href="/work" className="link-ui">
          All work
        </Link>
        <h1 className="mt-10 font-display text-[clamp(2.25rem,5.5vw,4.5rem)] font-normal leading-[1.1] tracking-[-0.02em] text-ink">
          {title}
        </h1>
        <p className="study-hed mt-5">{client}</p>
        <p className="study-copy mt-6">{hook}</p>
        </div>
      </div>
    </header>
  );
}

function StudySections({
  sections,
}: {
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <article className="py-12 md:py-16">
      <div className="flex justify-center px-6">
        <div className={`${READ} space-y-14`}>
        {sections.map((section) => (
          <Reveal key={section.heading}>
            <section>
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.35rem)] font-normal leading-[1.15] tracking-[-0.02em] text-ink">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-5">
                {section.body.map((p, j) => (
                  <p key={j} className="study-copy">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          </Reveal>
        ))}
        </div>
      </div>
    </article>
  );
}

function Still({
  image,
  title,
  priority = false,
}: {
  image: CaseImage;
  title: string;
  priority?: boolean;
}) {
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-none bg-ash">
      <Image
        src={image.src}
        alt={title}
        fill
        priority={priority}
        sizes="(min-width: 680px) 680px, 92vw"
        style={{ objectPosition: image.focus ?? "center 20%" }}
        className="object-cover"
      />
    </div>
  );
}

function Column({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex justify-center px-6 ${className}`}>
      <div className={`${READ} space-y-6`}>{children}</div>
    </div>
  );
}

function HeroStill({
  image,
  title,
}: {
  image: CaseImage;
  title: string;
}) {
  return (
    <Column>
      <Reveal>
        <Still image={image} title={title} priority />
      </Reveal>
    </Column>
  );
}

function AssetGrid({ images, title }: { images: CaseImage[]; title: string }) {
  if (!images.length) return null;

  return (
    <Column className="pb-20">
      {images.map((img) => (
        <Reveal key={img.src}>
          <Still image={img} title={title} />
        </Reveal>
      ))}
    </Column>
  );
}

function VideoFrame({
  video,
  ratio = "9/16",
}: {
  video: CaseVideo;
  ratio?: "9/16" | "3/4";
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-none bg-ash ${
        ratio === "3/4" ? "aspect-[3/4]" : "aspect-[9/16]"
      }`}
    >
      <video
        src={video.src}
        poster={video.poster}
        controls
        playsInline
        preload="none"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function UgcWork({ cs }: { cs: UgcCaseStudy }) {
  const extras = [
    ...(cs.spots ?? []),
    ...(cs.pipelineTest ? [cs.pipelineTest.before, cs.pipelineTest.after] : []),
    ...(cs.bonus ? [cs.bonus.video] : []),
  ];
  const unique = extras.filter(
    (video, i, all) => all.findIndex((v) => v.src === video.src) === i,
  );

  return (
    <main className="bg-bg">
      <StudyHeader title={cs.title} client={cs.client} hook={cs.hook} />

      <div className="mb-4">
        <Column>
          <Reveal>
            <VideoFrame video={cs.coverVideo} ratio="3/4" />
          </Reveal>
        </Column>
      </div>

      <StudySections sections={cs.sections} />

      {unique.length > 0 && (
        <Column className="pb-20">
          {unique.map((video) => (
            <VideoFrame key={video.src} video={video} ratio="3/4" />
          ))}
        </Column>
      )}

      <NextWork slug={cs.slug} />
    </main>
  );
}

function MotionWork() {
  return (
    <main className="bg-bg">
      <StudyHeader
        title={motionStudy.title}
        client={motionStudy.client}
        hook={motionIntro.dek}
      />

      <div className="px-4 pb-12 md:px-6 md:pb-16">
        <div className="mx-auto max-w-[1400px]">
          <MotionCarousel />
        </div>
      </div>

      <Column className="pb-8">
        <Reveal>
          <Image
            src={motionIntro.workflow.src}
            alt={motionIntro.workflow.alt}
            width={motionIntro.workflow.width}
            height={motionIntro.workflow.height}
            className="h-auto w-full"
          />
        </Reveal>
        {motionIntro.after.map((p) => (
          <p key={p.slice(0, 32)} className="study-copy">
            {p}
          </p>
        ))}
      </Column>

      <NextWork slug={motionStudy.slug} />
    </main>
  );
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === motionStudy.slug) return <MotionWork />;

  const ugc = getUgcCaseStudy(slug);
  if (ugc) return <UgcWork cs={ugc} />;

  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <main className="bg-bg">
      <StudyHeader title={cs.title} client={cs.client} hook={cs.hook} />
      <HeroStill image={cs.coverImage} title={cs.title} />
      <StudySections sections={cs.sections} />
      <AssetGrid images={cs.gallery ?? []} title={cs.title} />
      <NextWork slug={cs.slug} />
    </main>
  );
}
