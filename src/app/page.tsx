import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { HomepageVisual } from '@/components/homepage-visual';

const services = [
  {
    title: 'Website strategy',
    text: 'Messaging, structure, and offer clarity built for insurance buyers who need a reason to trust the next step.',
  },
  {
    title: 'Design that sells',
    text: 'Premium layouts, clean hierarchy, and stronger first impressions that make your agency look established online.',
  },
  {
    title: 'Conversion systems',
    text: 'Calls to action, section flow, and booking paths designed to move visitors toward a real conversation.',
  },
  {
    title: 'Lead capture and follow-up',
    text: 'Forms, routing, thank-you states, and next-step logic that reduce drop-off after someone is ready to act.',
  },
  {
    title: 'SEO support',
    text: 'Search visibility that supports the sales system instead of pretending to be the whole business model.',
  },
];

const problemCards = [
  {
    title: 'Weak first impression',
    text: 'The site feels generic, outdated, or too similar to every other insurance page online.',
    tone: 'bg-[#fff6f3] border-[#DB3D4D]/20',
  },
  {
    title: 'Trust breaks early',
    text: 'Visitors do not get enough proof, clarity, or professional signal to feel good about reaching out.',
    tone: 'bg-[#fff9eb] border-[#F57B05]/20',
  },
  {
    title: 'Calls get lost',
    text: 'The next step feels unclear, the CTA is weak, or the conversion path creates friction instead of momentum.',
    tone: 'bg-[#f5fbf8] border-[#02694C]/20',
  },
];

const solutionCards = [
  {
    title: 'Trust fast',
    text: 'Clear positioning, stronger proof, and a better first impression above the fold.',
  },
  {
    title: 'Capture demand',
    text: 'Conversion structure that turns attention into real lead intent instead of passive browsing.',
  },
  {
    title: 'Book more calls',
    text: 'A cleaner path from page visit to contact, booking, and follow-up.',
  },
];

const process = [
  'Audit the current site',
  'Clarify the message',
  'Design the conversion path',
  'Launch the system',
  'Improve with real data',
];

const faq = [
  {
    question: 'Do you only work with insurance agents?',
    answer:
      'That is the focus. The site, message, and conversion system are all built around how insurance businesses earn trust and book more conversations.',
  },
  {
    question: 'Is this just SEO?',
    answer:
      'No. SEO can support the system, but Upthrive is positioned around sales-focused websites, trust building, and conversion.',
  },
  {
    question: 'Can you improve an existing site?',
    answer:
      'Yes. If the current website already has traffic but is not creating enough confidence or action, Upthrive can rebuild the message, structure, and conversion flow.',
  },
  {
    question: 'Do you help with lead capture and follow-up?',
    answer:
      'Yes. The website does not stop at the form. The handoff, thank-you state, routing, and next-step experience all matter.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'Timing depends on scope, but the work always starts with the trust and conversion priorities that matter most to the sales outcome.',
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="dark-panel overflow-hidden border-b border-white/8 text-[#EFE9B8]">
        <div className="section-shell grid min-h-[100dvh] gap-14 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-24">
          <div>
            <Reveal>
              <p className="kicker text-[#EFE9B8]/64">Sales-focused marketing for insurance agents</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="home-headline mt-4 max-w-[10.5ch] font-heading text-[#EFE9B8]">
                Websites that turn insurance traffic into booked calls.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#EFE9B8]/78 sm:text-lg">
                Upthrive helps insurance agents look credible, earn trust fast, and convert visitors into real sales conversations.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/book-a-call" className="cta-primary px-6 py-3 text-sm">
                  Book a strategy call
                </Link>
                <Link href="/#process" className="cta-secondary px-6 py-3 text-sm">
                  See how it works
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
          {['Clear positioning', 'Professional trust signals', 'Better lead paths', 'More booked calls'].map((item) => (
            <div key={item} className="rounded-full border border-black/10 bg-white/55 px-4 py-3 text-center text-sm font-semibold text-[#000100]/76 backdrop-blur-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="kicker text-[#382A51]/68">The problem</p>
              <h2 className="section-title mt-4 max-w-[10ch] font-heading text-[#000100]">Most insurance websites get seen, then ignored.</h2>
              <p className="mt-5 max-w-md text-base leading-8 text-[#000100]/72">
                They look generic, feel hard to trust, and give people no strong reason to take the next step.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {problemCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className={`rounded-[30px] border p-6 shadow-[0_20px_50px_rgba(23,16,5,0.06)] ${item.tone}`}>
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="font-heading text-[2.1rem] leading-none text-[#000100]">{item.title}</p>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#000100]/72">{item.text}</p>
                    </div>
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#000100] text-sm font-bold text-[#EFE9B8]">
                      {index + 1}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="purple-panel home-section text-[#EFE9B8]" id="solution">
        <div className="section-shell">
          <Reveal>
            <p className="kicker text-[#EFE9B8]/58">The solution</p>
            <h2 className="section-title mt-4 max-w-[10ch] font-heading text-[#EFE9B8]">Your website should do more than exist.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#EFE9B8]/76">
              It should build trust, guide the next step, and turn attention into conversations.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {solutionCards.map((item, index) => (
              <Reveal key={item.title} delay={0.06 + index * 0.05}>
                <article className="rounded-[28px] border border-white/10 bg-white/7 p-6 backdrop-blur-sm">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F57B05] text-sm font-bold text-[#000100]">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 font-heading text-[2rem] leading-none text-[#EFE9B8]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#EFE9B8]/76">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section" id="services">
        <div className="section-shell">
          <Reveal>
            <p className="kicker text-[#382A51]/68">Services</p>
            <h2 className="section-title mt-4 max-w-[11ch] font-heading text-[#000100]">Built for leads, trust, and conversion.</h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
            <Reveal className="xl:col-span-2">
              <div className="flex h-full flex-col justify-between rounded-[30px] border border-black/8 bg-[#fffdf1] p-6 shadow-[0_20px_50px_rgba(23,16,5,0.06)]">
                <div>
                  <p className="kicker text-[#382A51]/58">Upthrive offer</p>
                  <h3 className="mt-4 max-w-[9ch] font-heading text-[2.8rem] leading-[0.94] text-[#000100]">
                    A website that works like a sales system.
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-7 text-[#000100]/72">
                  Everything below supports one job: help insurance visitors trust you faster and book the call more often.
                </p>
              </div>
            </Reveal>

            {services.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04} className={index === 0 ? 'xl:col-span-2' : index === 3 ? 'xl:col-span-2' : 'xl:col-span-1'}>
                <article className="h-full rounded-[30px] border border-black/8 bg-white/72 p-6 shadow-[0_20px_50px_rgba(23,16,5,0.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-1">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F57B05]/14 text-sm font-bold text-[#000100]">
                    {index + 1}
                  </div>
                  <h3 className="mt-4 font-heading text-[1.9rem] leading-none text-[#000100]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#000100]/72">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section border-y border-black/8 bg-white/35" id="process">
        <div className="section-shell">
          <Reveal>
            <p className="kicker text-[#382A51]/68">Process</p>
            <h2 className="section-title mt-4 max-w-[10ch] font-heading text-[#000100]">Simple process. Sales-first outcome.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#000100]/72">
              Every step is focused on trust, lead quality, and booked calls.
            </p>
          </Reveal>

          <div className="relative mt-12 grid gap-4 lg:grid-cols-5">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-black/10 lg:block" />
            {process.map((step, index) => (
              <Reveal key={step} delay={index * 0.05}>
                <div className="relative rounded-[28px] border border-black/8 bg-[#fffdf1] p-5 shadow-[0_18px_40px_rgba(23,16,5,0.05)]">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F57B05] text-sm font-bold text-[#000100]">
                    {index + 1}
                  </div>
                  <p className="mt-5 font-heading text-[1.8rem] leading-none text-[#000100]">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section" id="proof">
        <div className="section-shell grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="rounded-[34px] border border-black/8 bg-[#000100] p-8 text-[#EFE9B8] shadow-[0_24px_70px_rgba(0,0,0,0.2)]">
              <p className="kicker text-[#EFE9B8]/56">Proof</p>
              <h2 className="mt-4 max-w-[9ch] font-heading text-[clamp(2.7rem,5vw,5rem)] leading-[0.95]">Built to earn trust before the first call.</h2>
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                <div className="rounded-[24px] border border-white/10 bg-white/7 p-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#EFE9B8]/56">What buyers feel</p>
                  <p className="mt-2 font-heading text-[2.8rem] leading-none">More confidence</p>
                  <p className="mt-3 text-sm leading-7 text-[#EFE9B8]/76">The agency looks sharper, clearer, and more established online.</p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/7 p-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#EFE9B8]/56">What the site does</p>
                  <p className="mt-2 font-heading text-[2.8rem] leading-none">More action</p>
                  <p className="mt-3 text-sm leading-7 text-[#EFE9B8]/76">Traffic moves toward cleaner forms, stronger trust, and better booked calls.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            <Reveal delay={0.05}>
              <article className="rounded-[30px] border border-black/8 bg-white/72 p-6 shadow-[0_20px_50px_rgba(23,16,5,0.06)] backdrop-blur-xl">
                <p className="font-heading text-[2rem] leading-none text-[#000100]">“The site finally feels like it matches how we want to sell.”</p>
                <p className="mt-4 text-sm leading-7 text-[#000100]/72">
                  Stronger structure and a clearer path to contact made the brand feel more credible from the first click.
                </p>
                <p className="mt-5 text-sm font-semibold text-[#382A51]">Agency owner</p>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="rounded-[30px] border border-black/8 bg-[#fffdf1] p-6 shadow-[0_20px_50px_rgba(23,16,5,0.06)]">
                <p className="font-heading text-[2rem] leading-none text-[#000100]">“It feels easier for serious prospects to trust the next step.”</p>
                <p className="mt-4 text-sm leading-7 text-[#000100]/72">
                  The message, proof, and calls to action work together instead of competing with each other.
                </p>
                <p className="mt-5 text-sm font-semibold text-[#02694C]">Sales-focused insurance team</p>
              </article>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="grid gap-3 rounded-[30px] border border-black/8 bg-white/72 p-5 shadow-[0_20px_50px_rgba(23,16,5,0.06)] backdrop-blur-xl sm:grid-cols-3">
                {['Professional first impression', 'Clear conversion path', 'Trust built above the fold'].map((item) => (
                  <div key={item} className="rounded-[22px] border border-black/8 bg-[#fffdf1] px-4 py-4 text-sm font-semibold text-[#000100]/76">
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="home-section" id="faq">
        <div className="section-shell">
          <Reveal>
            <p className="kicker text-[#382A51]/68">FAQ</p>
            <h2 className="section-title mt-4 max-w-[7ch] font-heading text-[#000100]">Short answers. Clear fit.</h2>
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
              <p className="kicker text-[#EFE9B8]/58">Final call</p>
              <h2 className="mx-auto mt-4 max-w-[11ch] font-heading text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.95]">
                Turn your website into a better sales conversation.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#EFE9B8]/76 sm:text-lg">
                If your site is getting attention but not enough calls, Upthrive can fix the gap.
              </p>
              <div className="mt-8 flex justify-center">
                <Link href="/book-a-call" className="cta-primary px-6 py-3 text-sm">
                  Book a strategy call
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
