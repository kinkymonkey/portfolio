# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally:

- **Recruiters and hiring managers** evaluating Justin for full-time Creative Operations Director-type leadership roles, specifically ones that span AI-driven creative production. They're checking whether fifteen years in graphic design and art direction, followed by ten more in creative leadership, is real, and whether the AI-pipeline fluency is genuine hands-on depth or borrowed vocabulary.
- **Brands and agencies** (Rubberfashion-type clients) evaluating Justin directly for creative-ops or AI-pipeline consulting engagements — they want proof he can run production, not just talk about it.

Both audiences read the same case studies; neither gets a separate track today.

## Product Purpose

A personal portfolio site for Justin Henry Teh that proves, with real case studies rather than claims, that he can run creative production and lead teams through the shift into AI-assisted workflows. Success is a recruiter or prospective client reading a case study and concluding he's operated at this level for real, then reaching out via LinkedIn.

## Positioning

The differentiator is the combination, not either half alone: fifteen years in graphic design and art direction followed by ten more in creative leadership (Avon's monthly brochure across 4 markets for 9 years, McCann packaging work, managing 35+ person teams) *plus* current hands-on depth in AI generation pipelines (personally building and evaluating video/image tool chains, not just approving vendor demos). The site's explicit claim, in his own words: "This isn't a pitch for an AI video editor job, it's proof of what leading a team through adopting a new production technology actually requires: understanding it deeply enough to make the call yourself, instead of approving whatever tool has the best demo reel." A neighboring candidate can credibly claim the design/ops history or the AI fluency; the site's case studies are the evidence that he holds both at once.

## Operating Context

Case studies are read as standalone narrative long-form pieces (problem → what I found → what I did → what happened → why it matters), each anchored to real, named clients and brands (Turnitin, Nestlé/Chuckie, Rubberfashion, Avon, Coca-Cola/McCann, and a personal AI-video-pipeline R&D project). The homepage funnels into this via a work grid; About holds the full career timeline (2003–present) and capability/toolkit breakdown; every page ends in a single LinkedIn CTA — there is no contact form, email, or resume download today.

Work is one label and one destination (`/work`), covering both full-depth write-ups and visual production showcases:

- **Main work** (`caseStudies` in `src/lib/data.ts`) — named-client creative-ops pieces at `/work/<slug>`.
- **AI video / production showcases** (`ugcCaseStudies` in `src/lib/data.ts`) — video-led write-ups (e.g. the Rubberfashion split-test spot), also at `/work/<slug>`.
- `/work` lists both tracks together. The primary nav uses **Work** only — not a separate Case Studies item. Old `/case-studies` URLs redirect to `/work`.

## Capabilities and Constraints

- Case-study content is real and specific (named clients, real numbers where known); nothing invented or generic should be added to an existing case study.
- **More case studies are expected to be added over time, in either track.** Treat the current five main case studies (`turnitin`, `chuckie`, `rubberfashion`, `avon`, `advertising`, plus `ai-video-pipeline`) and the AI video production track as growing sets, not a final, closed roster — new-work and layout decisions should leave room for both grids/nav to grow.
- The `ugcCaseStudies` track supports a video-heavy template distinct from the standard case-study layout: a cover video, narrative sections, an optional before/after pipeline comparison, and an optional bonus clip.
- No contact form, downloadable resume, or testimonials exist on the site; the only conversion path is the LinkedIn link in `site.linkedin` (`src/lib/data.ts`).
- Content lives in `src/lib/data.ts` (site info, brands, capabilities, toolkit, career timeline, both case-study tracks); work imagery lives under `public/work/<slug>/`, video-case assets under `public/case-studies/<slug>/`.
- The `ai-video-pipeline` case study explicitly states no hard performance metrics have been pulled yet — that absence is intentional honesty, not a gap to fabricate a number for.

## Brand Commitments

- Name: Justin Henry Teh. Role as stated on site: "Creative Operations Director." Domain: justinhenryteh.com (live Vercel production domain).
- Voice, confirmed by existing copy: direct, plainspoken, unafraid of specific hard details (firing a team member, holding a position against executive pushback) rather than resume-speak. Mostly first-person, but a recent full-site copy pass (2026-09-02) deliberately trimmed "I"-led sentence openers in favor of clipped, dossier-style constructions ("The checkpoint only means something if...", "Letting him go was the call I made"). Preserve this voice, including that structural preference, in any new or edited copy.
- Only public contact channel: LinkedIn (`https://linkedin.com/in/justinteh`).

## Evidence on Hand

Real case studies with real client names, roles, and outcomes, sourced from Justin's own career (see `src/lib/data.ts` `timeline` and `caseStudies`). Work imagery is real production/campaign photography and screenshots under `public/work/`. No testimonials, third-party quotes, or press coverage exist on the site — do not fabricate any.

## Product Principles

1. Evidence over claims — every capability the site asserts should trace to a specific, named case study, not adjective-stacking.
2. One voice for two audiences — recruiters and prospective clients read the same case studies; don't fork the narrative or tone per audience.
3. Preserve real specificity — real client names, real numbers, real admitted unknowns (like the AI-pipeline metrics gap) are the credibility mechanism; never round them off into generic marketing language.
4. Built to grow — the work grid, nav, and case-study system should comfortably accept new case studies over time, not assume the current set is final.
5. Single, low-friction CTA — LinkedIn is the one conversion path; don't dilute it with competing calls to action.
