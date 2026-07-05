import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { HomepageVisual } from '@/components/homepage-visual';

const proofItems = [
  'Insurance lead generation',
  'Recruiting campaigns',
  'Appointment setting',
  'Pricing visibility',
];

const offerRows = [
  {
    title: 'Lead generation',
    text: 'Lead offers across final expense, mortgage protection, IUL, annuity, Medicare, ACA, life, and exclusive demand.',
  },
  {
    title: 'Recruiting',
    text: 'Campaigns and recruiting support for agency growth, 1099 hiring, and better candidate flow.',
  },
  {
    title: 'Booked calls',
    text: 'Appointment-setting support that helps turn interest into real sales or recruiting conversations.',
  },
  {
    title: 'Pricing and proof',
    text: 'Estimate flows, testimonials, compliance support, and trust content that reduce hesitation.',
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
      'No. Lead generation is a major part of the offer, but the system also supports recruiting campaigns, appointment setting, pricing visibility, proof, and trust-building content.',
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

      <section className="dark-panel border-b border-white/8 text-[#efe9b8]">
        <div className="section-shell grid min-h-[100dvh] gap-16 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-24">
          <div>
            <Reveal>
              <p className="kicker text-[#efe9b8]/62">Insurance growth for agents and agencies</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="home-headline mt-4 max-w-[9ch] font-heading text-[#efe9b8]">
                More leads. Better candidates. More booked calls.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#efe9b8]/76 sm:text-lg">
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
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-2 text-sm text-[#efe9b8]/72">
                {proofItems.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 px-3 py-1.5">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <HomepageVisual />
          </Reveal>
        </div>
      </section>

      <section className="home-section">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div>
              <p className="kicker text-[#382a51]/68">What Upthrive helps move</p>
              <h2 className="section-title mt-4 max-w-[8ch] font-heading text-[#111111]">Built for insurance teams that need real growth support.</h2>
              <p className="mt-5 max-w-md text-base leading-8 text-[#111111]/72">
                The offer is structured around the real things teams ask for: better lead flow, stronger recruiting, clearer pricing, more proof, and more real conversations.
              </p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {offerRows.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="surface-card rounded-[24px] px-6 py-6 lg:px-7">
                  <div className="grid gap-2 lg:grid-cols-[220px_1fr] lg:items-start">
                    <h3 className="font-heading text-[2rem] leading-none text-[#111111]">{item.title}</h3>
                    <p className="text-sm leading-7 text-[#111111]/72">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section border-y border-black/8 bg-white/28">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <Reveal>
            <div className="surface-card-strong rounded-[28px] px-7 py-8 lg:px-9 lg:py-10">
              <p className="kicker text-[#382a51]/68">Pricing and proof</p>
              <h2 className="section-title mt-4 max-w-[8ch] font-heading text-[#111111]">Let buyers estimate fit before they disappear.</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#111111]/72">
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
            <div className="rounded-[28px] border border-black/8 bg-[#111111] px-7 py-8 text-[#efe9b8] shadow-[0_20px_50px_rgba(17,17,17,0.16)] lg:px-9 lg:py-10">
              <p className="kicker text-[#efe9b8]/58">What makes the offer feel stronger</p>
              <div className="mt-6 space-y-3">
                {['Clear lead and recruiting routes', 'Estimate flow before a call', 'Proof and policy support', 'Direct next-step CTA'].map((item) => (
                  <div key={item} className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-[#efe9b8]/76">
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
            <p className="kicker text-[#382a51]/68">FAQ</p>
            <h2 className="section-title mt-4 max-w-[7ch] font-heading text-[#111111]">Clear answers for serious buyers.</h2>
          </Reveal>

          <div className="mt-10 space-y-3">
            {faq.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.03}>
                <details className="surface-card rounded-[22px] px-5 py-5">
                  <summary className="cursor-pointer list-none font-heading text-[1.6rem] leading-none text-[#111111]">
                    {item.question}
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[#111111]/74">{item.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-panel border-t border-white/8 py-20 text-[#efe9b8]">
        <div className="section-shell">
          <Reveal>
            <div className="rounded-[30px] border border-white/10 bg-white/6 px-6 py-10 text-center lg:px-10 lg:py-14">
              <p className="kicker text-[#efe9b8]/58">Final CTA</p>
              <h2 className="mx-auto mt-4 max-w-[9ch] font-heading text-[clamp(2.8rem,5vw,4.9rem)] leading-[0.95]">
                Build more pipeline and make the next call easier to win.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#efe9b8]/74 sm:text-lg">
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
