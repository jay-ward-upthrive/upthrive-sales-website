import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { HomepageVisual } from '@/components/homepage-visual';

const audience = [
  'Insurance agents',
  'Agency owners',
  'Recruiters for insurance teams',
  'Sales managers and marketers in insurance',
];

const serviceCards = [
  {
    title: 'Insurance lead generation',
    text: 'SEO-first service pages and lead funnels that explain the offer fast and move visitors toward inquiry.',
  },
  {
    title: 'Recruiting campaigns',
    text: 'Dedicated recruiting routes for agency owners who need more candidate flow and better-fit applicants.',
  },
  {
    title: 'Appointment setting',
    text: 'Booked-call support pages that connect traffic, follow-up, and stronger conversation flow.',
  },
  {
    title: 'Pricing and calculator flow',
    text: 'Estimate and quote pages that help visitors self-qualify without losing momentum.',
  },
  {
    title: 'Proof and trust-building',
    text: 'Testimonials, screenshot proof, legal pages, and stronger credibility systems across the site.',
  },
  {
    title: 'Blog and resources',
    text: 'Content architecture for SEO topics that support services, internal linking, and future CMS editing.',
  },
];

const pageMap = [
  { title: 'Insurance Leads', href: '/insurance-leads', text: 'Broad lead generation hub with internal routes for final expense, mortgage protection, IUL, annuity, Medicare, ACA, life, and exclusive leads.' },
  { title: 'Recruiting', href: '/insurance-recruiting-leads', text: 'Recruiting hub for agency growth, 1099 recruiting, and recruiting appointment setting pages.' },
  { title: 'Pricing', href: '/pricing', text: 'Pricing visibility and qualification pages that reduce uncertainty and support quote-ready conversations.' },
  { title: 'Resources', href: '/resources', text: 'SEO-ready content structure for blogs, FAQs, trust pages, and future proof or case-study content.' },
];

const faq = [
  {
    question: 'What is Upthrive actually building?',
    answer:
      'A premium SEO-first website system for insurance agents and agency owners, with service pages, recruiting pages, pricing support, trust-building content, legal routes, and future CMS readiness.',
  },
  {
    question: 'Is this only for lead generation?',
    answer:
      'No. Lead generation is one major part of the system, but the site also supports recruiting campaigns, appointment setting, pricing visibility, testimonials, blog content, and trust pages.',
  },
  {
    question: 'Why does the site need so many page types?',
    answer:
      'Because the website is meant to rank, explain multiple offers clearly, support future content growth, and move different kinds of visitors toward the right next step.',
  },
  {
    question: 'Can the site be edited later without a rebuild?',
    answer:
      'Yes. The structure is designed so pages, services, policies, testimonials, blog posts, FAQ items, and calculator rules can be moved into a CMS later.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Upthrive',
  url: 'https://upthrive-solutions.com',
  description:
    'Upthrive builds premium SEO-first websites, lead generation pages, recruiting funnels, pricing flows, and trust systems for insurance agents and agency owners.',
  areaServed: 'United States',
  serviceType: ['Insurance lead generation', 'Insurance recruiting campaigns', 'Appointment setting', 'Pricing and calculator systems'],
};

export default function HomePage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="dark-panel overflow-hidden border-b border-white/8 text-[#EFE9B8]">
        <div className="section-shell grid min-h-[100dvh] gap-14 py-20 lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:py-24">
          <div>
            <Reveal>
              <p className="kicker text-[#EFE9B8]/64">Premium SEO-first insurance growth platform</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="home-headline mt-4 max-w-[11ch] font-heading text-[#EFE9B8]">
                Pages that rank, convert, and book more calls.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#EFE9B8]/78 sm:text-lg">
                Upthrive helps insurance agents and agency owners look more legitimate online, explain services clearly, and turn traffic into lead inquiries, quote requests, and booked conversations.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/book-a-call" className="cta-primary px-6 py-3 text-sm">
                  Book a strategy call
                </Link>
                <Link href="/pricing" className="cta-secondary px-6 py-3 text-sm">
                  View pricing
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <HomepageVisual />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-black/8 bg-[#efe9b8] py-7">
        <div className="section-shell grid gap-3 md:grid-cols-4">
          {['Lead generation', 'Recruiting campaigns', 'Appointment setting', 'Pricing visibility'].map((item) => (
            <div key={item} className="rounded-full border border-black/10 bg-white/55 px-4 py-3 text-center text-sm font-semibold text-[#000100]/76 backdrop-blur-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <div>
              <p className="kicker text-[#382A51]/68">Who it is for</p>
              <h2 className="section-title mt-4 max-w-[10ch] font-heading text-[#000100]">Built for insurance businesses that need more than a brochure site.</h2>
              <p className="mt-5 max-w-md text-base leading-8 text-[#000100]/72">
                The site is meant to support sales and content goals at the same time, so visitors understand the offer quickly and the business can grow without rebuilding the structure later.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {audience.map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <div className="rounded-[30px] border border-black/8 bg-white/72 p-6 shadow-[0_20px_50px_rgba(23,16,5,0.06)] backdrop-blur-xl">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F57B05]/16 text-sm font-bold text-[#000100]">
                    {index + 1}
                  </div>
                  <p className="mt-4 font-heading text-[2rem] leading-none text-[#000100]">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section border-y border-black/8 bg-white/35">
        <div className="section-shell">
          <Reveal>
            <p className="kicker text-[#382A51]/68">Service overview</p>
            <h2 className="section-title mt-4 max-w-[10ch] font-heading text-[#000100]">A sales and content system, not just a homepage redesign.</h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.03}>
                <article className="h-full rounded-[30px] border border-black/8 bg-[#fffdf1] p-6 shadow-[0_20px_50px_rgba(23,16,5,0.06)]">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F57B05]/14 text-sm font-bold text-[#000100]">
                    {index + 1}
                  </div>
                  <h3 className="mt-4 font-heading text-[1.95rem] leading-none text-[#000100]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#000100]/72">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="purple-panel home-section text-[#EFE9B8]">
        <div className="section-shell grid gap-5 lg:grid-cols-[1.06fr_0.94fr]">
          <Reveal>
            <div className="rounded-[34px] border border-white/10 bg-white/6 p-8 backdrop-blur-sm">
              <p className="kicker text-[#EFE9B8]/58">Trust and proof</p>
              <h2 className="mt-4 max-w-[10ch] font-heading text-[clamp(2.8rem,5vw,5rem)] leading-[0.95] text-[#EFE9B8]">
                The site has to look legitimate in under 10 seconds.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#EFE9B8]/76">
                That means stronger hierarchy, cleaner proof blocks, better CTA placement, legal routes, and content structure that feels established instead of improvised.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {[
              'Testimonials, screenshot proof, and future video blocks',
              'Compliance, replacement policy, privacy, terms, and cookie pages',
              'Calculator and pricing routes that reduce uncertainty before a call',
            ].map((item, index) => (
              <Reveal key={item} delay={0.06 + index * 0.04}>
                <div className="rounded-[28px] border border-white/10 bg-white/7 p-6 backdrop-blur-sm">
                  <p className="font-heading text-[2rem] leading-none text-[#EFE9B8]">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-shell">
          <Reveal>
            <p className="kicker text-[#382A51]/68">Core page map</p>
            <h2 className="section-title mt-4 max-w-[10ch] font-heading text-[#000100]">The site needs real depth so visitors can find the right path fast.</h2>
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {pageMap.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <Link href={item.href} className="block rounded-[30px] border border-black/8 bg-white/72 p-6 shadow-[0_20px_50px_rgba(23,16,5,0.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="font-heading text-[2rem] leading-none text-[#000100]">{item.title}</h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#000100]/72">{item.text}</p>
                    </div>
                    <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#382A51]">
                      Open
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section border-y border-black/8 bg-white/35">
        <div className="section-shell grid gap-6 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <Reveal>
            <div>
              <p className="kicker text-[#382A51]/68">Pricing and calculator</p>
              <h2 className="section-title mt-4 max-w-[10ch] font-heading text-[#000100]">Let visitors estimate fit before they disappear.</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#000100]/72">
                A stronger pricing and calculator flow helps buyers qualify themselves, compare options, and move toward a quote or strategy call with less hesitation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/lead-calculator" className="cta-primary px-6 py-3 text-sm">
                  Start the calculator
                </Link>
                <Link href="/pricing" className="light-button px-6 py-3 text-sm">
                  View pricing page
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[34px] border border-black/8 bg-[#000100] p-8 text-[#EFE9B8] shadow-[0_24px_70px_rgba(0,0,0,0.2)]">
              <p className="kicker text-[#EFE9B8]/56">What the flow should support</p>
              <div className="mt-6 grid gap-3">
                {['Lead cost and total estimate', 'Add-ons and volume tiers', 'State and geography inputs', 'Strong CTA into quote or booked call'].map((item) => (
                  <div key={item} className="rounded-[24px] border border-white/10 bg-white/7 px-4 py-4 text-sm leading-7 text-[#EFE9B8]/78">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-section" id="faq">
        <div className="section-shell">
          <Reveal>
            <p className="kicker text-[#382A51]/68">FAQ</p>
            <h2 className="section-title mt-4 max-w-[8ch] font-heading text-[#000100]">The working source of truth, turned into pages.</h2>
          </Reveal>

          <div className="mt-10 space-y-3">
            {faq.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.03}>
                <details className="group rounded-[28px] border border-black/8 bg-white/72 p-5 shadow-[0_18px_40px_rgba(23,16,5,0.05)] backdrop-blur-xl">
                  <summary className="cursor-pointer list-none font-heading text-[1.9rem] leading-none text-[#000100]">
                    {item.question}
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[#000100]/74">{item.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-panel border-t border-white/8 py-20 text-[#EFE9B8]">
        <div className="section-shell">
          <Reveal>
            <div className="rounded-[36px] border border-white/10 bg-white/6 px-6 py-10 text-center backdrop-blur-sm lg:px-10 lg:py-14">
              <p className="kicker text-[#EFE9B8]/58">Final CTA</p>
              <h2 className="mx-auto mt-4 max-w-[11ch] font-heading text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.95]">
                Make Upthrive feel premium, clear, and ready to sell.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#EFE9B8]/76 sm:text-lg">
                If the goal is a premium insurance website that ranks, explains the offer clearly, and drives better conversations, this is the structure built to do it.
              </p>
              <div className="mt-8 flex justify-center gap-3">
                <Link href="/book-a-call" className="cta-primary px-6 py-3 text-sm">
                  Book a strategy call
                </Link>
                <Link href="/contact" className="cta-secondary px-6 py-3 text-sm">
                  Request a quote
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
