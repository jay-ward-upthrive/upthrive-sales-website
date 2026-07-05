import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { PageContent, PageSection } from '@/data/pages';

function SectionBlock({ section }: { section: PageSection }) {
  if (section.kind === 'cards') {
    return (
      <Reveal>
        <section className="surface-card-strong rounded-[26px] px-7 py-8 lg:px-9 lg:py-10">
          <div className="max-w-3xl">
            <h2 className="font-heading text-4xl leading-none text-[#111111] md:text-5xl">{section.title}</h2>
            {section.description ? <p className="mt-4 max-w-2xl text-base leading-8 text-[#111111]/70">{section.description}</p> : null}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {section.items.map((item) => (
              <article key={item.title} className="rounded-[20px] border border-black/8 bg-[#fffdf4] px-5 py-5">
                <h3 className="font-heading text-[1.75rem] leading-none text-[#111111]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#111111]/72">{item.text}</p>
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
        <section className="surface-card-strong rounded-[26px] px-7 py-8 lg:px-9 lg:py-10">
          <div className="max-w-3xl">
            <h2 className="font-heading text-4xl leading-none text-[#111111] md:text-5xl">{section.title}</h2>
            {section.description ? <p className="mt-4 max-w-2xl text-base leading-8 text-[#111111]/70">{section.description}</p> : null}
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {section.items.map((item) => (
              <li key={item} className="rounded-[20px] border border-black/8 bg-[#fffdf4] px-5 py-4 text-sm leading-7 text-[#111111]/76">
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
        <section className="surface-card-strong rounded-[26px] px-7 py-8 lg:px-9 lg:py-10">
          <div className="max-w-3xl">
            <h2 className="font-heading text-4xl leading-none text-[#111111] md:text-5xl">{section.title}</h2>
            {section.description ? <p className="mt-4 max-w-2xl text-base leading-8 text-[#111111]/70">{section.description}</p> : null}
          </div>
          <div className="mt-10 space-y-3">
            {section.items.map((item) => (
              <details key={item.question} className="rounded-[20px] border border-black/8 bg-[#fffdf4] px-5 py-5">
                <summary className="cursor-pointer list-none font-heading text-[1.55rem] leading-none text-[#111111]">
                  {item.question}
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#111111]/74">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <section className="rounded-[26px] border border-white/10 bg-[#111111] px-7 py-8 text-[#efe9b8] shadow-[0_20px_50px_rgba(17,17,17,0.16)] lg:px-9 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h2 className="max-w-3xl font-heading text-4xl leading-none md:text-5xl">{section.title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#efe9b8]/74">{section.description}</p>
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
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-end">
          <Reveal>
            <div>
              <p className="kicker text-[#382a51]/68">{content.eyebrow}</p>
              <h1 className="mt-4 max-w-4xl font-heading text-[clamp(3rem,5.2vw,5rem)] leading-[0.95] text-[#111111]">
                {content.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#111111]/72 sm:text-lg">{content.summary}</p>
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
            <aside className="surface-card-strong rounded-[26px] px-7 py-8 lg:px-9 lg:py-10">
              <p className="kicker text-[#382a51]/62">How this page helps</p>
              <div className="mt-6 space-y-4">
                <div className="rounded-[20px] bg-[#111111] px-5 py-5 text-[#efe9b8]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#efe9b8]/58">Primary job</p>
                  <p className="mt-2 font-heading text-[2rem] leading-none">Clarify the offer and make the next step easier.</p>
                </div>
                <div className="rounded-[20px] border border-black/8 bg-[#fffdf4] px-5 py-5">
                  <p className="text-sm leading-7 text-[#111111]/72">
                    Each page should answer fit, trust, and next-step questions quickly without crowding the reader.
                  </p>
                </div>
              </div>
            </aside>
          </Reveal>
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
