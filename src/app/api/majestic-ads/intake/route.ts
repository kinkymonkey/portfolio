import { NextRequest, NextResponse } from "next/server";
import { db, type Order } from "@/app/majestic-ads/_lib/db";
import { refreshPaid } from "@/app/majestic-ads/_lib/paymongo";

const DRIVE = /^https:\/\/(drive|docs)\.google\.com\/\S+$/i;
const clip = (v: unknown, max = 3000) => String(v ?? "").trim().slice(0, max);

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ ok: false, error: "Bad request." }, { status: 400 });

  const intake = {
    brand: clip(body.brand, 200),
    productUrl: clip(body.productUrl, 500),
    drive: clip(body.drive, 600),
    claims: clip(body.claims),
    avoid: clip(body.avoid),
    competitors: clip(body.competitors),
    aiPeople: ["no", "yes"].includes(body.aiPeople) ? body.aiPeople : "no",
    notes: clip(body.notes),
  };
  if (!intake.brand) return NextResponse.json({ ok: false, error: "Add your brand name." }, { status: 400 });
  if (!DRIVE.test(intake.drive)) {
    return NextResponse.json({ ok: false, error: "Paste a Google Drive link (drive.google.com or docs.google.com)." }, { status: 400 });
  }

  try {
    const q = await db();
    const rows = (await q`SELECT * FROM ma_orders WHERE ref = ${clip(body.ref, 60)}`) as Order[];
    const order = rows[0];
    if (!order || !(await refreshPaid(order))) {
      return NextResponse.json({ ok: false, error: "We could not find a confirmed payment for this link." }, { status: 403 });
    }
    await q`UPDATE ma_orders SET intake = ${JSON.stringify(intake)}::jsonb, intake_at = now() WHERE ref = ${order.ref}`;
    return NextResponse.json({ ok: true, plan: order.plan, name: order.name, email: order.email });
  } catch (err) {
    console.error("majestic-ads intake failed", err);
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
