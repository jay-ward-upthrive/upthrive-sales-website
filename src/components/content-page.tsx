import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { PageContent, PageSection } from '@/data/pages';

function SectionBlock({ section }: { section: PageSection }) {
  if (section.kind === 'cards') {
    return (
      <Reveal>
        <section className="rounded-[32px] border border-black/8 bg-white/72 p-6 shadow-[0_20px_60px_rgba(23,16,5,0.08)] backdrop-blur-xl lg:p-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-4xl leading-none text-[#000100] md:text-5xl">{section.title}</h2>
            {section.description ? <p className="mt-3 max-w-2xl text-base leading-8 text-[#000100]/72">{section.description}</p> : null}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {section.items.map((item) => (
              <article key={item.title} className="rounded-[26px] border border-black/8 bg-[#fffdf1] p-5 shadow-[0_18px_40px_rgba(23,16,5,0.05)]">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F57B05]/14 text-sm font-bold text-[#000100]">
                  {item.title.slice(0, 1)}
                </div>
                <h3 className="mt-4 font-heading text-[1.85rem] leading-none text-[#000100]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#000100]/72">{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>
    );
  }

  if (section.kind === 'list') {
    return (
      <Reveal>
        <section className="rounded-[32px] border border-black/8 bg-white/72 p-6 shadow-[0_20px_60px_rgba(23,16,5,0.08)] backdrop-blur-xl lg:p-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-4xl leading-none text-[#000100] md:text-5xl">{section.title}</h2>
            {section.description ? <p className="mt-3 max-w-2xl text-base leading-8 text-[#000100]/72">{section.description}</p> : null}
          </div>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {section.items.map((item, index) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-[24px] border border-black/8 bg-[#fffdf1] px-5 py-4 text-sm leading-7 text-[#000100]/78 shadow-[0_16px_36px_rgba(23,16,5,0.04)]"
              >
                <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#02694c] text-xs font-bold text-[#EFE9B8]">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>
    );
  }

  if (section.kind === 'faq') {
    return (
      <Reveal>
        <section className="rounded-[32px] border border-black/8 bg-white/72 p-6 shadow-[0_20px_60px_rgba(23,16,5,0.08)] backdrop-blur-xl lg:p-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-4xl leading-none text-[#000100] md:text-5xl">{section.title}</h2>
            {section.description ? <p className="mt-3 max-w-2xl text-base leading-8 text-[#000100]/72">{section.description}</p> : null}
          </div>
          <div className="mt-8 space-y-3">
            {section.items.map((item) => (
              <details key={item.question} className="group rounded-[24px] border border-black/8 bg-[#fffdf1] p-5 shadow-[0_16px_36px_rgba(23,16,5,0.04)]">
                <summary className="cursor-pointer list-none font-heading text-[1.7rem] leading-none text-[#000100]">
                  {item.question}
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#000100]/74">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <section className="rounded-[32px] border border-white/10 bg-[#000100] p-6 text-[#EFE9B8] shadow-[0_24px_70px_rgba(0,0,0,0.22)] lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h2 className="max-w-3xl font-heading text-4xl leading-none md:text-5xl">{section.title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#EFE9B8]/76">{section.description}</p>
          </div>
          <div className="flex items-end justify-start lg:justify-end">
            <Link href={section.ctaHref} className="cta-primary px-5 py-3 text-sm">
              {section.ctaLabel}
            </Link>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export function ContentPage({ content }: { content: PageContent }) {
  return (
    <div className="pb-20">
      <section className="home-section">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
            <Reveal>
              <div>
                <p className="kicker text-[#382A51]/72">{content.eyebrow}</p>
                <h1 className="mt-4 max-w-4xl font-heading text-[clamp(3.15rem,6vw,5.8rem)] leading-[0.94] text-[#000100]">
                  {content.title}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#000100]/72 sm:text-lg">{content.summary}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={content.primaryCta.href} className="cta-primary px-6 py-3 text-sm">
                    {content.primaryCta.label}
                  </Link>
                  {content.secondaryCta ? (
                    <Link href={content.secondaryCta.href} className="light-button px-6 py-3 text-sm">
                      {content.secondaryCta.label}
                    </Link>
                  ) : null}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <aside className="rounded-[32px] border border-black/8 bg-white/72 p-6 shadow-[0_20px_60px_rgba(23,16,5,0.08)] backdrop-blur-xl lg:p-8">
                <p className="kicker text-[#382A51]/62">Sales system lens</p>
                <div className="mt-6 grid gap-4">
                  <div className="rounded-[24px] bg-[#000100] p-5 text-[#EFE9B8]">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#EFE9B8]/58">Core shift</p>
                    <p className="mt-2 font-heading text-3xl leading-none">From web presence to trust engine</p>
                  </div>
                  <div className="rounded-[24px] border border-black/8 bg-[#fffdf1] p-5">
                    <p className="text-sm leading-7 text-[#000100]/74">
                      Every page should support credibility, reduce hesitation, and make the next step feel easier to trust.
                    </p>
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="section-shell grid gap-5">
        {content.sections.map((section, index) => (
          <SectionBlock key={index} section={section} />
        ))}
      </div>
    </div>
  );
}
