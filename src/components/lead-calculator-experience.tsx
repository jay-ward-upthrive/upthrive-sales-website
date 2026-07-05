'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

const basePriceByType = {
  insuranceLeads: 38,
  recruiting: 52,
  appointmentSetting: 72,
} as const;

const geographyMultiplier = {
  singleState: 1,
  multiState: 1.18,
  national: 1.34,
} as const;

export function LeadCalculatorExperience() {
  const [serviceType, setServiceType] = useState<keyof typeof basePriceByType>('insuranceLeads');
  const [volume, setVolume] = useState(50);
  const [geography, setGeography] = useState<keyof typeof geographyMultiplier>('singleState');
  const [exclusive, setExclusive] = useState(true);
  const [followUp, setFollowUp] = useState(false);
  const [proofLayer, setProofLayer] = useState(false);

  const estimate = useMemo(() => {
    const base = basePriceByType[serviceType];
    const geo = geographyMultiplier[geography];
    const exclusivity = exclusive ? 1.24 : 1;
    const follow = followUp ? 1.16 : 1;
    const proof = proofLayer ? 1.08 : 1;
    const perLead = Math.round(base * geo * exclusivity * follow * proof);
    const subtotal = perLead * volume;
    const setup = serviceType === 'appointmentSetting' ? 1450 : serviceType === 'recruiting' ? 980 : 650;
    const total = subtotal + setup;
    return { perLead, subtotal, setup, total };
  }, [exclusive, followUp, geography, proofLayer, serviceType, volume]);

  return (
    <section className="grid gap-8 lg:grid-cols-[1fr_0.88fr] lg:items-start">
      <div className="surface-card-strong rounded-[26px] px-7 py-8 lg:px-9 lg:py-10">
        <p className="kicker text-[#382a51]/68">Estimator</p>
        <h2 className="mt-4 font-heading text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.98] text-[#111111]">
          Get a directional estimate before you book the call.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[#111111]/72">
          This is a qualification tool, not a locked quote. It helps visitors compare service shape, volume, and add-ons without feeling cramped.
        </p>

        <div className="mt-8 grid gap-5">
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[#111111]">Service type</span>
            <select value={serviceType} onChange={(event) => setServiceType(event.target.value as keyof typeof basePriceByType)} className="rounded-[16px] border border-black/10 bg-[#fffdf4] px-4 py-3 text-sm text-[#111111]">
              <option value="insuranceLeads">Insurance leads</option>
              <option value="recruiting">Recruiting campaigns</option>
              <option value="appointmentSetting">Appointment setting</option>
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[#111111]">Monthly volume target</span>
            <input type="range" min={25} max={250} step={25} value={volume} onChange={(event) => setVolume(Number(event.target.value))} />
            <div className="flex items-center justify-between text-sm text-[#111111]/72">
              <span>25</span>
              <span className="rounded-full bg-[#f57b05]/16 px-3 py-1 font-semibold text-[#111111]">{volume} units</span>
              <span>250</span>
            </div>
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[#111111]">Coverage area</span>
              <select value={geography} onChange={(event) => setGeography(event.target.value as keyof typeof geographyMultiplier)} className="rounded-[16px] border border-black/10 bg-[#fffdf4] px-4 py-3 text-sm text-[#111111]">
                <option value="singleState">Single state</option>
                <option value="multiState">Multi-state</option>
                <option value="national">National</option>
              </select>
            </label>
            <div className="grid gap-2">
              <span className="text-sm font-semibold text-[#111111]">Options</span>
              <div className="grid gap-2">
                <label className="rounded-[16px] border border-black/8 bg-[#fffdf4] px-4 py-3 text-sm text-[#111111]/78">
                  <input type="checkbox" className="mr-3" checked={exclusive} onChange={() => setExclusive((value) => !value)} />
                  Exclusive routing
                </label>
                <label className="rounded-[16px] border border-black/8 bg-[#fffdf4] px-4 py-3 text-sm text-[#111111]/78">
                  <input type="checkbox" className="mr-3" checked={followUp} onChange={() => setFollowUp((value) => !value)} />
                  Follow-up support
                </label>
                <label className="rounded-[16px] border border-black/8 bg-[#fffdf4] px-4 py-3 text-sm text-[#111111]/78">
                  <input type="checkbox" className="mr-3" checked={proofLayer} onChange={() => setProofLayer((value) => !value)} />
                  Proof package
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <aside className="rounded-[26px] border border-black/8 bg-[#111111] px-7 py-8 text-[#efe9b8] shadow-[0_20px_50px_rgba(17,17,17,0.16)] lg:sticky lg:top-28 lg:px-9 lg:py-10">
        <p className="kicker text-[#efe9b8]/58">Estimate</p>
        <div className="mt-6 grid gap-4">
          <div className="rounded-[20px] border border-white/10 bg-white/5 px-5 py-5">
            <p className="text-sm text-[#efe9b8]/62">Estimated unit cost</p>
            <p className="mt-2 font-heading text-[2.8rem] leading-none">${estimate.perLead}</p>
          </div>
          <div className="rounded-[20px] border border-white/10 bg-white/5 px-5 py-5 text-sm text-[#efe9b8]/76">
            <div className="flex items-center justify-between gap-4">
              <span>Volume subtotal</span>
              <strong className="text-[#efe9b8]">${estimate.subtotal.toLocaleString()}</strong>
            </div>
            <div className="mt-3 flex items-center justify-between gap-4">
              <span>Setup and strategy</span>
              <strong className="text-[#efe9b8]">${estimate.setup.toLocaleString()}</strong>
            </div>
            <div className="my-4 h-px bg-white/10" />
            <div className="flex items-center justify-between gap-4 text-base">
              <span>Estimated total</span>
              <strong className="font-heading text-[1.9rem] leading-none text-[#f57b05]">${estimate.total.toLocaleString()}</strong>
            </div>
          </div>
          <p className="text-sm leading-7 text-[#efe9b8]/72">
            Final pricing can shift based on geography, approval workflow, CRM handoff, tracking depth, or content volume.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/book-a-call" className="cta-primary px-5 py-3 text-sm">
              Book a strategy call
            </Link>
            <Link href="/contact" className="cta-secondary px-5 py-3 text-sm">
              Request a quote
            </Link>
          </div>
        </div>
      </aside>
    </section>
  );
}
