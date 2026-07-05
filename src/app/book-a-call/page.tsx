import { ContactFormPanel } from '@/components/contact-form-panel';
import { Reveal } from '@/components/reveal';

export const metadata = {
  title: 'Book a strategy call',
  description:
    'Book a strategy call with Upthrive to discuss insurance lead generation, recruiting campaigns, pricing visibility, and website conversion goals.',
};

export default function Page() {
  return (
    <div className="pb-20">
      <section className="home-section">
        <div className="section-shell">
          <Reveal>
            <p className="kicker text-[#382A51]/68">Book a strategy call</p>
            <h1 className="mt-4 max-w-4xl font-heading text-[clamp(3rem,5vw,5.4rem)] leading-[0.95] text-[#000100]">
              Move serious visitors into a clearer quote or sales conversation.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#000100]/72 sm:text-lg">
              The booking flow should qualify service interest, business context, budget direction, target states, and what the current site or funnel is failing to do well.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <ContactFormPanel
          title="Use the call request flow to qualify fit before time gets booked."
          intro="This page is where the stronger leads should land after they understand the offer, the pricing direction, and the proof. It is designed to support a cleaner handoff into scheduling later."
          submitLabel="Start the call request"
          helper="A future scheduling embed or calendar step can be added here without redesigning the page structure."
        />
      </section>
    </div>
  );
}
