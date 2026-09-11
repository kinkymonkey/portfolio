import Image from "next/image";
import Link from "next/link";
import { caseStudies, hiddenWork, ugcCaseStudies } from "@/lib/data";
import { motionStudy } from "@/lib/motion";
import { RevealStagger, RevealItem } from "./Reveal";
import { SiteStar } from "./SiteStar";

export const workCards = [
  ...caseStudies
    .filter((cs) => !hiddenWork.has(cs.slug))
    .map((cs) => ({
    slug: cs.slug,
    href: `/work/${cs.slug}`,
    title: cs.title,
    dek: cs.dek,
    image: (cs.cardImage ?? cs.coverImage).src,
    imageFocus:
      cs.slug === "avon"
        ? (cs.cardImage?.focus ?? cs.coverImage.focus ?? "50% 22%")
        : "center 20%",
  })),
  ...ugcCaseStudies.map((cs) => ({
    slug: cs.slug,
    href: `/work/${cs.slug}`,
    title: cs.title,
    dek: cs.dek,
    image: cs.coverVideo.poster,
    imageFocus: "center 20%",
  })),
  {
    slug: motionStudy.slug,
    href: `/work/${motionStudy.slug}`,
    title: motionStudy.title,
    dek: motionStudy.dek,
    image: motionStudy.cover,
    imageFocus: "center 20%",
  },
];

export function WorkCard({
  item,
  heading: Heading = "h3",
}: {
  item: (typeof workCards)[number];
  heading?: "h2" | "h3";
}) {
  return (
    <div className="min-w-0">
      <Link href={item.href} className="group block min-w-0 text-left">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-none bg-ash">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover"
            style={{ objectPosition: item.imageFocus }}
          />
        </div>
        <Heading className="font-display mt-2.5 min-h-[2.6rem] text-[1.15rem] font-normal leading-snug tracking-[-0.01em] text-ink md:min-h-[2.8rem] md:text-[1.25rem]">
          {item.title}
        </Heading>
        <p className="font-body mt-1 text-[0.875rem] leading-snug text-ink/70">
          {item.dek}
        </p>
      </Link>
      <SiteStar
        id={`work:${item.slug}`}
        label={item.title}
        className="font-body mt-3 text-[13px] tracking-[0.06em] text-ink/70 transition-colors duration-200 hover:text-ink"
      />
    </div>
  );
}

export function WorkCardGrid() {
  return (
    <RevealStagger className="grid grid-cols-1 items-start gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {workCards.map((item) => (
        <RevealItem key={item.slug}>
          <WorkCard item={item} />
        </RevealItem>
      ))}
    </RevealStagger>
  );
}
