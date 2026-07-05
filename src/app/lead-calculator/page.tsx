import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { LeadCalculatorExperience } from '@/components/lead-calculator-experience';

export const metadata = {
  title: 'Lead calculator and pricing estimate',
  description:
    'A mobile-friendly calculator that helps insurance visitors estimate cost, compare options, and move toward a quote or booked call.',
};

export default function Page() {
  return (
    <div className="pb-20">
      <section className="home-section">
        <div className="section-shell">
          <Reveal>
            <p className="kicker text-[#382A51]/68">Calculator</p>
            <h1 className="mt-4 max-w-4xl font-heading text-[clamp(3rem,5vw,5.4rem)] leading-[0.95] text-[#000100]">
              Estimate cost, compare service shape, and keep the next step moving.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#000100]/72 sm:text-lg">
              This calculator is designed to support pricing visibility for insurance leads, recruiting campaigns, and appointment-setting work without turning the experience into a cramped form.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <LeadCalculatorExperience />
      </section>

      <section className="home-section">
        <div className="section-shell grid gap-4 lg:grid-cols-3">
          {[
            ['Mobile-friendly layout', 'The calculator is meant to stay readable on phones and keep the estimate visible.'],
            ['Tracking readiness', 'The flow is structured so calculator starts, selections, and CTA clicks can be tracked later.'],
            ['Quote-ready CTA', 'Once visitors understand the estimate, they should be able to book a call or request a quote immediately.'],
          ].map(([title, text], index) => (
            <Reveal key={title} delay={index * 0.04}>
              <div className="h-full rounded-[28px] border border-black/8 bg-white/72 p-6 shadow-[0_20px_50px_rgba(23,16,5,0.06)] backdrop-blur-xl">
                <p className="font-heading text-[1.9rem] leading-none text-[#000100]">{title}</p>
                <p className="mt-3 text-sm leading-7 text-[#000100]/72">{text}</p>
              </div>
            </Reveal>
          ))}
          <Reveal className="lg:col-span-3">
            <div className="mt-2 flex flex-wrap gap-3">
              <Link href="/book-a-call" className="cta-primary px-6 py-3 text-sm">
                Book a strategy call
              </Link>
              <Link href="/contact" className="light-button px-6 py-3 text-sm">
                Request a quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
