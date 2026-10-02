import { headers } from "next/headers";

const BY_COUNTRY: Record<string, string> = {
  GB: "GBP", CA: "CAD", AU: "AUD", NZ: "NZD", SG: "SGD", MY: "MYR", ID: "IDR", TH: "THB", JP: "JPY", KR: "KRW",
  IN: "INR", HK: "HKD", CH: "CHF", SE: "SEK", NO: "NOK", DK: "DKK", MX: "MXN", BR: "BRL", ZA: "ZAR", PL: "PLN",
  DE: "EUR", FR: "EUR", ES: "EUR", IT: "EUR", NL: "EUR", IE: "EUR", BE: "EUR", AT: "EUR", PT: "EUR", FI: "EUR", GR: "EUR",
};

// Estimate of the USD price in the visitor's own currency, from their country (Vercel header) and the ECB rate.
// Returns null for USD/PHP visitors, unknown countries, or if the rate lookup fails.
export async function localPrice(usd: number): Promise<string | null> {
  const country = (await headers()).get("x-vercel-ip-country") ?? "";
  const currency = BY_COUNTRY[country];
  if (!currency) return null;
  try {
    const res = await fetch(`https://api.frankfurter.dev/v1/latest?base=USD&symbols=${currency}`, { next: { revalidate: 21600 } });
    const rate = (await res.json())?.rates?.[currency];
    if (typeof rate !== "number") return null;
    return new Intl.NumberFormat("en", { style: "currency", currency, maximumFractionDigits: 0 }).format(usd * rate);
  } catch {
    return null;
  }
}
