export const site = {
  name: "Justin Henry Teh",
  role: "Creative Operations Director",
  domain: "justinhenryteh.com",
  linkedin: "https://linkedin.com/in/justinteh",
  location: "Remote-first, US / APAC hours",
};

export const brands = [
  "McCann Worldgroup",
  "Coca-Cola",
  "Nestlé",
  "Unilever",
  "Globe Telecom",
  "San Miguel Beer",
  "Ray-Ban",
  "Nike",
  "Killer Loop",
  "Avon",
  "Turnitin",
];

export const capabilities = [
  {
    title: "AI Creative Pipelines",
    accent: "cerulean" as const,
    items: [
      "Workflow: brief to generation, grade, quality, delivery",
      "MCP servers connecting creative apps to AI platforms",
      "Direct API orchestration with fal.ai, Wavespeed, OpenRouter",
      "ComfyUI node graphs for repeatable generation",
      "Prompt libraries and model selection per shot",
      "Brand-consistency checks on synthetic output",
    ],
  },
  {
    title: "Creative Operations",
    accent: "ember" as const,
    items: [
      "SOP authoring and quality assurance",
      "Traffic, resourcing, and approval management",
      "Recruitment, onboarding, performance coaching",
      "Cross-functional teams to 35+, spin-off ventures scaled to ~300",
      "Remote-first delivery across US and APAC time zones",
    ],
  },
  {
    title: "Direction & Craft",
    accent: "ember" as const,
    items: [
      "Brand identity and visual systems",
      "Packaging, catalogue, and campaign art direction",
      "Photo and video direction, on set and synthetic",
      "Sales collateral, whitepapers, pitch decks",
      "Concepts built for volume testing and iteration",
      "Curriculum design and team training",
    ],
  },
];

export const toolkit = [
  {
    label: "Generative Video & Motion",
    tools: ["Veo", "Kling", "Runway", "ComfyUI", "ElevenLabs", "Higgsfield"],
  },
  {
    label: "Visual Architecture",
    tools: ["Midjourney", "Flux", "Magnific AI", "Adobe Creative Cloud", "Figma"],
  },
  {
    label: "Agents & Intelligence",
    tools: ["Claude Code", "Cursor", "Hermes", "OpenRouter", "fal.ai", "Wavespeed"],
  },
  {
    label: "Pipeline & Systems",
    tools: ["Model Context Protocol (MCP)", "Asana", "Structured Workflows"],
  },
];

export const timeline = [
  {
    years: "2025 - Present",
    role: "Project Manager, Turnitin Creative Account",
    org: "KDCI Outsourcing",
    description:
      "The bridge between KDCI and Turnitin's in-house creative team. Quality assurance every asset has to pass before the client sees it.",
  },
  {
    years: "2023 - Present",
    role: "Founder & Creative Principal",
    org: "Midnight Majestic",
    description:
      "Brand identity and visual strategy. Built the AI production workflow used on client work, and Midnight HQ, the agent system that runs it.",
  },
  {
    years: "2021 - 2023",
    role: "Creative Director",
    org: "PeakSupport",
    description:
      "Led the corporate rebrand. Set the art direction across internal and external communications through a growth phase.",
  },
  {
    years: "2019 - 2021",
    role: "Senior Operations & Design Manager",
    org: "The/Studio",
    description:
      "Ran three teams. 35+ staff directly, about 300 at peak once SUPPLIED!, the spin-off, is counted in. Designed SUPPLIED!'s brand identity. Hired its first data and creative people.",
  },
  {
    years: "2018 - 2019",
    role: "Operations & Design Manager",
    org: "IM Consultant Services",
    description:
      "Ran remote operations for a US skincare and industrial portfolio, across a distributed creative team.",
  },
  {
    years: "2015 - 2017",
    role: "Associate Client Manager",
    org: "RR Donnelley",
    description:
      "Trained 100+ designers on pre-press, InDesign, and Acrobat preflight. Then ran a design team next to the admin and data unit that produced the business's reports.",
  },
  {
    years: "2006 - 2015",
    role: "Art Director",
    org: "Avon Cosmetics",
    description:
      "Art directed the monthly brochure, the company's primary revenue driver, across six categories in the Philippines, Malaysia, Vietnam, and Thailand. Concepts, design, and photo shoots in every category.",
  },
  {
    years: "2005 - 2006",
    role: "Art Director",
    org: "McCann Worldgroup",
    description:
      "Campaigns for Coca-Cola, Unilever, Globe Telecom, and San Miguel Beer. Designed the Nestlé Chuckie packaging redesign.",
  },
  {
    years: "2003 - 2004",
    role: "Specialist",
    org: "Globe Telecom",
    description: "Multimedia and e-learning production.",
  },
  {
    years: "2003",
    role: "Visual Merchandiser",
    org: "Branded Lifestyle Inc.",
    description:
      "Eyewear retail for Ray-Ban, Nike's eyewear line, Killer Loop, and the other brands they carried.",
  },
];

export type CaseImage = {
  src: string;
  /** CSS object-position, keeps the subject centered when cropped to 4:5 */
  focus?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  accent: "ember" | "cerulean";
  tag: string;
  hook: string;
  dek: string;
  coverImage: CaseImage;
  gallery?: CaseImage[];
  sections: { heading: string; body: string[] }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "turnitin",
    title: "Turnitin",
    client: "KDCI Outsourcing",
    accent: "ember",
    tag: "Operations & Leadership",
    hook:
      "Creative Project Manager on Turnitin's creative account, running three graphic designers through ad campaigns, whitepapers, slides, and social content, mostly ad campaigns and video. Leaders across the organization bring their teams' creative needs here, and creative direction gets set on every piece: layout, brand consistency, whether it's actually on brand before it goes out. Every deliverable runs through quality assurance before a client sees it, no typos, no spelling errors, nothing that shouldn't be there.",
    dek: "A designer skipped quality assurance. It held. A replacement was in the chair in two weeks.",
    coverImage: { src: "/work/turnitin/01-clarity-process.png", focus: "50% 30%" },
    gallery: [
      { src: "/work/turnitin/02-protecting-value.png", focus: "62% 55%" },
      { src: "/work/turnitin/03-publish-confidence.png", focus: "70% 32%" },
      { src: "/work/turnitin/04-reaping-rewards.png", focus: "65% 58%" },
    ],
    sections: [
      {
        heading: "The role",
        body: [
          "The operational bridge between KDCI and Turnitin's in-house creative team, the one point of contact translating whatever a stakeholder actually needs into scoped, sequenced work for three designers. Output spans event assets like rollup banners, social tiles, and email signatures, campaign ad design, video editing, and whitepaper layout, a wide enough range that consistency doesn't happen by accident.",
        ],
      },
      {
        heading: "The problem",
        body: [
          "That kind of role breaks in two places: briefs that don't survive translation into real production tasks, and output that goes out the door without anyone consistently checking it against brand and technical spec before the client sees it.",
        ],
      },
      {
        heading: "What I found",
        body: [
          "Neither of those problems gets solved by working harder on any single asset. They get solved by building the checkpoint the work has to pass through before anyone else does. Without one, quality depends on whoever happened to be paying closest attention that day, which isn't a system, it's luck. A quality assurance checkpoint now covers every asset before delivery: brand consistency, technical spec, versioning, no exceptions. Performance management runs against documented SOPs instead of gut feel, so people know the KPIs before they're being measured against them.",
        ],
      },
      {
        heading: "What I did about it",
        body: [
          "The checkpoint only means something if it actually holds when someone tries to skip it. One designer started sending work directly to the client without routing it through me first, cutting quality assurance out entirely. The errors that quality assurance existed to catch started reaching the client instead. Letting him go was the call I made, and a replacement was sourced, vetted, and onboarded inside two weeks, so the client never saw a gap in delivery.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "Quality assurance is still the standard every asset runs through, and it held under the actual test of someone trying to bypass it. The two-week rebuild after letting the designer go kept delivery on track without the client noticing anything had changed, which is the real measure of whether a system works: not whether it looks good when nothing's going wrong, but whether it holds when someone tries to break it.",
        ],
      },
      {
        heading: "Why this one matters to me",
        body: [
          "This is the clearest proof I have that I don't just design good process, I enforce it, even when enforcing it costs me a team member I now have to replace under pressure. Anyone can write an SOP. What actually matters is being willing to act when someone ignores it, and having a plan ready so that decision doesn't become the client's problem too.",
        ],
      },
    ],
  },
  {
    slug: "chuckie",
    title: "Nestlé Chuckie",
    client: "McCann Worldgroup",
    accent: "ember",
    tag: "Direction & Craft",
    hook:
      "A room of Nestlé executives heard the pitch: paint their chocolate drink bright yellow. They said no, and I did it anyway. The color got so identifiable that Nestlé ended up sending cease-and-desist letters to competitors who copied it.",
    dek: "Nestlé said no to yellow. The shelf said yes. Competitors copied it. Nestlé sent the cease-and-desist letters.",
    coverImage: { src: "/work/chuckie/01-pack-angle.jpg", focus: "50% 45%" },
    gallery: [{ src: "/work/chuckie/02-pack-top.jpeg", focus: "50% 50%" }],
    sections: [
      {
        heading: "The problem",
        body: [
          "Nestlé's chocolate drink brand, Chuckie, was invisible. Not failing. Invisible, which is worse. At McCann Worldgroup at the time, running 360-degree campaigns for Coca-Cola, Unilever, and Globe Telecom, I was the art director when Nestlé's packaging problem landed on the account. A trip to the supermarket, walking the chocolate drinks aisle like an ordinary shopper, made it obvious: one pack couldn't be told from another. Just a wall of brown, competitor after competitor, Chuckie camouflaged somewhere in the middle of it.",
          "Nobody at Nestlé handed over a real creative brief, just \"do something to increase sales,\" so finding the actual problem had to come first.",
        ],
      },
      {
        heading: "What I found",
        body: [
          "The whole category had converged on brown. Every brand, no exceptions. Categories do this all the time, nobody wants to be first to break from what's already working for everyone else, so the whole shelf ends up looking the same. Which meant a color was sitting there unclaimed. Nobody owned one.",
        ],
      },
      {
        heading: "The pitch nobody wanted to hear",
        body: [
          "The pitch to Nestlé: go the opposite direction. Not tweak the brown, abandon it. Predominantly yellow, loud enough to be the one thing on the shelf that doesn't look like everything around it.",
          "The room didn't love it. Brown felt safe, and yellow felt like the kind of call that gets someone fired if it flops, but I held the position anyway and got the sign-off, mostly by showing them exactly which shelf they'd be standing next to and what they'd actually look like in it.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "The redesign took the shelf. Chuckie went from disappearing into the category to owning the only color nobody else had touched. It worked well enough that competitors started copying the yellow, and Nestlé issued cease-and-desist letters to make them stop. The packaging is still running today, two decades later, unchanged on the one decision that mattered.",
        ],
      },
      {
        heading: "Why this one matters to me",
        body: [
          "This is the case that taught me the difference between a safe answer and a right one. Everyone in that room had a reason to say no, and I had exactly one reason to say yes: the shelf actually got looked at, and they hadn't. That's still how I work. Read the real situation before anyone else bothers to, then hold the position when the room gets nervous.",
        ],
      },
    ],
  },
  {
    slug: "rubberfashion",
    title: "Rubberfashion",
    client: "European fetish-fashion retailer",
    accent: "cerulean",
    tag: "AI & Direction",
    hook:
      "A European fetish-fashion retailer asked me to help them sell on Amazon. What I actually found in their catalogue was a business hiding inside their business: daily wear disguised as kink wear, and repositioning it is now rebuilding everything from the photography to the store's navigation.",
    dek: "Half the catalogue was daily wear, sold as kink. Photography, navigation, and copy did the work. A tagline wouldn't have.",
    coverImage: { src: "/work/rubberfashion/01-daily-wear.jpg", focus: "50% 18%" },
    gallery: [
      { src: "/work/rubberfashion/02-kink-editorial.jpg", focus: "50% 15%" },
      { src: "/work/rubberfashion/03-lifestyle.jpg", focus: "50% 20%" },
      { src: "/work/rubberfashion/05-product.jpg", focus: "50% 45%" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "Rubberfashion came to me with a pile of separate asks: fix the package labels, build out Amazon A+ content, rebuild the storefront, get ad creative running on Taboola, produce social assets, push into Temu. About 50 products, no single deliverable, just a retailer trying to grow past the niche audience that already knew them.",
          "That's the hard ceiling most niche brands hit. You can dominate your core buyers and still be invisible to everyone else, because everything about how you present the product tells outsiders \"this isn't for you.\"",
          "Early positioning leaned into individualism: \"wear what you want, be who you are.\" True, but it still spoke only to people already fluent in kink culture. It didn't open a door for anyone standing outside it.",
        ],
      },
      {
        heading: "What I found",
        body: [
          "Going product by product to write the USPs, I noticed something the client hadn't framed out loud. A real chunk of the catalogue wasn't fetish-only at all. Pieces that read as everyday wearable if you photographed and copywrote them differently, same product, different door into the same brand.",
          "The split got named directly: daily wear versus kink wear. Not softening what the brand is, just being honest that half the catalogue is fashion first, and treating it that way instead of burying it under one identity.",
        ],
      },
      {
        heading: "What I did about it",
        body: [
          "The repositioning meant rebuilding more than copy. The visual direction changed to match, styling and shooting the daily-wear pieces so they read as fashion on first glance, not as a kink product trying to pass. The old photography was built for an audience that already knew what it was looking at. The new direction had to work on someone seeing latex as clothing for the first time.",
          "The storefront needed the same rethink, and I dug into how people actually shop Amazon stores, not general UX theory, Amazon-specific behavior, then rebuilt the navigation around it. Fewer categories in the main nav, kink-specific sub-categories moved down into secondary navigation. A shopper landing on \"daily wear\" doesn't get routed past kink signage to find it. That's a small structural change with an outsized effect on who feels like the store is for them.",
          "Everything downstream is getting rebuilt to match: product listings rewritten, new A+ content, a new brand story module. The rest of the original build stays underneath it: the USP extraction through Claude, image generation across Seedream, Flux, Nano Banana, and Luma, the Temu expansion where I brought a second designer onto the build and held their output to the same standard as my own.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "No clean conversion numbers to point to, this wasn't run as an A/B test. But several products hit top 10 in their niche category within about a week of launch under the original positioning. The daily-wear repositioning is newer and still rolling out across the storefront and the listings, the piece of this work I expect to matter most once it's fully live.",
        ],
      },
      {
        heading: "Why this one matters to me",
        body: [
          "Most of what people hire me for looks like production: get the images made, get the store built, ship the assets. The actual value I added here wasn't any single asset. It was noticing a second market sitting inside a catalogue everyone else was only reading one way, then having the follow-through to rebuild the photography, the store architecture, and the copy around that read instead of leaving it as a one-line insight. That's the part of the job I care about most, and it's easy to miss if you're only counting deliverables.",
        ],
      },
    ],
  },
  {
    slug: "avon",
    title: "Avon Cosmetics",
    client: "Avon, four Southeast Asian markets",
    accent: "ember",
    tag: "Direction & Craft",
    hook:
      "Avon's monthly brochure was the company's biggest revenue driver, across four countries, on the same clock every single month for nine years straight, and I ran the shoots that made that possible.",
    dek: "Nine years. Four markets. One monthly brochure, the company's biggest revenue driver. It never missed the clock.",
    coverImage: { src: "/work/avon/01-timeless-pieces-cover.jpg", focus: "50% 22%" },
    gallery: [
      { src: "/work/avon/02-design-by-solenn.jpg", focus: "20% 18%" },
      { src: "/work/avon/03-formal-affair.jpg", focus: "34% 18%" },
      { src: "/work/avon/04-his-hers.jpg", focus: "50% 45%" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "The brochure had to ship monthly across the Philippines, Malaysia, Vietnam, and Thailand. Over nine years my hands touched every category in the book: Intimate Apparel for women, Men's Club (intimate apparel for men), Fragrance, Skin Care, Personal Care (now Bath and Body), Fashion and Home, and Beauty. Four markets, seven categories, each with its own beauty standards, regulations, and taste, all needing to look unmistakably like Avon. Global creative guidelines came down from one office and had to somehow work in four very different countries without the brand drifting apart market to market. And none of that mattered if the thing didn't ship on time, because a late brochure isn't a late deliverable, it's a month of missed revenue for the company's biggest channel.",
        ],
      },
      {
        heading: "What I found",
        body: [
          "The real problem wasn't logistics, it was ideas. Coming up with a fresh creative direction and art direction for every category, every month, for nine years straight, without repeating myself or running the well dry. What actually holds a run like that together is building a process that survives repetition, one that doesn't need to be reinvented every month under deadline pressure, and one flexible enough to bend to four markets without the brand cracking under the strain.",
        ],
      },
      {
        heading: "What I did about it",
        body: [
          "The concept shoots that filled the brochure got run here, casting and directing photographers, stylists, makeup artists, and model agencies fresh for each cycle, and I took the global creative direction and adapted it market by market, keeping the brand recognizable in the Philippines and in Vietnam without either market getting a watered-down version of the other's work. Then I owned the catalogue layout itself: high volume, print-production standard, every month.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "Nine years, four markets, and the brochure kept shipping on schedule and kept holding its position as Avon's primary revenue driver the entire time. No single month where the deadline broke the work.",
        ],
      },
      {
        heading: "Why this one matters to me",
        body: [
          "This is where I actually learned the job I still do now: keep something running at a pace and a standard that doesn't bend, across more complexity than one person should reasonably be able to hold together, without ever treating the deadline as optional. Seven categories, from fragrance to intimate apparel to home goods, each with a different customer and a different visual language, is also where I learned I could move across a wide creative range without losing the thread of what made it Avon. Everything I've built since, the SOPs, the pipelines, the AI production systems, is a more sophisticated version of what I was already doing at Avon with photographers and print schedules instead of models and node graphs.",
        ],
      },
    ],
  },
  {
    slug: "advertising",
    title: "Coca-Cola Campaigns",
    client: "McCann Worldgroup",
    accent: "ember",
    tag: "Direction & Craft",
    hook:
      "Coca-Cola at McCann wasn't one brief, it was a rolling calendar of them: an IMAX cinema tie-in, a regional festival bottle, a summer push, a diet reformulation, each one needing its own voice while still reading as Coca-Cola before anyone read the message.",
    dek: "New occasion every few weeks. Still Coca-Cola before anyone read the can.",
    coverImage: { src: "/work/advertising/01-penafrancia.jpeg", focus: "50% 38%" },
    gallery: [
      { src: "/work/advertising/02-imax.jpeg", focus: "50% 38%" },
      { src: "/work/advertising/03-bench.jpeg", focus: "50% 42%" },
      { src: "/work/advertising/04-light.jpeg", focus: "50% 42%" },
      { src: "/work/advertising/05-carnation.jpg", focus: "38% 40%" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "Coca-Cola's limited-edition packaging program at McCann wasn't a single creative problem, it was a new one every few weeks. A cinema tie-in for IMAX's anniversary, a regional festival bottle for Peñafrancia, a summer push, a diet reformulation that needed its own visual identity on the can. Different audiences, different occasions, different emotional register every time, and every single one still had to read as Coca-Cola before anyone read the specific message.",
          "Nestlé's Carnation line ran the same problem in a different aisle: a 'Light' evaporated milk variant that needed to look like a genuine reformulation, not a diet sticker slapped on the same can.",
        ],
      },
      {
        heading: "What I found",
        body: [
          "The failure mode on a limited-edition program is treating each release as its own creative problem. Do that and the brand drifts a little further from itself with every release, until nothing on shelf looks related anymore. What actually holds a program together is a locked set of brand anchors, the script, the red, the bottle silhouette, that stay fixed no matter how far the surrounding concept wanders.",
        ],
      },
      {
        heading: "What I did about it",
        body: [
          "For the IMAX tie-in I built the can around the cinema experience itself, film-strip motif, 3-D glasses, popcorn, red on red so the Coca-Cola script stayed the loudest thing on the can even against a busy photographic scene.",
          "The Peñafrancia bottle needed the opposite treatment: illustrated, warm, rooted in the actual festival imagery, the boat procession, the flags, and I still anchored it back to brand red instead of letting the regional palette take over.",
          "The 'Buksan ang Summer' can leaned into pure color and a sunburst mark instead of photography, cheap to reproduce at volume and unmistakably seasonal. For the Coca-Cola Light word-mark run, I built the surface pattern out of the brand's own vocabulary, actual product language repeated as texture, so the diet variant still felt like Coca-Cola instead of a monochrome afterthought.",
          "Nestlé Carnation Light needed a smaller, sharper fix: keep the red Nestlé and Carnation lockup exactly where shoppers already expect it, then let the product photography, a plated panna cotta, two women sharing it, sell the reformulation instead of relying on the word 'Light' to do all the work.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "Every one of these ran as a real production release, not a pitch deck. The limited editions shipped on their tie-in windows, the seasonal work turned over every year, and the same account carried this pattern across Unilever, Globe Telecom, and San Miguel Beer during the same run at McCann.",
        ],
      },
      {
        heading: "Why this one matters to me",
        body: [
          "This is the discipline everything since traces back to: say something new every time and still protect the one thing that has to stay constant. That's the same problem I solve now running brand-consistency checks on AI-generated creative, just with a different production method underneath it.",
        ],
      },
    ],
  },
  {
    slug: "ai-video-pipeline",
    title: "Production Pipelines",
    client: "Personal R&D",
    accent: "cerulean",
    tag: "AI & Agents",
    hook:
      "This isn't a pitch for an AI video editor job, it's proof of what leading a team through adopting a new production technology actually requires: understanding it deeply enough to make the call yourself, instead of approving whatever tool has the best demo reel.",
    dek: "You can't put a team on a new stack if you've only watched the demo. He built the pipeline so he could make the call himself.",
    coverImage: { src: "/work/ai-video-pipeline/01-pipeline-graph.png", focus: "50% 42%" },
    sections: [
      {
        heading: "The problem",
        body: [
          "For client work, I'd already built AI image pipelines, USP extraction, generation, assembly, the whole chain, for Rubberfashion and internally at Midnight Majestic. Video was the obvious next step, and also the one where I had the least hands-on depth. Greenlighting a video tool off a vendor's sizzle reel wasn't the goal, actually knowing what a team was being asked to evaluate was.",
          "So building started with personal narrative projects, not client work, somewhere failure wouldn't cost anyone's budget.",
        ],
      },
      {
        heading: "What I found",
        body: [
          "Most tools in this space compete on hype. New model drops, timeline fills up with demo clips, everyone moves on to the next one two weeks later. Underneath that noise, two things actually determine whether a tool survives contact with real production work.",
          "First, whether it takes multiple reference images or only a start and end frame. Start/end interpolation is fine for a single transition. It falls apart the moment you need a character or product to stay consistent across a sequence. Second, native audio. A few well-hyped models generate great video and nothing else, which means every clip needs a separate audio pass bolted on after. That's not a minor inconvenience, it's a workflow that doesn't scale past one-off demos, and several tools got ruled out on that basis alone, no matter how good the visuals looked.",
        ],
      },
      {
        heading: "What I did about it",
        body: [
          "Two personal narrative series became the testbed: Adventures of Elena, and The ParaNormals, following three characters, Mae, Reese, and Nomi, across a set of shots. That gave a reason to actually push a pipeline past a single clip, into continuity, character consistency, and a real production sequence.",
          "For core generation, GPT, Grok Imagine 2, Seedream, Seedance, Nano Banana, and Veo held up against the reference and audio criteria. Magnific handles upscale. Creatify and Higgsfield cover motion and avatar work. ElevenLabs for voice. Dola, Dreamina, Lumina, Modelark, Midjourney, Runway, Kling, and Krea got tested against the same criteria too, some earned a place in the stack, some didn't.",
          "Where to run all of it was its own deliberate call. A lot of platforms lock you into their own small set of native models, which is fine until that platform's roadmap stops matching what you actually need, so the pipeline got built on access layers instead: ComfyUI, fal.ai, Wavespeed, OpenRouter, kie.ai, Wireflow, Figma Weave, meaning the flow isn't married to any one vendor's decisions about what to support. Swap the underlying model, the pipeline still runs. That's the same reasoning behind every SOP I've written: don't rebuild the process from memory every time, build it once so it survives the tool underneath it changing.",
          "One live piece ran against actual client material too, a product video for Rubberfashion, to check the pipeline against something with real constraints instead of only personal creative freedom.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "A couple months into this, and that's worth saying straight: two of the personal pieces are up on YouTube and picked up real views as experimental UGC-style tests, but hard numbers on those haven't been pulled yet, and no metric gets claimed that hasn't actually been measured. What's here is a working pipeline, a clear model-evaluation framework, and one client piece that proves it holds up outside personal projects.",
        ],
      },
      {
        heading: "Why this one matters to me",
        body: [
          "Twenty-three years spent being the person who builds the process other people run through, that only works if I actually understand what I'm asking them to do. This is me doing the hands-on work myself, first, so that when I'm leading a team through the next wave of tools, I'm evaluating them the same way I evaluated these: on whether they hold up in production, not on how good the demo looked.",
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

/** AI video / production showcases. Listed with the rest of Work. */
export type CaseVideo = {
  src: string;
  poster: string;
  label: string;
};

export type UgcCaseStudy = {
  slug: string;
  title: string;
  client: string;
  accent: "ember" | "cerulean";
  tag: string;
  hook: string;
  dek: string;
  coverVideo: CaseVideo;
  sections: { heading: string; body: string[] }[];
  spots?: CaseVideo[];
  pipelineTest?: { before: CaseVideo; after: CaseVideo; note: string };
  bonus?: { video: CaseVideo; note: string };
};

export const ugcCaseStudies: UgcCaseStudy[] = [
  {
    slug: "rubberfashion-video-pipeline",
    title: "UGC Ads",
    client: "Rubberfashion",
    accent: "cerulean",
    tag: "AI Video Production",
    hook:
      "Rubberfashion sells latex to two audiences that don't talk to each other. One buys it because it's fetish wear. The other might buy it if it stopped looking like fetish wear at all. One product, two finished ads, built for both audiences at the same time, through an AI production pipeline instead of a second shoot day.",
    dek: "One product. Two ads. Two audiences. Same face. If identity slipped, the test was worthless.",
    coverVideo: {
      src: "/case-studies/rubberfashion-video-pipeline/daily-2-fixed.mp4",
      poster: "/case-studies/rubberfashion-video-pipeline/daily-2-fixed-poster.jpg",
      label: "Fig. 01",
    },
    sections: [
      {
        heading: "The brief",
        body: [
          "The growth team wanted to test both pitches on the same product, at the same time, without a second shoot day and without a second model. That was the brief I gave myself: one product, two finished ads, two audiences, built through an AI production pipeline instead of two separate shoots.",
        ],
      },
      {
        heading: "The risk",
        body: [
          "The risk was technical. If the woman in spot one looked even slightly different from the woman in spot two, hair, face, proportions, anything, the split test stops comparing two pitches and starts comparing two different women. Nobody would know that's what broke it, the data would just come back confused. The whole thing depended on one variable holding still while everything else around it changed.",
        ],
      },
      {
        heading: "The positioning split",
        body: [
          "The first spot leans into the repositioning I'd already sharpened for the Amazon storefront work: daily wear, not kink wear. A woman ties her shoe on the couch, stands, grabs her bag, and walks out the door talking about her outfit like it's an ordinary Tuesday. Minimalist living room, natural light, handheld phone-camera energy. The latex reads as clothing because everything around it insists it's a normal morning.",
          "The second spot goes the other way on purpose. Same product, same face, but the camera orbits her in a dark crimson studio space, the brand's own color, low-key lighting, no daylight anywhere in the frame. Nothing about her changes. Everything about the room does.",
          "That's the test: hold the one thing that has to stay fixed, her identity, and vary everything around it until the numbers say which frame the audience responds to.",
        ],
      },
      {
        heading: "Where the pipeline got tested",
        body: [
          "The first pass at the daily wear spot was clean and still wrong in a way I couldn't name until I watched it back. Camera moves landed. Dialogue synced. And she wasn't moving. Head turned, mouth moved, everything else stayed locked. It read like a mannequin with a good face.",
          "That's a known failure mode in these models. Left alone, they default to animating the head and eyes and leaving the body frozen, because full-body motion is harder to keep coherent across a shot than a talking head is. The fix wasn't a re-generate, it was going back into the prompt and forcing weight transfer, arm swing, and shoulder rotation into every stage of the shot, then stating it again in the consistency lock at the end. Say it once and the model drifts back to stillness by the second half. Say it in both places and it holds.",
          "The second catch was smaller: a prop she's holding that these models are known to drop between cuts if you stop mentioning it's still in her hand. Same fix. State the prop's position in every stage, not just the first one, or watch it disappear by the third.",
          "Neither catch is glamorous. Both are the actual job. The gap between a generated clip and a usable one lives in catches like these, and none of it shows up in the finished reel, only in whether the reel holds up.",
        ],
      },
      {
        heading: "What held",
        body: [
          "What surprised me was how well identity survived across all of it. Same reference through a living room, a city street, and a dark crimson studio, through hair and makeup changes between takes, and the face never drifted. That's the part of the pipeline I'd trust on a real production slate, it held up across completely different lighting and styling without a single manual touch-up.",
        ],
      },
      {
        heading: "The reflection",
        body: [
          "Twenty years directing shoots, identity consistency was never something I had to solve, it was solved automatically by the same person standing on set. This is the first time I've had to engineer it by hand: lock what has to stay fixed, let everything else move, and build the quality assurance discipline to catch the moment the system starts cheating. Same eye I had at Avon, pointed at a different kind of set. What's new is knowing exactly which line in a prompt is doing the load-bearing work, and never leaving it unstated twice in a row.",
        ],
      },
    ],
    spots: [
      {
        src: "/case-studies/rubberfashion-video-pipeline/daily-2-fixed.mp4",
        poster: "/case-studies/rubberfashion-video-pipeline/daily-2-fixed-poster.jpg",
        label: "Spot 1: Daily wear",
      },
      {
        src: "/case-studies/rubberfashion-video-pipeline/dark-1-studio.mp4",
        poster: "/case-studies/rubberfashion-video-pipeline/dark-1-studio-poster.jpg",
        label: "Spot 2: Studio",
      },
    ],
    pipelineTest: {
      before: {
        src: "/case-studies/rubberfashion-video-pipeline/daily-1-first-pass.mp4",
        poster: "/case-studies/rubberfashion-video-pipeline/daily-1-first-pass-poster.jpg",
        label: "First pass: body frozen",
      },
      after: {
        src: "/case-studies/rubberfashion-video-pipeline/daily-2-fixed.mp4",
        poster: "/case-studies/rubberfashion-video-pipeline/daily-2-fixed-poster.jpg",
        label: "Fixed: weight transfer restored",
      },
      note:
        "The only difference between these two clips is the prompt: the same shot, re-stated at every stage instead of once.",
    },
    bonus: {
      video: {
        src: "/case-studies/rubberfashion-video-pipeline/valeria-action-1.mp4",
        poster: "/case-studies/rubberfashion-video-pipeline/valeria-action-1-poster.jpg",
        label: "Capability note",
      },
      note:
        "Separately, outside the Rubberfashion brief: I also built a short action sequence with the same character, an energy weapon in each hand, mid-strike as a building collapses behind her. It has nothing to do with this project. Including it here as a capability note, not a deliverable, because it's the clearest proof that the pipeline holding a calm UGC spot together can hold a combat sequence together too.",
    },
  },
];

export function getUgcCaseStudy(slug: string) {
  return ugcCaseStudies.find((c) => c.slug === slug);
}

export const workIndex = [
  ...caseStudies.map((cs) => ({ slug: cs.slug, title: cs.title })),
  ...ugcCaseStudies.map((cs) => ({ slug: cs.slug, title: cs.title })),
];

export function getNextWork(slug: string) {
  const i = workIndex.findIndex((item) => item.slug === slug);
  if (i < 0) return workIndex[0];
  return workIndex[(i + 1) % workIndex.length];
}
