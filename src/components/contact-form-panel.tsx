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
      <div className="rounded-[28px] border border-black/8 bg-white/88 p-7 shadow-[0_14px_34px_rgba(23,16,5,0.06)] lg:p-9">
        <p className="kicker text-[#382A51]/68">Lead capture</p>
        <h2 className="mt-4 font-heading text-[clamp(2.3rem,4vw,3.8rem)] leading-[0.98] text-[#000100]">{title}</h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[#000100]/72">{intro}</p>

        <form className="mt-8 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[#000100]">Name</span>
              <input type="text" className="rounded-[18px] border border-black/10 bg-[#fffdf4] px-4 py-3 text-sm text-[#000100]" placeholder="Your name" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[#000100]">Email</span>
              <input type="email" className="rounded-[18px] border border-black/10 bg-[#fffdf4] px-4 py-3 text-sm text-[#000100]" placeholder="you@agency.com" />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[#000100]">Phone</span>
              <input type="tel" className="rounded-[18px] border border-black/10 bg-[#fffdf4] px-4 py-3 text-sm text-[#000100]" placeholder="Best number" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[#000100]">Agency name</span>
              <input type="text" className="rounded-[18px] border border-black/10 bg-[#fffdf4] px-4 py-3 text-sm text-[#000100]" placeholder="Agency or company" />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[#000100]">Service interest</span>
              <select className="rounded-[18px] border border-black/10 bg-[#fffdf4] px-4 py-3 text-sm text-[#000100]">
                <option>Insurance leads</option>
                <option>Recruiting campaigns</option>
                <option>Appointment setting</option>
                <option>Pricing and calculator</option>
                <option>Proof and trust support</option>
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[#000100]">Budget range</span>
              <select className="rounded-[18px] border border-black/10 bg-[#fffdf4] px-4 py-3 text-sm text-[#000100]">
                <option>Not sure yet</option>
                <option>Under $2,500</option>
                <option>$2,500 to $5,000</option>
                <option>$5,000 to $10,000</option>
                <option>$10,000+</option>
              </select>
            </label>
          </div>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[#000100]">Target states</span>
            <input type="text" className="rounded-[18px] border border-black/10 bg-[#fffdf4] px-4 py-3 text-sm text-[#000100]" placeholder="Example: Texas, Florida, Georgia" />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[#000100]">Notes and pain points</span>
            <textarea className="min-h-36 rounded-[18px] border border-black/10 bg-[#fffdf4] px-4 py-3 text-sm text-[#000100]" placeholder="What is not working today, what you want more of, and what the next step needs to support" />
          </label>

          <div className="flex flex-wrap gap-3 pt-2">
            <button type="button" className="cta-primary px-5 py-3 text-sm">
              {submitLabel}
            </button>
            <Link href="/pricing" className="light-button px-5 py-3 text-sm">
              View pricing
            </Link>
          </div>
          <p className="text-sm leading-7 text-[#000100]/68">{helper}</p>
        </form>
      </div>

      <aside className="rounded-[28px] border border-black/8 bg-[#000100] p-7 text-[#EFE9B8] shadow-[0_18px_44px_rgba(0,0,0,0.18)] lg:sticky lg:top-28 lg:p-9">
        <p className="kicker text-[#EFE9B8]/58">What this form is built to capture</p>
        <div className="mt-6 grid gap-3">
          {[
            'Core lead details for routing and follow-up',
            'Service intent so the conversation starts in the right place',
            'Budget and geography to qualify fit earlier',
            'Pain points that shape the strategy call',
          ].map((item) => (
            <div key={item} className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-[#EFE9B8]/76">
              {item}
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
