import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getJournalPost, listJournalPosts } from "@/lib/journal";

export function generateStaticParams() {
  return listJournalPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) return {};
  return { title: `${post.title}, Justin Henry Teh`, description: post.description };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) notFound();
  return (
    <main className="bg-bg">
      <article className="mx-auto max-w-[680px] px-4 py-16 md:px-6">
        <p className="font-body text-xs tracking-[0.2em] text-ink/50 uppercase">{post.date}</p>
        <h1 className="font-display mt-3 text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] text-ink">{post.title}</h1>
        {post.hero ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.hero} alt="" className="mt-10 w-full" />
        ) : null}
        <div className="mt-10 space-y-5 font-body text-base leading-[1.8] text-ink whitespace-pre-wrap">{post.body}</div>
      </article>
    </main>
  );
}
