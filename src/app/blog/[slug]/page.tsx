import { notFound } from 'next/navigation';
import Link from 'next/link';
import { posts } from '@/data/posts';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#382A51]/70">{post.category}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#000100] sm:text-5xl">{post.title}</h1>
      <p className="mt-5 text-base leading-8 text-[#000100]/72">{post.summary}</p>
      <div className="mt-8 space-y-4 rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm shadow-black/5">
        {post.body.map((paragraph) => (
          <p key={paragraph} className="text-sm leading-8 text-[#000100]/74">{paragraph}</p>
        ))}
      </div>
      <div className="mt-8 flex gap-3">
        <Link href="/resources" className="rounded-full bg-[#000100] px-6 py-3 text-sm font-semibold text-[#EFE9B8]">Back to resources</Link>
        <Link href="/book-a-call" className="rounded-full border border-black/15 bg-white/80 px-6 py-3 text-sm font-semibold text-[#000100]">Book a call</Link>
      </div>
    </article>
  );
}
