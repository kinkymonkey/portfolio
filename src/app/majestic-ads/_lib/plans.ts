// PayMongo only charges in PHP, so the USD price is converted at the current rate (ECB via frankfurter, cached 1 hour).
// FALLBACK_RATE is used only if the lookup fails, so checkout never breaks.
const FALLBACK_RATE = 62;
export async function usdToPhp(): Promise<number> {
  try {
    const res = await fetch("https://api.frankfurter.dev/v1/latest?base=USD&symbols=PHP", { next: { revalidate: 3600 } });
    const rate = (await res.json())?.rates?.PHP;
    return typeof rate === "number" && rate > 0 ? rate : FALLBACK_RATE;
  } catch {
    return FALLBACK_RATE;
  }
}

export const PLANS = {
  first: { usd: 499, name: "Majestic Ads: first sprint", label: "First sprint", blurb: "One sprint. For brands new to Majestic Ads." },
  single: { usd: 1500, name: "Majestic Ads: core sprint", label: "Core sprint", blurb: "One core sprint." },
  monthly: { usd: 3500, name: "Majestic Ads: monthly pipeline", label: "Monthly pipeline", blurb: "Monthly creative pipeline. Cancel anytime." },
} as const;

export type PlanKey = keyof typeof PLANS;
export const isPlan = (v: unknown): v is PlanKey => typeof v === "string" && v in PLANS;
export const phpFor = async (usd: number) => Math.round(usd * (await usdToPhp()));
