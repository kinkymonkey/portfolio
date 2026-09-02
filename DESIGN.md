---
name: Justin Teh — Portfolio
description: A late-shift production dossier — deep ink-navy pages, warm paper text, and system-readout labels that treat every case study as filed evidence, not a highlight reel.
colors:
  night-desk-ink: "#14132c"
  raised-ink: "#1e1c42"
  panel-ink: "#2a2760"
  dossier-paper: "#f6f2ea"
  twilight-graphite: "#a9a4c9"
  ember-signal: "#f2542d"
  cerulean-trace: "#36b6e8"
  paper-hairline: "rgba(246, 242, 234, 0.12)"
  paper-hairline-strong: "rgba(246, 242, 234, 0.24)"
typography:
  display:
    fontFamily: "var(--font-anton), Anton, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "var(--font-anton), Anton, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.5vw, 3rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "var(--font-anton), Anton, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "var(--font-public-sans), 'Public Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "var(--font-space-mono), 'Space Mono', ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.1em"
rounded:
  sm: "0px"
  md: "0px"
  lg: "0px"
  pill: "9999px"
spacing:
  gutter: "1.5rem"
  card-padding: "1.5rem"
  section-y: "5rem"
  section-y-lg: "7rem"
components:
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.dossier-paper}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-ghost-hover:
    backgroundColor: "{colors.ember-signal}"
    textColor: "{colors.night-desk-ink}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-primary:
    backgroundColor: "{colors.ember-signal}"
    textColor: "{colors.night-desk-ink}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "transparent"
    textColor: "{colors.ember-signal}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  card-work:
    backgroundColor: "{colors.night-desk-ink}"
    rounded: "{rounded.sm}"
    padding: "20px"
  badge-tag:
    backgroundColor: "{colors.ember-signal}"
    textColor: "{colors.night-desk-ink}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
---

# Design System: Justin Teh — Portfolio

## Overview

**Creative North Star: "The Night Desk"**

The site reads like the late shift on a real production job: a deep ink-navy page lit by warm paper-white text, not a stage-lit agency reel. Every project is filed like evidence rather than performed like a highlight — case numbers (№01), figure tags (Fig. 01), record counts ([ 05 records ]), and system-readout strings (Sys.Init // Creative Operations Director // V.1, Coord: Remote) treat the site itself as the same kind of operations tooling Justin builds for clients. The voice matches: direct, evidence-first, unglossy. Copy states specifics — real client names, real numbers, real admitted unknowns — and the chrome never oversells past what the case studies actually prove.

Two things hold this together at once. The chrome is **warm technical**: hard square edges and uppercase mono labels (the technical half) wrapped around a first-person, plainspoken voice and a warm off-white paper tone (the human half). And restraint is structural, not decorative: one warm accent (ember) carries the site's single call-to-action and its "Direction & Craft" case studies; one cool accent (cerulean) is reserved strictly for the AI/pipeline-tagged work. Nothing else competes for color. Depth comes from a three-step ink ladder and hairline borders, never a shadow — this system is confirmed flat, not flat because nobody added elevation yet.

Two explicit rejections shape every decision here: this is not a generic SaaS dashboard (rounded-xl cards, drop shadows, corporate blue-on-white), and it is not a minimalist all-white resume site (flat black-on-white, no accent, no personality). Both read as either too soft to prove anything or too sterile to sound like a person.

**Key Characteristics:**
- Ink-navy background ladder (bg → raised → panel) with warm paper-white text, never neutral black-and-white
- Zero border-radius on every UI surface; sharp square edges throughout
- Flat by construction — no box-shadow anywhere; depth is tonal and structural only
- Uppercase condensed display type (Anton) reserved for headline-scale identity moments
- Uppercase, wide-tracked monospace (Space Mono) for every tag, index, nav link, and system-readout label
- Exactly two accents: ember (warm, primary) and cerulean (cool, AI/pipeline work only) — never a third
- A recurring "filed evidence" motif: case numbers, figure tags, record counts, coordinate-style badges

## Colors

Two accents against a warm ink-and-paper neutral base; nothing reads as decorative color, every hue is load-bearing.

### Primary
- **Ember Signal** (`#f2542d`): the site's one active color. Carries the single CTA ("Get in touch"), link/button hover fills, focus rings, text-selection color, and the accent border on "Direction & Craft"-tagged case studies (Chuckie, Avon, Coca-Cola). Spent rarely outside those roles.

### Secondary
- **Cerulean Trace** (`#36b6e8`): reserved exclusively for AI/pipeline-tagged work — the "AI & Direction" and "AI & Agents" case studies (Rubberfashion, the AI video pipeline), and the timeline's year labels. Never substitutes for Ember Signal in a CTA or focus state.

### Neutral
- **Night Desk Ink** (`#14132c`): the page background and the resting fill for filed-evidence badges (case numbers, Fig. tags). The brand's own ink color, not a neutral black.
- **Raised Ink** (`#1e1c42`): one step up — alternating section backgrounds (About, Capabilities, Timeline, Brands marquee) and hover fill on work-grid tiles.
- **Panel Ink** (`#2a2760`): two steps up — hover fill on already-raised surfaces (e.g. the "next case file" link, scrollbar thumb).
- **Dossier Paper** (`#f6f2ea`): primary text and headline color; a warm off-white, never pure white.
- **Twilight Graphite** (`#a9a4c9`): secondary text — body copy, captions, client names, nav links at rest. A muted lavender-gray that keeps the palette warm even in its quietest register.
- **Paper Hairline** (`rgba(246, 242, 234, 0.12)`) / **Paper Hairline, Strong** (`rgba(246, 242, 234, 0.24)`): every structural border and section divider. Strong is reserved for focus-ring and scrollbar-track contrast.

### Named Rules
**The One Signal Rule.** Ember is the only color allowed to mean "act here." It appears on the CTA, hover states, and Direction & Craft accents — never doubled up with cerulean in the same role.

**The Two-Accent Ceiling.** The palette runs on exactly one warm accent and one cool accent, no third. A new case-study category gets an existing accent assigned by its nearest tag (ops/craft → ember, AI/pipeline → cerulean), never a new hue.

## Typography

**Display Font:** Anton (with ui-sans-serif, system-ui fallback)
**Body Font:** Public Sans (with ui-sans-serif, system-ui fallback)
**Label/Mono Font:** Space Mono (with ui-monospace, monospace fallback)

**Character:** A condensed, all-caps display face for identity-scale moments, paired with a plain humanist body face for reading, and a typewriter mono for anything that behaves like a system label. The pairing is doing the "warm technical" work by itself: Anton and Space Mono supply the technical edge, Public Sans supplies the readable, human register.

### Hierarchy
- **Display** (400, `clamp(2.75rem, 7vw, 5.5rem)`, leading 0.92): the hero headline only. One per page, maximum.
- **Headline** (400, `clamp(2.25rem, 4.5vw, 3rem)`, leading 1): section titles ("Selected work," "What I run," "Trajectory," "About"). Always uppercase, always tracking-tight.
- **Title** (400, `1.25rem`–`1.5rem`, leading 1.2): card and component headings (case-study titles, capability titles, timeline role titles).
- **Body** (400, `1rem`–`1.125rem`, leading 1.625): all prose. Constrained to 46–64ch measure; color is Dossier Paper for primary reading (case-study body copy) or Twilight Graphite for secondary/supporting copy.
- **Label** (400/700, `0.625rem`–`0.75rem`, tracking `0.1em`–`0.15em`, uppercase): nav links, tags, badges, index numbers, system-readout strings. Always uppercase, always mono, always tracked wide.

### Named Rules
**The Readout Rule.** Anything that behaves like a system label — a tag, a timestamp, an index number, a nav link, a coordinate string — renders in uppercase Space Mono with wide tracking. Anton never carries this role; it is reserved for headline-scale identity, never body or label text.

## Layout

A 12-column grid inside a `max-w-6xl` container (narrower `max-w-5xl`/`max-w-3xl` for case-study reading contexts), `1.5rem` side gutters throughout. Sections alternate `Night Desk Ink` and `Raised Ink` backgrounds and are always separated by a `Paper Hairline` top border — the page is a stack of filed sections, not a seamless scroll. Vertical rhythm runs `5rem` (`py-20`) to `7rem` (`py-28`) per section.

Grids favor asymmetric splits over even columns: hero and About run 7/5, the About snippet runs 9/3. The work grid uses a deliberate CSS trick — `gap-px` with a `Paper Hairline` background showing through the 1-pixel gaps between `Night Desk Ink` tiles — so the case-study index reads as a ledger with structural rule lines, not decorative gutters. Case-study detail pages alternate image position (left/right) between body sections rather than running a single fixed column.

## Elevation & Depth

Flat by construction — there is no `box-shadow` anywhere in the system. Depth is expressed exclusively through the three-step ink ladder (`Night Desk Ink` → `Raised Ink` → `Panel Ink`) and `Paper Hairline` borders. Hover states shift background tone or border color; they never lift, glow, or cast a shadow. The one exception is decorative, not structural: two soft blurred ember/cerulean glow blobs drift behind the hero, functioning as ambient atmosphere rather than an elevation cue on any UI element.

### Named Rules
**The Flat-By-Default Rule.** No surface receives a box-shadow, ever. If a hover or active state needs to read as "responding," move it up the ink ladder or brighten a hairline to `Paper Hairline, Strong` — never add a shadow.

## Shapes

Every rectangular UI surface — buttons, cards, badges, inputs, image frames, section dividers — runs at `0px` radius. The one departure is `rounded-full`, used exclusively for the two ambient background glow blobs behind the hero; it never appears on a piece of UI chrome. Borders are hairline-weight (1px, `Paper Hairline`) for structure everywhere, stepping up to a 2px accent-colored border only to mark an editorial high point: pull-quotes (`border-l-2`) and the final section or CTA in a sequence (`border-t-2`).

### Named Rules
**The Square-Edge Rule.** 0px radius on every rectangular surface, no exceptions. `rounded-full` exists only for the two hero glow blobs.

**The Spine Rule.** A 2px accent-colored border (left, on a pull-quote; top, on a closing card or the footer) marks the one editorial emphasis point in a section. Everywhere else, borders stay 1px and neutral (`Paper Hairline`).

## Components

### Buttons
- **Shape:** square, 0px radius, always.
- **Ghost (default, most common):** transparent background, `Dossier Paper` text, 1px `border-paper/25` border, uppercase Space Mono label with a small arrow icon that nudges on hover.
- **Ghost hover:** fills solid `Ember Signal`, text flips to `Night Desk Ink`, border matches the fill.
- **Primary (footer CTA only):** filled `Ember Signal` background with `Night Desk Ink` text by default; hover empties to transparent with `Ember Signal` text and border — the one button that inverts on hover instead of filling.
- **Icon behavior:** every button/link carries a Phosphor arrow icon (`ArrowUpRight`, `ArrowDown`) that nudges ~2px in its direction on hover — the system's one micro-interaction signature.

### Cards / Containers (Work Grid tiles)
- **Corner Style:** 0px radius.
- **Background:** `Night Desk Ink`, hovering to `Raised Ink`.
- **Shadow Strategy:** none — see Elevation & Depth.
- **Border:** part of the shared `gap-px`/`Paper Hairline` grid, not an individual card border.
- **Internal Padding:** `1.25rem` (`p-5`).
- **Overlay badges:** a filed-evidence index number (`№01`) top-left and an accent-colored tag bottom-right, both in Label typography on a `Night Desk Ink` chip.

### Timeline / List Rows
- **Style:** stacked rows separated by 1px `Paper Hairline`, a large ghosted index numeral (`Dossier Paper` at 20% opacity) leading each row, year range in `Cerulean Trace` Label type trailing.
- **Hover:** row background steps up to `Raised Ink`.

### Navigation
- **Style:** sticky top bar, `Night Desk Ink` background, 1px `Paper Hairline` bottom border. Logo is "JT" in Display type with an `Ember Signal` underscore. Nav links are Label-type with a literal `//` comment-syntax prefix ("// Work"), `Twilight Graphite` at rest, `Dossier Paper` on hover. CTA button (Ghost variant) sits right-aligned.

### Marquee (Brands strip)
- **Style:** an infinite horizontal scroll of brand names in Display type at 45% paper opacity, separated by `Ember Signal` slashes; pauses on hover. A signature component — not reused elsewhere, but distinctive enough to preserve as-is.

### Filed-Evidence Badge (signature component)
The recurring coordinate/system-readout tag (`Sys.Portrait // 001`, `Fig. 01`, `Coord: Remote`) — small, bordered, `Night Desk Ink` or accent-filled chips in Label type, corner-anchored on portrait and case-study cover images. This is the system's clearest signature; extend it rather than inventing a new badge style for new imagery.

## Do's and Don'ts

### Do:
- **Do** keep the ink ladder (`Night Desk Ink` → `Raised Ink` → `Panel Ink`) as the only depth mechanism; step up the ladder or strengthen a hairline instead of adding a shadow.
- **Do** render every tag, index number, nav link, and system-readout string in uppercase Space Mono, tracked `0.1em`–`0.15em`.
- **Do** keep Ember Signal to CTA/primary-accent roles and Cerulean Trace to AI/pipeline-tagged work; assign new case studies to whichever accent their tag is closer to rather than introducing a third color.
- **Do** write body copy in the site's established first-person, plainspoken, specific voice — real names, real numbers, real admitted unknowns — matching PRODUCT.md's voice commitment.
- **Do** use the `gap-px`/hairline-background grid trick for any new tiled index so dividers read as structural rule lines.
- **Do** give every interactive link/button an arrow icon that nudges on hover; it's the system's one consistent micro-interaction.

### Don't:
- **Don't** add a border-radius to any UI chrome (buttons, cards, badges, image frames, inputs); the square-edge language is absolute except for the two hero glow blobs.
- **Don't** add a box-shadow, glow, or any other elevation cue beyond the two existing ambient hero blurs.
- **Don't** let the site drift toward a generic SaaS dashboard (rounded cards, drop shadows, corporate blue-on-white) or a minimalist all-white resume (flat black-on-white, no accent, no system-readout language) — both were explicitly rejected as anti-references.
- **Don't** introduce a third accent color, or use Cerulean Trace in a primary-CTA role.
- **Don't** set Anton at body-reading sizes; it's condensed, uppercase-only, and unreadable past a headline or short label.
