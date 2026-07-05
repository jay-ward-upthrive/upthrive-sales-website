import { notFound } from 'next/navigation';
import Link from 'next/link';
import { posts } from '@/data/posts';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="home-section">
      <div className="section-shell max-w-4xl">
        <p className="kicker text-[#382A51]/68">{post.category}</p>
        <h1 className="mt-4 max-w-4xl font-heading text-[clamp(3rem,5vw,5rem)] leading-[0.95] text-[#000100]">{post.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[#000100]/72 sm:text-lg">{post.summary}</p>

        <div className="mt-8 rounded-[32px] border border-black/8 bg-white/72 p-6 shadow-[0_20px_60px_rgba(23,16,5,0.08)] backdrop-blur-xl lg:p-8">
          <div className="space-y-5">
            {post.body.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-[#000100]/76">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/blog" className="light-button px-6 py-3 text-sm">
            Back to blog
          </Link>
          <Link href="/book-a-call" className="cta-primary px-6 py-3 text-sm">
            Book a strategy call
          </Link>
        </div>
      </div>
    </article>
  );
}
