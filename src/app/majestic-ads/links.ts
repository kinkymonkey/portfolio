import { site } from "@/lib/data";

// Each button opens the start form for that plan, which then opens Stripe.
export const links = {
  first: "/majestic-ads/start?plan=first",
  single: "/majestic-ads/start?plan=single",
  monthly: "/majestic-ads/start?plan=monthly",
  linkedin: site.linkedin,
};
