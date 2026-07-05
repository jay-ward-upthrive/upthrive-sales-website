import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { PageContent, PageSection } from '@/data/pages';

function SectionBlock({ section }: { section: PageSection }) {
  if (section.kind === 'cards') {
    return (
      <Reveal>
        <section className="rounded-[28px] border border-black/8 bg-white/88 p-7 shadow-[0_14px_34px_rgba(23,16,5,0.06)] lg:p-9">
          <div className="max-w-3xl">
            <h2 className="font-heading text-4xl leading-none text-[#000100] md:text-5xl">{section.title}</h2>
            {section.description ? <p className="mt-4 max-w-2xl text-base leading-8 text-[#000100]/70">{section.description}</p> : null}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {section.items.map((item) => (
              <article key={item.title} className="rounded-[22px] border border-black/8 bg-[#fffdf4] p-6">
                <h3 className="font-heading text-[1.8rem] leading-none text-[#000100]">{item.title}</h3>
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
        <section className="rounded-[28px] border border-black/8 bg-white/88 p-7 shadow-[0_14px_34px_rgba(23,16,5,0.06)] lg:p-9">
          <div className="max-w-3xl">
            <h2 className="font-heading text-4xl leading-none text-[#000100] md:text-5xl">{section.title}</h2>
            {section.description ? <p className="mt-4 max-w-2xl text-base leading-8 text-[#000100]/70">{section.description}</p> : null}
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {section.items.map((item) => (
              <li key={item} className="rounded-[22px] border border-black/8 bg-[#fffdf4] px-5 py-4 text-sm leading-7 text-[#000100]/76">
                {item}
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
        <section className="rounded-[28px] border border-black/8 bg-white/88 p-7 shadow-[0_14px_34px_rgba(23,16,5,0.06)] lg:p-9">
          <div className="max-w-3xl">
            <h2 className="font-heading text-4xl leading-none text-[#000100] md:text-5xl">{section.title}</h2>
            {section.description ? <p className="mt-4 max-w-2xl text-base leading-8 text-[#000100]/70">{section.description}</p> : null}
          </div>
          <div className="mt-10 space-y-3">
            {section.items.map((item) => (
              <details key={item.question} className="rounded-[22px] border border-black/8 bg-[#fffdf4] p-5">
                <summary className="cursor-pointer list-none font-heading text-[1.6rem] leading-none text-[#000100]">
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
      <section className="rounded-[28px] border border-white/10 bg-[#000100] p-7 text-[#EFE9B8] shadow-[0_18px_44px_rgba(0,0,0,0.18)] lg:p-9">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h2 className="max-w-3xl font-heading text-4xl leading-none md:text-5xl">{section.title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#EFE9B8]/74">{section.description}</p>
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
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <Reveal>
              <div>
                <p className="kicker text-[#382A51]/72">{content.eyebrow}</p>
                <h1 className="mt-4 max-w-4xl font-heading text-[clamp(3rem,5.4vw,5.2rem)] leading-[0.96] text-[#000100]">
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
              <aside className="rounded-[28px] border border-black/8 bg-white/88 p-7 shadow-[0_14px_34px_rgba(23,16,5,0.06)] lg:p-8">
                <p className="kicker text-[#382A51]/62">How this page helps</p>
                <div className="mt-5 space-y-4">
                  <div className="rounded-[22px] bg-[#000100] p-5 text-[#EFE9B8]">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#EFE9B8]/56">Primary job</p>
                    <p className="mt-2 font-heading text-3xl leading-none">Clarify the offer and make the next step easier.</p>
                  </div>
                  <div className="rounded-[22px] border border-black/8 bg-[#fffdf4] p-5">
                    <p className="text-sm leading-7 text-[#000100]/72">
                      Each page should answer fit, trust, and next-step questions quickly without overwhelming the visitor.
                    </p>
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="section-shell grid gap-6">
        {content.sections.map((section, index) => (
          <SectionBlock key={index} section={section} />
        ))}
      </div>
    </div>
  );
}
