import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { LeadCalculatorExperience } from '@/components/lead-calculator-experience';

export const metadata = {
  title: 'Pricing pages and calculator flow for insurance growth',
  description:
    'Upthrive pricing is designed to help insurance agents and agency owners estimate fit, compare options, and move toward a quote or strategy call.',
};

export default function Page() {
  return (
    <div className="pb-20">
      <section className="home-section">
        <div className="section-shell">
          <Reveal>
            <p className="kicker text-[#382A51]/68">Pricing and estimate flow</p>
            <h1 className="mt-4 max-w-4xl font-heading text-[clamp(3rem,5vw,5.4rem)] leading-[0.95] text-[#000100]">
              Pricing should reduce uncertainty, not force visitors to guess.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#000100]/72 sm:text-lg">
              Upthrive uses pricing pages and calculator flows to help insurance buyers self-qualify, understand the service shape, and move toward a better conversation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/lead-calculator" className="cta-primary px-6 py-3 text-sm">
                Open the calculator
              </Link>
              <Link href="/book-a-call" className="light-button px-6 py-3 text-sm">
                Book a strategy call
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {[
              ['Lead type', 'Insurance leads, recruiting, and appointment-setting services all scope differently.'],
              ['Volume', 'Monthly quantity and routing complexity can shift pricing fast.'],
              ['Geography', 'State selection, multi-state support, and national reach change the workload.'],
              ['Add-ons', 'Proof systems, analytics, CMS layers, and follow-up logic affect final scope.'],
            ].map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.04}>
                <div className="h-full rounded-[28px] border border-black/8 bg-white/72 p-6 shadow-[0_20px_50px_rgba(23,16,5,0.06)] backdrop-blur-xl">
                  <p className="font-heading text-[1.9rem] leading-none text-[#000100]">{title}</p>
                  <p className="mt-3 text-sm leading-7 text-[#000100]/72">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <LeadCalculatorExperience />
      </section>
    </div>
  );
}
