export const motionStudy = {
  slug: "motion-studies",
  title: "Motion studies",
  client: "Personal R&D",
  dek: "Working tests. Some are rough. That's the point.",
  cover: "/motion-studies/obsidian-gate.jpg",
};

export const motionIntro = {
  title: motionStudy.title,
  dek: "These are working tests. Each one is after a different problem: a character that holds across shots, voice and lip sync, camera movement, lighting that doesn't drift. Some of the clips are rough. That's the point. The fastest way I've found to get better at motion generation is to break things on purpose and take notes.",
  workflow: {
    src: "/motion-studies/workflow.jpg",
    alt: "Node graph for a motion generation workflow, chaining reference images, audio, and staged prompts.",
    width: 1800,
    height: 717,
  },
  after: [
    "I don't run these as a single prompt-and-generate call. Production goes through node-based workflows: reference images, audio, and staged prompts chained across steps. The clips above were built that way in Seedance and Seedream. Some are single shots. Some are longer sequences with synced dialogue.",
    "I add more of these as the tools change. Treat this page as a running log, not a finished set.",
  ],
};

export type MotionClip = {
  id: string;
  title: string;
  clip: string;
  src: string;
  poster: string;
  body: string[];
};

export const motionClips: MotionClip[] = [
  {
    id: "corpse-walkers",
    title: "Corpse Walkers",
    clip: "Episode 1",
    src: "/motion-studies/corpse-walkers.mp4",
    poster: "/motion-studies/corpse-walkers.jpg",
    body: [
      "I wanted to tell paranormal stories, so I built a team of investigators and gave them backstories. This is one of the first videos I made with them.",
      "Location shots were the hard part. The models kept moving the rooms around, furniture sliding between cuts, so I had to learn how to lock an environment in place and keep it consistent from scene to scene. I stopped trying to string rooms together as if they sat next to each other. The video models don't understand that. Each backdrop is its own environment, and that held.",
      "Then it was editorial work: which tool could stitch clips fast, where to cut the audio, whether a sound effect belonged in the shot, and whether the scene needed subtitles.",
    ],
  },
  {
    id: "dark-play-1",
    title: "Dark Play",
    clip: "Daily 1",
    src: "/motion-studies/dark-play-daily-1.mp4",
    poster: "/motion-studies/dark-play-daily-1.jpg",
    body: [
      "This is client work. I proposed we stop selling only to people already in the kink audience, and position the pieces so they can be worn as daily clothes.",
      "Making the clips was not the real problem. The mix was: clothing, room, and a person an audience could relate to, even though the face is generated.",
    ],
  },
  {
    id: "dark-play-2",
    title: "Dark Play",
    clip: "Daily 2",
    src: "/motion-studies/dark-play-daily-2.mp4",
    poster: "/motion-studies/dark-play-daily-2.jpg",
    body: [
      "This is client work. I proposed we stop selling only to people already in the kink audience, and position the pieces so they can be worn as daily clothes.",
      "Making the clips was not the real problem. The mix was: clothing, room, and a person an audience could relate to, even though the face is generated.",
    ],
  },
  {
    id: "sunscreen",
    title: "Sunscreen",
    clip: "UGC, 30 seconds",
    src: "/motion-studies/sunscreen.mp4",
    poster: "/motion-studies/sunscreen.jpg",
    body: [
      "This is a UGC test. I wanted to learn how to put a hook on a 30-second clip and keep people watching. I also learned how to feed product-shot references, and where the model still hallucinates and drifts. Newer models still do it. I'm already thinking about quality checks before a clip exists: whether the references got used, how they got used, and where the model started improvising.",
      "Prompts and references have to agree. If they don't, the model loses the thread, and you can see the confusion in the output. Credits get spent either way, so the QA has to start before generation, not after a clip that didn't hold.",
    ],
  },
  {
    id: "obsidian-gate",
    title: "Obsidian Gate",
    clip: "Valeria, action animatic",
    src: "/motion-studies/obsidian-gate.mp4",
    poster: "/motion-studies/obsidian-gate.jpg",
    body: [
      "This short action sequence was a test of references: clothing, weapons, anything in her hands. Coming up with an outfit is one problem. Getting her to actually wear it is another, especially when the look lives only in prompts.",
      "I used this animatic to try a few ways of putting outfits and props on a character, then watching how they move. Clean character sheets versus prompting the look onto the footage itself.",
      "The method that stuck came from old 3D work: color masking. Assign a color to each piece of clothing, then tell the model what each color means. That's easier to direct than describing the whole costume in prose, which the model often reads differently from what I meant.",
    ],
  },
];
