import Link from 'next/link';
import { pages } from '@/data/pages';

const home = pages.home;

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#382A51]/70">{home.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-[#000100] sm:text-5xl lg:text-6xl">
            {home.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#000100]/72 sm:text-lg">{home.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={home.primaryCta.href} className="rounded-full bg-[#000100] px-6 py-3 text-sm font-semibold text-[#EFE9B8] shadow-lg shadow-black/15 transition hover:-translate-y-0.5 hover:bg-[#382A51]">
              {home.primaryCta.label}
            </Link>
            {home.secondaryCta ? (
              <Link href={home.secondaryCta.href} className="rounded-full border border-black/15 bg-white/80 px-6 py-3 text-sm font-semibold text-[#000100] transition hover:-translate-y-0.5 hover:border-black/25">
                {home.secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>

        <aside className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm shadow-black/5">
          <p className="text-xs uppercase tracking-[0.35em] text-[#382A51]/65">Launch-ready structure</p>
          <div className="mt-5 space-y-3">
            {[
              'Premium public site structure',
              'Directus-ready content model',
              'SEO page silos and routes',
              'Future calculator and portal friendly',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-black/8 bg-[#f8f4ea] px-4 py-3 text-sm text-[#000100]/75">
                {item}
              </div>
            ))}
          </div>
        </aside>
      </section>

      <div className="mt-12 grid gap-5">
        {home.sections.map((section, index) => (
          <section
            key={index}
            className={
              section.kind === 'callout'
                ? 'grid gap-4 rounded-3xl border border-[#382A51]/15 bg-[#000100] p-6 text-[#EFE9B8] shadow-lg shadow-black/20 lg:grid-cols-[1.2fr_0.8fr] lg:p-8'
                : 'space-y-5 rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm shadow-black/5 lg:p-8'
            }
          >
            {section.kind === 'cards' ? (
              <>
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-semibold tracking-tight text-[#000100]">{section.title}</h2>
                  {section.description ? <p className="mt-2 text-sm leading-7 text-[#000100]/70">{section.description}</p> : null}
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {section.items.map((item) => (
                    <article key={item.title} className="rounded-2xl border border-black/8 bg-[#f8f4ea] p-5">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#000100]/72">{item.text}</p>
                    </article>
                  ))}
                </div>
              </>
            ) : section.kind === 'list' ? (
              <>
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-semibold tracking-tight text-[#000100]">{section.title}</h2>
                  {section.description ? <p className="mt-2 text-sm leading-7 text-[#000100]/70">{section.description}</p> : null}
                </div>
                <ul className="grid gap-3 md:grid-cols-2">
                  {section.items.map((item) => (
                    <li key={item} className="rounded-2xl border border-black/8 bg-[#f8f4ea] px-5 py-4 text-sm leading-7 text-[#000100]/75">{item}</li>
                  ))}
                </ul>
              </>
            ) : section.kind === 'callout' ? (
              <>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#EFE9B8]/78">{section.description}</p>
                </div>
                <div className="flex items-end justify-start lg:justify-end">
                  <Link href={section.ctaHref} className="inline-flex rounded-full bg-[#F57B05] px-5 py-2.5 text-sm font-semibold text-[#000100] transition hover:translate-y-[-1px]">
                    {section.ctaLabel}
                  </Link>
                </div>
              </>
            ) : null}
          </section>
        ))}
      </div>
    </div>
  );
}
