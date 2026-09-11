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
  ratio?: "portrait" | "landscape";
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
  cardImage?: CaseImage;
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
      "Creative Project Manager on Turnitin's creative account, now in my 2nd year. I run 3 designers through ad campaigns and event materials, about 50 tasks a month, and set creative direction on every piece before it goes out.",
    dek: "A designer skipped quality assurance. It held. A replacement was in the chair in two weeks.",
    coverImage: { src: "/work/turnitin/01-clarity-process.png", focus: "50% 30%" },
    gallery: [
      { src: "/work/turnitin/02-protecting-value.png", focus: "62% 55%" },
      { src: "/work/turnitin/03-publish-confidence.png", focus: "70% 32%" },
      { src: "/work/turnitin/04-reaping-rewards.png", focus: "65% 58%" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "Roles like this break in two places: briefs that don't survive translation into real tasks, and output that ships without anyone consistently checking it against brand and spec.",
        ],
      },
      {
        heading: "What I did",
        body: [
          "I built the checkpoint. Every asset now runs through QA before delivery, against documented SOPs instead of gut feel. Across ~50 tasks a month, my own read on quality lands around 98%, no formal tracking, just my count.",
          "It held under a real test. One designer routed work straight to the client to skip QA. I let him go and had a replacement sourced, vetted, and onboarded inside 2 weeks. The client never saw a gap.",
        ],
      },
      {
        heading: "Why it matters",
        body: [
          "Anyone can write an SOP. What matters is enforcing it, even when that costs a team member I then have to replace under pressure.",
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
          "Chuckie was invisible on shelf, not failing, just lost in a wall of brown. Every competitor had converged on the same color. I was the art director on the account at McCann, running 360-degree campaigns for Coca-Cola, Unilever, and Globe Telecom at the time. I walked the aisle myself and found the real brief nobody handed me: nothing on that shelf was ownable.",
        ],
      },
      {
        heading: "What I did",
        body: [
          "I pitched the opposite of brown: predominantly yellow, loud enough to be the one thing that didn't look like everything around it. The room hated it. Brown felt safe, yellow felt like a firing offense if it flopped, but I held the position and got the sign-off by showing them exactly which shelf they'd be standing next to.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "The redesign took the shelf. Competitors started copying the yellow; Nestlé sent cease-and-desist letters to stop them. The packaging is still running today, unchanged, 20 years later.",
        ],
      },
      {
        heading: "Why it matters",
        body: [
          "Everyone in that room had a reason to say no. I had one reason to say yes: the shelf actually got looked at, and they hadn't. That's still how I work.",
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
      "A European fetish-fashion retailer hired me to sell them on Amazon. What I found in their catalogue was a business hiding inside their business: daily wear disguised as kink wear, and repositioning it means rebuilding the photography to the navigation.",
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
          "Rubberfashion came in with a pile of asks: package labels, Amazon A+ content, a rebuilt storefront, ad creative on Taboola, social assets, a Temu push. About 50 products, no single deliverable. Writing USPs product by product, I found a real chunk of the catalogue wasn't fetish-only: pieces that read as everyday wearable if shot and copywritten differently.",
        ],
      },
      {
        heading: "What I did",
        body: [
          "I named the split directly: daily wear versus kink wear. I changed the styling and photography to match, shot for someone seeing latex as clothing for the first time, not someone who's already fluent in kink. I rebuilt the storefront navigation around real Amazon shopping behavior: fewer categories up front, kink sub-categories moved down, so a \"daily wear\" shopper isn't routed past kink signage first. I'm rebuilding the listings, A+ content, and brand story module to match. Underneath it: USP extraction through Claude, image generation across Seedream, Flux, Nano Banana, and Luma, and the Temu expansion, where I brought on a second designer and held their output to my standard.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "No clean conversion numbers, this wasn't an A/B test, but several products hit top 10 in their niche category within about a week under the original positioning. The daily-wear repositioning is newer and still rolling out, the piece I expect to matter most once live.",
        ],
      },
      {
        heading: "Why it matters",
        body: [
          "The value here wasn't any single asset. It was noticing a second market inside a catalogue everyone else read one way, then rebuilding the photography, the architecture, and the copy around it instead of leaving it as a one-line insight.",
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
    coverImage: { src: "/work/avon/01-timeless-pieces.jpg", ratio: "landscape" },
    cardImage: {
      src: "/work/avon/01-timeless-pieces-cover.jpg",
      focus: "50% 22%",
    },
    gallery: [
      { src: "/work/avon/02-design-by-solenn.jpg", ratio: "landscape" },
      { src: "/work/avon/03-formal-affair.jpg", ratio: "landscape" },
      { src: "/work/avon/04-his-hers.jpg", ratio: "landscape" },
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
      "Coca-Cola at McCann wasn't one brief. It was a rolling calendar of them: an IMAX tie-in, a festival bottle, a summer push, a diet reformulation. Each one needed its own voice. Every one still had to read as Coca-Cola first.",
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
          "I ran Coca-Cola's limited-edition packaging program at McCann, and it wasn't one creative problem, it was a new one every few weeks. An IMAX anniversary tie-in. A Peñafrancia festival bottle. A summer push. A diet reformulation that needed its own visual identity. Different audience, different occasion, different emotional register every time, and every one still had to read as Coca-Cola first. I hit the same problem on Nestlé's Carnation line: a 'Light' evaporated milk variant that had to look like a real reformulation, not a diet sticker on the same can.",
        ],
      },
      {
        heading: "What I did",
        body: [
          "I locked a set of anchors, the script, the red, the bottle silhouette, and never let them move. IMAX got a film strip, 3-D glasses, popcorn, red on red, so the script stayed the loudest thing on the can. Peñafrancia went the opposite way: illustrated, warm, rooted in the actual festival, but I still anchored it back to brand red. Buksan ang Summer leaned into color and a sunburst mark instead of photography, cheap to reproduce and unmistakably seasonal. For Coca-Cola Light I built the pattern from the brand's own product language, so the diet variant didn't read as an afterthought. Carnation Light kept the red Nestlé lockup exactly where shoppers expect it and let the photography sell the reformulation.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "Every one of these shipped as a real production release, not a pitch deck. I carried the same discipline across Unilever, Globe Telecom, and San Miguel Beer during the same run at McCann.",
        ],
      },
      {
        heading: "Why it matters",
        body: [
          "Say something new every time. Protect the one thing that has to stay constant. That's the discipline everything since traces back to, and I run the same check now on AI-generated creative, just with a different production method underneath it.",
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
      "Rubberfashion sells latex to two audiences that don't talk to each other: one buys it as fetish wear, the other might buy it if it stopped looking like fetish wear at all. One product, two finished ads, built for both at once, through an AI pipeline instead of a second shoot day.",
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
          "The growth team wanted to test both pitches on the same product, same time, without a second shoot or a second model. That was the brief I gave myself, run through Magnific Spaces, Seedream 5 Pro, and Seedance 2.5.",
        ],
      },
      {
        heading: "The risk",
        body: [
          "If the woman in spot one looked even slightly different from spot two, hair, face, proportions, the split test stops comparing two pitches and starts comparing two different women. The data comes back confused, and nobody knows why. One variable had to hold still while everything else changed.",
        ],
      },
      {
        heading: "The split",
        body: [
          "I shot spot one for daily wear, not kink wear: she ties her shoe, grabs her bag, walks out the door on an ordinary Tuesday, minimalist living room, natural light, handheld energy. For spot two I went the other way on purpose: same face, same product, but the camera orbits her in a dark crimson studio, no daylight anywhere. Her identity holds fixed. Everything around it moves.",
        ],
      },
      {
        heading: "What broke, and the fix",
        body: [
          "3 failure modes showed up across Seedream 5 Pro and Seedance 2.5: her body froze while her head kept moving, a mannequin with a good face; a prop vanished between cuts; and the location itself drifted, a wall that wasn't there last shot. Same fix each time: anchor it. State the weight transfer, the prop's position, and the location's details in every stage of the prompt, then restate it in the consistency lock. Say it once and it drifts back. Say it twice and it holds.",
        ],
      },
      {
        heading: "What held",
        body: [
          "Same reference face through a living room, a city street, a studio, hair and makeup changes, and it never drifted. That's the part I'd trust on a real slate.",
        ],
      },
      {
        heading: "Why it matters",
        body: [
          "20 years directing shoots, identity consistency wasn't mine to solve, it was solved automatically by the same person standing on set. This is the first time I've had to engineer it by hand. Same eye I had at Avon, pointed at a different kind of set.",
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

export const hiddenWork = new Set(["ai-video-pipeline"]);

export const workIndex = [
  ...caseStudies
    .filter((cs) => !hiddenWork.has(cs.slug))
    .map((cs) => ({ slug: cs.slug, title: cs.title })),
  ...ugcCaseStudies.map((cs) => ({ slug: cs.slug, title: cs.title })),
  { slug: "motion-studies", title: "Motion studies" },
];

export function getNextWork(slug: string) {
  const i = workIndex.findIndex((item) => item.slug === slug);
  if (i < 0) return workIndex[0];
  return workIndex[(i + 1) % workIndex.length];
}
