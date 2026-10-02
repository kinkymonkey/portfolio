// Same fixed rate Trinity Dossier and Prompt Maker charge at. PayMongo only charges in PHP.
export const USD_TO_PHP_RATE = 62;

export const PLANS = {
  first: { usd: 249, name: "Majestic Ads: first set", label: "First set", blurb: "One set. For brands new to Majestic Ads." },
  single: { usd: 499, name: "Majestic Ads: one set", label: "One set", blurb: "One set." },
  monthly: { usd: 1000, name: "Majestic Ads: 3 sets a month", label: "3 sets a month", blurb: "3 sets a month. Cancel anytime." },
} as const;

export type PlanKey = keyof typeof PLANS;
export const isPlan = (v: unknown): v is PlanKey => typeof v === "string" && v in PLANS;
export const phpFor = (usd: number) => usd * USD_TO_PHP_RATE;
