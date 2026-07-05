import { ContactFormPanel } from '@/components/contact-form-panel';
import { Reveal } from '@/components/reveal';

export const metadata = {
  title: 'Contact Upthrive',
  description:
    'Contact Upthrive to request pricing, explain your current insurance marketing needs, and move into the right sales conversation.',
};

export default function Page() {
  return (
    <div className="pb-20">
      <section className="home-section">
        <div className="section-shell">
          <Reveal>
            <p className="kicker text-[#382A51]/68">Contact</p>
            <h1 className="mt-4 max-w-4xl font-heading text-[clamp(3rem,5vw,5.4rem)] leading-[0.95] text-[#000100]">
              A contact path built for real insurance growth conversations.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#000100]/72 sm:text-lg">
              This page is designed to collect the context Upthrive needs to route the visitor into the right next step, whether that is leads, recruiting, appointment setting, pricing, or a full website build.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <ContactFormPanel
          title="Share what you need, what is not working, and where the site should improve."
          intro="The form structure is ready for future CRM connection, analytics, source tracking, and automation. For now, it shows the exact kind of lead-capture fields the website is designed to support."
          submitLabel="Submit inquiry"
          helper="This form is structured for future CRM and automation handoff. The visible fields map directly to the FRD requirements for lead capture."
        />
      </section>
    </div>
  );
}
