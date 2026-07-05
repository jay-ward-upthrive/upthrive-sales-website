import Link from 'next/link';
import { PageContent, PageSection } from '@/data/pages';

function SectionBlock({ section }: { section: PageSection }) {
  if (section.kind === 'cards') {
    return (
      <section className="space-y-5 rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm shadow-black/5 lg:p-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-[#000100]">{section.title}</h2>
          {section.description ? <p className="mt-2 text-sm leading-7 text-[#000100]/70">{section.description}</p> : null}
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {section.items.map((item) => (
            <article key={item.title} className="rounded-2xl border border-black/8 bg-[#f8f4ea] p-5">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#000100]/72">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (section.kind === 'list') {
    return (
      <section className="space-y-5 rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm shadow-black/5 lg:p-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-[#000100]">{section.title}</h2>
          {section.description ? <p className="mt-2 text-sm leading-7 text-[#000100]/70">{section.description}</p> : null}
        </div>
        <ul className="grid gap-3 md:grid-cols-2">
          {section.items.map((item) => (
            <li key={item} className="rounded-2xl border border-black/8 bg-[#f8f4ea] px-5 py-4 text-sm leading-7 text-[#000100]/75">
              {item}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (section.kind === 'faq') {
    return (
      <section className="space-y-5 rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm shadow-black/5 lg:p-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-[#000100]">{section.title}</h2>
          {section.description ? <p className="mt-2 text-sm leading-7 text-[#000100]/70">{section.description}</p> : null}
        </div>
        <div className="space-y-3">
          {section.items.map((item) => (
            <details key={item.question} className="rounded-2xl border border-black/8 bg-[#f8f4ea] p-5">
              <summary className="cursor-pointer list-none text-base font-semibold text-[#000100]">{item.question}</summary>
              <p className="mt-3 text-sm leading-7 text-[#000100]/72">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="grid gap-4 rounded-3xl border border-[#382A51]/15 bg-[#000100] p-6 text-[#EFE9B8] shadow-lg shadow-black/20 lg:grid-cols-[1.2fr_0.8fr] lg:p-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#EFE9B8]/78">{section.description}</p>
      </div>
      <div className="flex items-end justify-start lg:justify-end">
        <Link href={section.ctaHref} className="inline-flex rounded-full bg-[#F57B05] px-5 py-2.5 text-sm font-semibold text-[#000100] transition hover:translate-y-[-1px]">
          {section.ctaLabel}
        </Link>
      </div>
    </section>
  );
}

export function ContentPage({ content }: { content: PageContent }) {
  return (
    <div className="pb-20">
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#382A51]/70">{content.eyebrow}</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-[#000100] sm:text-5xl lg:text-6xl">
                {content.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#000100]/72 sm:text-lg">{content.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={content.primaryCta.href} className="rounded-full bg-[#000100] px-6 py-3 text-sm font-semibold text-[#EFE9B8] shadow-lg shadow-black/15 transition hover:-translate-y-0.5 hover:bg-[#382A51]">
                  {content.primaryCta.label}
                </Link>
                {content.secondaryCta ? (
                  <Link href={content.secondaryCta.href} className="rounded-full border border-black/15 bg-white/80 px-6 py-3 text-sm font-semibold text-[#000100] transition hover:-translate-y-0.5 hover:border-black/25">
                    {content.secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            </div>

            <aside className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm shadow-black/5">
              <p className="text-xs uppercase tracking-[0.35em] text-[#382A51]/65">Site ready</p>
              <div className="mt-5 space-y-3">
                <div className="rounded-2xl bg-[#000100] p-4 text-[#EFE9B8]">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#EFE9B8]/60">Structure</p>
                  <p className="mt-1 text-lg font-semibold">Built for CMS content and future systems.</p>
                </div>
                <div className="rounded-2xl border border-black/8 bg-[#f8f4ea] p-4">
                  <p className="text-sm font-semibold">Ready to connect later</p>
                  <p className="mt-1 text-sm leading-7 text-[#000100]/70">Directus, calculator logic, analytics, forms, and booking can all be attached after this foundation is live.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-4 grid max-w-7xl gap-5 px-6 lg:px-8">
        {content.sections.map((section, index) => (
          <SectionBlock key={index} section={section} />
        ))}
      </div>
    </div>
  );
}
