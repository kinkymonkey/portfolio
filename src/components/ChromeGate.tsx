"use client";

import { usePathname } from "next/navigation";

// Hides the portfolio nav and footer on the Majestic Ads page, which has its own look.
export function ChromeGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return pathname.startsWith("/majestic-ads") ? null : <>{children}</>;
}
