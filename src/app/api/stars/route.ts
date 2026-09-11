import { addStar, getStarCounts, removeStar, STAR_ID } from "@/lib/stars";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(getStarCounts());
}

export async function POST(request: Request) {
  let id = "site";
  let action: "add" | "remove" = "add";
  try {
    const body = (await request.json()) as { id?: string; action?: string };
    if (typeof body.id === "string") id = body.id;
    if (body.action === "remove") action = "remove";
  } catch {
    // default site add
  }
  if (!STAR_ID.test(id)) {
    return Response.json({ error: "bad id" }, { status: 400 });
  }
  const count = action === "remove" ? removeStar(id) : addStar(id);
  return Response.json({ id, count });
}
