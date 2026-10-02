import { neon } from "@neondatabase/serverless";

export type Order = {
  ref: string;
  plan: string;
  name: string;
  email: string;
  site_host: string;
  status: string;
  session_id: string | null;
  subscription_id: string | null;
  payment_intent_id: string | null;
  intake: Record<string, unknown> | null;
};

let ready: Promise<unknown> | undefined;

// Orders are state, so they live in Neon (see CLAUDE.md memory architecture).
export async function db() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is missing");
  const q = neon(url);
  ready ??= q`CREATE TABLE IF NOT EXISTS ma_orders (
    ref text PRIMARY KEY,
    plan text NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    site_host text NOT NULL,
    status text NOT NULL DEFAULT 'pending',
    session_id text,
    subscription_id text,
    payment_intent_id text,
    intake jsonb,
    intake_at timestamptz,
    created_at timestamptz NOT NULL DEFAULT now(),
    paid_at timestamptz
  )`;
  try {
    await ready;
  } catch (err) {
    ready = undefined; // do not cache a failed connection
    throw err;
  }
  return q;
}

// Lowercase, drop a +tag. "A.B+x@Gmail.com" -> "a.b@gmail.com".
export function normEmail(email: string) {
  const [local, domain] = email.trim().toLowerCase().split("@");
  return `${local.split("+")[0]}@${domain}`;
}

export function siteHost(url: string) {
  try {
    const u = new URL(/^https?:\/\//i.test(url) ? url : `https://${url}`);
    return u.hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return "";
  }
}
