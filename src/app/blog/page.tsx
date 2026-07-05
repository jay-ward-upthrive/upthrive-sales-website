import Link from 'next/link';
import { posts } from '@/data/posts';
import { Reveal } from '@/components/reveal';

export const metadata = {
  title: 'Upthrive resources',
  description:
    'Useful content for insurance lead generation, recruiting campaigns, appointment setting, pricing visibility, and stronger sales conversations.',
};

export default function Page() {
  return (
    <div className="pb-20">
      <section className="home-section">
        <div className="section-shell">
          <Reveal>
            <p className="kicker text-[#382A51]/68">Blog and resources</p>
            <h1 className="mt-4 max-w-4xl font-heading text-[clamp(3rem,5vw,5.4rem)] leading-[0.95] text-[#000100]">
              Content that helps buyers trust the offer and sales teams move faster.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#000100]/72 sm:text-lg">
              The resource hub supports lead generation, recruiting, appointment setting, pricing visibility, and stronger buyer confidence across the rest of the system.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.04}>
                <article className="h-full rounded-[30px] border border-black/8 bg-white/72 p-6 shadow-[0_20px_50px_rgba(23,16,5,0.06)] backdrop-blur-xl">
                  <p className="kicker text-[#382A51]/62">{post.category}</p>
                  <h2 className="mt-4 font-heading text-[2.2rem] leading-none text-[#000100]">{post.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#000100]/72">{post.summary}</p>
                  <div className="mt-6">
                    <Link href={`/blog/${post.slug}`} className="light-button px-5 py-3 text-sm">
                      Read article
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
