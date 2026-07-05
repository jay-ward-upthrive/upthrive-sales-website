import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { HomepageVisual } from '@/components/homepage-visual';

const audience = ['Insurance agents', 'Agency owners', 'Recruiting teams'];

const offerPillars = [
  {
    title: 'Lead generation',
    text: 'Lead offers across final expense, mortgage protection, IUL, annuity, Medicare, ACA, life, and exclusive demand.',
  },
  {
    title: 'Recruiting',
    text: 'Campaigns and recruiting support for agency growth, 1099 hiring, and cleaner candidate flow.',
  },
  {
    title: 'Appointment setting',
    text: 'Booked-call support that helps turn interest into real sales or recruiting conversations.',
  },
  {
    title: 'Pricing and proof',
    text: 'Pricing visibility, calculator flows, testimonials, and trust content that reduce hesitation.',
  },
];

const faq = [
  {
    question: 'What does Upthrive actually help with?',
    answer:
      'Upthrive helps insurance teams generate more leads, attract better candidates, improve booked-call flow, and make the offer easier to trust.',
  },
  {
    question: 'Is this only for lead generation?',
    answer:
      'No. Lead generation is one major part of the offer, but the system also supports recruiting campaigns, appointment setting, pricing visibility, proof, and trust-building content.',
  },
  {
    question: 'Who is this best for?',
    answer:
      'Insurance agents, agency owners, recruiting teams, and sales leaders who want more pipeline and clearer next steps for buyers or candidates.',
  },
  {
    question: 'Can the system grow later?',
    answer:
      'Yes. The structure is built so services, testimonials, pricing logic, policies, blog posts, and FAQ items can expand over time without starting over.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Upthrive',
  url: 'https://upthrive-solutions.com',
  description:
    'Upthrive helps insurance agents and agency owners generate more leads, attract better candidates, book more conversations, and build more trust with serious buyers.',
  areaServed: 'United States',
  serviceType: ['Insurance lead generation', 'Recruiting campaigns', 'Appointment setting', 'Pricing visibility'],
};

export default function HomePage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="dark-panel border-b border-white/8 text-[#EFE9B8]">
        <div className="section-shell grid min-h-[100dvh] gap-16 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-24">
          <div>
            <Reveal>
              <p className="kicker text-[#EFE9B8]/62">Insurance growth for agents and agencies</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="home-headline mt-4 max-w-[10ch] font-heading text-[#EFE9B8]">
                More leads. Better candidates. More booked calls.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#EFE9B8]/76 sm:text-lg">
                Upthrive helps insurance teams create more pipeline, improve recruiting flow, and make the next sales conversation easier to trust.
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

      <section className="home-section">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div>
              <p className="kicker text-[#382A51]/68">Who it is for</p>
              <h2 className="section-title mt-4 max-w-[9ch] font-heading text-[#000100]">Built for insurance teams that need real growth support.</h2>
              <p className="mt-5 max-w-md text-base leading-8 text-[#000100]/72">
                The offer is structured around the real things teams ask for: better lead flow, stronger recruiting, clearer pricing, more proof, and more real conversations.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {audience.map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <div className="rounded-[24px] border border-black/8 bg-white/88 p-6 shadow-[0_14px_34px_rgba(23,16,5,0.06)]">
                  <p className="font-heading text-[1.8rem] leading-none text-[#000100]">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section border-y border-black/8 bg-white/30">
        <div className="section-shell">
          <Reveal>
            <p className="kicker text-[#382A51]/68">Core offer</p>
            <h2 className="section-title mt-4 max-w-[10ch] font-heading text-[#000100]">A cleaner growth system built around four clear pillars.</h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {offerPillars.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="rounded-[24px] border border-black/8 bg-[#fffdf4] p-7 shadow-[0_14px_34px_rgba(23,16,5,0.06)]">
                  <h3 className="font-heading text-[2rem] leading-none text-[#000100]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#000100]/72">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-shell grid gap-6 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <Reveal>
            <div className="rounded-[28px] border border-black/8 bg-white/88 p-7 shadow-[0_14px_34px_rgba(23,16,5,0.06)] lg:p-9">
              <p className="kicker text-[#382A51]/68">Pricing and proof</p>
              <h2 className="section-title mt-4 max-w-[10ch] font-heading text-[#000100]">Let buyers estimate fit before they disappear.</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#000100]/72">
                Pricing visibility, calculator flows, testimonials, and compliance content all help the next step feel easier to trust.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/lead-calculator" className="cta-primary px-6 py-3 text-sm">
                  Start the calculator
                </Link>
                <Link href="/testimonials" className="light-button px-6 py-3 text-sm">
                  View proof
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[28px] border border-black/8 bg-[#000100] p-7 text-[#EFE9B8] shadow-[0_18px_44px_rgba(0,0,0,0.18)] lg:p-9">
              <p className="kicker text-[#EFE9B8]/56">What makes the offer feel stronger</p>
              <div className="mt-6 grid gap-3">
                {['Clear lead and recruiting routes', 'Estimate flow before a call', 'Proof and policy support', 'Direct next-step CTA'].map((item) => (
                  <div key={item} className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-[#EFE9B8]/76">
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
            <h2 className="section-title mt-4 max-w-[8ch] font-heading text-[#000100]">Clear answers for serious buyers.</h2>
          </Reveal>

          <div className="mt-10 space-y-3">
            {faq.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.03}>
                <details className="rounded-[22px] border border-black/8 bg-white/88 p-5 shadow-[0_14px_34px_rgba(23,16,5,0.06)]">
                  <summary className="cursor-pointer list-none font-heading text-[1.6rem] leading-none text-[#000100]">
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
            <div className="rounded-[30px] border border-white/10 bg-white/6 px-6 py-10 text-center lg:px-10 lg:py-14">
              <p className="kicker text-[#EFE9B8]/58">Final CTA</p>
              <h2 className="mx-auto mt-4 max-w-[10ch] font-heading text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.96]">
                Build more pipeline and make the next call easier to win.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#EFE9B8]/74 sm:text-lg">
                Upthrive is built for insurance teams that want more demand, better recruiting flow, stronger proof, and clearer next steps.
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
