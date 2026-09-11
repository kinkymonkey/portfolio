"use client";

import { useEffect, useState } from "react";

const MINE_KEY = "jht-starred";

type Snapshot = { count: number; pending: boolean; starred: boolean };

type Bucket = Snapshot & { listeners: Set<(snap: Snapshot) => void> };

const buckets = new Map<string, Bucket>();
let load: Promise<void> | null = null;
let mine: Set<string> | null = null;

function readMine(): Set<string> {
  if (mine) return mine;
  mine = new Set();
  if (typeof window === "undefined") return mine;
  try {
    const raw = window.localStorage.getItem(MINE_KEY);
    if (!raw) return mine;
    const ids = JSON.parse(raw) as unknown;
    if (Array.isArray(ids)) {
      for (const id of ids) {
        if (typeof id === "string") mine.add(id);
      }
    }
  } catch {
    // ignore
  }
  return mine;
}

function saveMine() {
  if (typeof window === "undefined" || !mine) return;
  window.localStorage.setItem(MINE_KEY, JSON.stringify([...mine]));
}

function bucket(id: string): Bucket {
  let row = buckets.get(id);
  if (!row) {
    row = {
      count: 0,
      pending: false,
      starred: readMine().has(id),
      listeners: new Set(),
    };
    buckets.set(id, row);
  }
  return row;
}

function emit(id: string) {
  const row = bucket(id);
  const snap = { count: row.count, pending: row.pending, starred: row.starred };
  row.listeners.forEach((fn) => fn(snap));
}

function loadCounts() {
  if (load) return load;
  load = fetch("/api/stars", { cache: "no-store" })
    .then((res) => res.json())
    .then((data: Record<string, number>) => {
      for (const [id, count] of Object.entries(data)) {
        if (typeof count !== "number") continue;
        bucket(id).count = count;
        emit(id);
      }
    })
    .finally(() => {
      load = null;
    });
  return load;
}

export function SiteStar({
  id = "site",
  className,
  label = "this",
}: {
  id?: string;
  className: string;
  label?: string;
}) {
  const [view, setView] = useState<Snapshot>({
    count: 0,
    pending: false,
    starred: false,
  });

  useEffect(() => {
    const row = bucket(id);
    row.starred = readMine().has(id);
    const onChange = (next: Snapshot) => setView(next);
    row.listeners.add(onChange);
    setView({ count: row.count, pending: row.pending, starred: row.starred });
    void loadCounts();
    return () => {
      row.listeners.delete(onChange);
    };
  }, [id]);

  async function onStar() {
    const row = bucket(id);
    if (row.pending) return;
    const add = !row.starred;
    row.pending = true;
    row.starred = add;
    row.count = Math.max(0, row.count + (add ? 1 : -1));
    if (add) readMine().add(id);
    else readMine().delete(id);
    saveMine();
    emit(id);
    try {
      const res = await fetch("/api/stars", {
        method: "POST",
        cache: "no-store",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, action: add ? "add" : "remove" }),
      });
      const data = (await res.json()) as { count?: number };
      if (typeof data.count === "number") row.count = data.count;
    } catch {
      row.starred = !add;
      row.count = Math.max(0, row.count + (add ? -1 : 1));
      if (add) readMine().delete(id);
      else readMine().add(id);
      saveMine();
    } finally {
      row.pending = false;
      emit(id);
    }
  }

  return (
    <button
      type="button"
      aria-pressed={view.starred}
      aria-label={`${view.starred ? "Unstar" : "Star"} ${label}, ${view.count} stars`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        void onStar();
      }}
      className={`inline-flex cursor-pointer items-center gap-1.5 ${className}`}
    >
      <svg
        viewBox="0 0 16 16"
        width="13"
        height="13"
        fill={view.starred ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.2"
        aria-hidden="true"
      >
        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
      </svg>
      {view.starred ? "Starred" : "Star"}
      <span className="tabular-nums opacity-60">{view.count}</span>
    </button>
  );
}
