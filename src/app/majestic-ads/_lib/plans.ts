export const PLANS = {
  first: { usd: 499, name: "Majestic Ads: first sprint", label: "First sprint", blurb: "One sprint. For brands new to Majestic Ads." },
  single: { usd: 1500, name: "Majestic Ads: core sprint", label: "Core sprint", blurb: "One core sprint." },
  monthly: { usd: 3500, name: "Majestic Ads: monthly pipeline", label: "Monthly pipeline", blurb: "Monthly creative pipeline. Cancel anytime." },
} as const;

export type PlanKey = keyof typeof PLANS;
export const isPlan = (v: unknown): v is PlanKey => typeof v === "string" && v in PLANS;
