import fs from "fs";
import path from "path";

export type JournalPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  hero: string;
  body: string;
};

const DIR = path.join(process.cwd(), "src", "content", "journal");

function parse(file: string, slug: string): JournalPost | null {
  const text = fs.readFileSync(file, "utf8");
  if (!text.startsWith("---\n")) return null;
  const end = text.indexOf("\n---\n", 4);
  if (end === -1) return null;
  const fields: Record<string, string> = {};
  for (const line of text.slice(4, end).split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    fields[line.slice(0, idx).trim()] = line.slice(idx + 1).trim().replace(/^["']|["']$/g, "");
  }
  return {
    slug,
    title: fields.title || slug,
    description: fields.description || "",
    date: fields.date || "",
    hero: fields.hero || "",
    body: text.slice(end + 5).trim(),
  };
}

export function listJournalPosts(): JournalPost[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((name) => name.endsWith(".md"))
    .map((name) => parse(path.join(DIR, name), name.replace(/\.md$/, "")))
    .filter((row): row is JournalPost => Boolean(row))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getJournalPost(slug: string) {
  return listJournalPosts().find((row) => row.slug === slug) ?? null;
}
