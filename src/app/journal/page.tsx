import type { Metadata } from "next";
import Link from "next/link";
import { listJournalPosts } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal, Justin Henry Teh",
  description: "Notes on graphic design, print, AI in the creative industry, and creative pipelines.",
};

export default function JournalIndex() {
  const posts = listJournalPosts();
  return (
    <main className="bg-bg">
      <header className="border-b border-hairline py-14 md:py-20">
        <div className="mx-auto max-w-[1400px] px-4 md:px-6">
          <h1 className="font-display text-[clamp(2.5rem,6vw,5.625rem)] font-normal leading-[1.05] tracking-[-0.02em] text-ink">
            Journal
          </h1>
          <p className="mt-6 max-w-[52ch] font-body text-base leading-[1.7] text-ink md:text-[17px]">
            Design, print, AI video, and the pipelines that get the work out.
          </p>
        </div>
      </header>
      <section className="mx-auto max-w-[680px] px-4 py-16 md:px-6">
        {posts.length === 0 ? (
          <p className="font-body text-ink/70">No journal posts yet.</p>
        ) : (
          <ul className="divide-y divide-hairline">
            {posts.map((post) => (
              <li key={post.slug} className="py-8">
                <p className="font-body text-xs tracking-[0.2em] text-ink/50 uppercase">{post.date}</p>
                <Link href={`/journal/${post.slug}`} className="font-display mt-2 block text-3xl text-ink">
                  {post.title}
                </Link>
                {post.description ? <p className="mt-3 font-body text-ink/70">{post.description}</p> : null}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
