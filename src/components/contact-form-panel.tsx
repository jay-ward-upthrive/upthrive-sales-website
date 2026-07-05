import Link from 'next/link';

type ContactFormPanelProps = {
  title: string;
  intro: string;
  submitLabel: string;
  helper: string;
};

export function ContactFormPanel({ title, intro, submitLabel, helper }: ContactFormPanelProps) {
  return (
    <section className="grid gap-8 lg:grid-cols-[1fr_0.88fr] lg:items-start">
      <div className="surface-card-strong rounded-[26px] px-7 py-8 lg:px-9 lg:py-10">
        <p className="kicker text-[#382a51]/68">Lead capture</p>
        <h2 className="mt-4 font-heading text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.98] text-[#111111]">{title}</h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[#111111]/72">{intro}</p>

        <form className="mt-8 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[#111111]">Name</span>
              <input type="text" className="rounded-[16px] border border-black/10 bg-[#fffdf4] px-4 py-3 text-sm text-[#111111]" placeholder="Your name" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[#111111]">Email</span>
              <input type="email" className="rounded-[16px] border border-black/10 bg-[#fffdf4] px-4 py-3 text-sm text-[#111111]" placeholder="you@agency.com" />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[#111111]">Phone</span>
              <input type="tel" className="rounded-[16px] border border-black/10 bg-[#fffdf4] px-4 py-3 text-sm text-[#111111]" placeholder="Best number" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[#111111]">Agency name</span>
              <input type="text" className="rounded-[16px] border border-black/10 bg-[#fffdf4] px-4 py-3 text-sm text-[#111111]" placeholder="Agency or company" />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[#111111]">Service interest</span>
              <select className="rounded-[16px] border border-black/10 bg-[#fffdf4] px-4 py-3 text-sm text-[#111111]">
                <option>Insurance leads</option>
                <option>Recruiting campaigns</option>
                <option>Appointment setting</option>
                <option>Pricing and calculator</option>
                <option>Proof and trust support</option>
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[#111111]">Budget range</span>
              <select className="rounded-[16px] border border-black/10 bg-[#fffdf4] px-4 py-3 text-sm text-[#111111]">
                <option>Not sure yet</option>
                <option>Under $2,500</option>
                <option>$2,500 to $5,000</option>
                <option>$5,000 to $10,000</option>
                <option>$10,000+</option>
              </select>
            </label>
          </div>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[#111111]">Target states</span>
            <input type="text" className="rounded-[16px] border border-black/10 bg-[#fffdf4] px-4 py-3 text-sm text-[#111111]" placeholder="Example: Texas, Florida, Georgia" />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[#111111]">Notes and pain points</span>
            <textarea className="min-h-36 rounded-[16px] border border-black/10 bg-[#fffdf4] px-4 py-3 text-sm text-[#111111]" placeholder="What is not working today, what you want more of, and what the next step needs to support" />
          </label>

          <div className="flex flex-wrap gap-3 pt-2">
            <button type="button" className="cta-primary px-5 py-3 text-sm">
              {submitLabel}
            </button>
            <Link href="/pricing" className="light-button px-5 py-3 text-sm">
              View pricing
            </Link>
          </div>
          <p className="text-sm leading-7 text-[#111111]/68">{helper}</p>
        </form>
      </div>

      <aside className="rounded-[26px] border border-black/8 bg-[#111111] px-7 py-8 text-[#efe9b8] shadow-[0_20px_50px_rgba(17,17,17,0.16)] lg:sticky lg:top-28 lg:px-9 lg:py-10">
        <p className="kicker text-[#efe9b8]/58">What this form is built to capture</p>
        <div className="mt-6 space-y-3">
          {[
            'Core lead details for routing and follow-up',
            'Service intent so the conversation starts in the right place',
            'Budget and geography to qualify fit earlier',
            'Pain points that shape the strategy call',
          ].map((item) => (
            <div key={item} className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-[#efe9b8]/76">
              {item}
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
