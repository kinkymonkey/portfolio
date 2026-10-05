// Same fixed rate Trinity Dossier and Prompt Maker charge at. PayMongo only charges in PHP.
export const USD_TO_PHP_RATE = 62;

export const PLANS = {
  first: {
    usd: 499,
    name: "Majestic Ads: first creative sprint",
    label: "First creative sprint",
    blurb: "One product, 3 angles, 6 image ads and 3 videos. For brands new to Majestic Ads.",
    turnaround: "5 to 7 business days",
  },
  single: {
    usd: 1500,
    name: "Majestic Ads: paid social sprint",
    label: "Paid social sprint",
    blurb: "One product or offer, 5 angles, 10 image ads and 5 videos with 10 video versions.",
    turnaround: "7 to 10 business days",
  },
  monthly: {
    usd: 3500,
    name: "Majestic Ads: always-on creative pipeline",
    label: "Always-on creative pipeline",
    blurb: "Fresh test-ready creative every month, with a planning call and a performance review. Cancel anytime.",
    turnaround: "7 to 10 business days for the first batch",
  },
} as const;

export type PlanKey = keyof typeof PLANS;
export const isPlan = (v: unknown): v is PlanKey => typeof v === "string" && v in PLANS;
export const phpFor = (usd: number) => usd * USD_TO_PHP_RATE;
