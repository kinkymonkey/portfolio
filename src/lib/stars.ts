import { mkdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";

const FILE = path.join(process.cwd(), "data", "stars.json");
const TMP = "/tmp/jht-stars.json";

export const STAR_ID = /^[a-z0-9][a-z0-9:_-]{0,63}$/;

type Store = Record<string, number>;

function filePath() {
  return process.env.VERCEL ? TMP : FILE;
}

function readStore(): Store {
  const candidates = process.env.VERCEL ? [TMP, FILE] : [FILE];
  for (const file of candidates) {
    try {
      const data = JSON.parse(readFileSync(file, "utf8")) as Store & {
        count?: number;
      };
      if (typeof data.count === "number" && data.site === undefined) {
        const { count, ...rest } = data;
        return { site: count, ...rest };
      }
      return data;
    } catch {
      // try next
    }
  }
  return {};
}

function writeStore(store: Store) {
  const target = filePath();
  mkdirSync(path.dirname(target), { recursive: true });
  writeFileSync(target, `${JSON.stringify(store)}\n`);
}

export function getStarCounts() {
  return readStore();
}

export function getStarCount(id: string) {
  return readStore()[id] ?? 0;
}

export function addStar(id: string) {
  if (!STAR_ID.test(id)) throw new Error("bad id");
  const store = readStore();
  store[id] = (store[id] ?? 0) + 1;
  writeStore(store);
  return store[id];
}

export function removeStar(id: string) {
  if (!STAR_ID.test(id)) throw new Error("bad id");
  const store = readStore();
  store[id] = Math.max(0, (store[id] ?? 0) - 1);
  if (store[id] === 0) delete store[id];
  writeStore(store);
  return store[id] ?? 0;
}
