import type { MetadataRoute } from "next";
import { caseStudies, hiddenWork, ugcCaseStudies } from "@/lib/data";
import { motionStudy } from "@/lib/motion";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://justinhenryteh.com";
  const slugs = [
    ...caseStudies.filter((cs) => !hiddenWork.has(cs.slug)).map((cs) => cs.slug),
    ...ugcCaseStudies.map((cs) => cs.slug),
    motionStudy.slug,
  ];
  return [
    "",
    "/work",
    "/about",
    "/contact",
    "/majestic-ads",
    ...slugs.map((s) => `/work/${s}`),
  ].map((path) => ({ url: `${base}${path}` }));
}
