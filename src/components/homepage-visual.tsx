'use client';

import { motion, useReducedMotion } from 'motion/react';

const floatTransition = {
  duration: 5.2,
  repeat: Infinity,
  repeatType: 'reverse' as const,
  ease: 'easeInOut' as const,
};

export function HomepageVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      <div className="absolute left-[6%] top-[10%] h-28 w-28 rounded-full bg-[#F57B05]/16 blur-3xl" />
      <div className="absolute bottom-[12%] right-[6%] h-40 w-40 rounded-full bg-[#0578C6]/14 blur-3xl" />

      <div className="relative grid gap-4">
        <motion.div
          initial={reduce ? false : { opacity: 0, x: 28 }}
          animate={reduce ? undefined : { opacity: 1, x: 0, y: [0, -8] }}
          transition={reduce ? undefined : { opacity: { duration: 0.8 }, x: { duration: 0.8 }, y: floatTransition }}
          className="ml-auto w-[82%] rounded-[28px] border border-white/12 bg-white/8 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl"
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#EFE9B8]/64">Agent trust profile</p>
          <div className="mt-4 flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#EFE9B8] text-lg font-bold text-[#000100]">A</div>
            <div>
              <p className="font-heading text-2xl text-[#EFE9B8]">Ashley Martin</p>
              <p className="text-sm text-[#EFE9B8]/74">Life and Medicare advisor</p>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/12 px-4 py-3">
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-[#EFE9B8]/54">Positioning</p>
              <p className="mt-1 text-sm text-[#EFE9B8]">Clear and local</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/12 px-4 py-3">
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-[#EFE9B8]/54">Proof</p>
              <p className="mt-1 text-sm text-[#EFE9B8]">Reviews visible</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/12 px-4 py-3">
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-[#EFE9B8]/54">Action</p>
              <p className="mt-1 text-sm text-[#EFE9B8]">Book a call</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: -24 }}
          animate={reduce ? undefined : { opacity: 1, x: 0, y: [0, 8] }}
          transition={reduce ? undefined : { opacity: { duration: 0.8, delay: 0.14 }, x: { duration: 0.8, delay: 0.14 }, y: { ...floatTransition, delay: 0.3 } }}
          className="mr-auto w-[70%] rounded-[26px] border border-[#F57B05]/22 bg-[#EFE9B8] p-5 text-[#000100] shadow-[0_22px_60px_rgba(245,123,5,0.18)]"
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#382A51]/64">Trust signal</p>
          <div className="mt-3 flex items-end justify-between gap-4">
            <div>
              <p className="font-heading text-5xl leading-none">4.9</p>
              <p className="mt-1 text-sm text-[#000100]/70">Average review tone</p>
            </div>
            <div className="rounded-full bg-[#02694C] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#EFE9B8]">
              High confidence
            </div>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#000100]/10">
            <div className="h-full w-[78%] rounded-full bg-[#02694C]" />
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: 20 }}
          animate={reduce ? undefined : { opacity: 1, x: 0, y: [0, -6] }}
          transition={reduce ? undefined : { opacity: { duration: 0.8, delay: 0.24 }, x: { duration: 0.8, delay: 0.24 }, y: { ...floatTransition, delay: 0.6 } }}
          className="ml-auto w-[88%] rounded-[28px] border border-white/12 bg-[#382A51] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)]"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#EFE9B8]/58">Lead capture</p>
              <p className="mt-1 font-heading text-2xl text-[#EFE9B8]">Visitor to conversation</p>
            </div>
            <div className="rounded-full border border-white/14 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#EFE9B8]/76">
              Sales path
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[22px] bg-white/7 p-4">
              <p className="text-sm text-[#EFE9B8]/72">Primary page action</p>
              <p className="mt-2 text-lg font-semibold text-[#EFE9B8]">Book a strategy call</p>
              <div className="mt-4 grid gap-2">
                <div className="rounded-xl bg-white/9 px-3 py-2 text-sm text-[#EFE9B8]/78">Service interest</div>
                <div className="rounded-xl bg-white/9 px-3 py-2 text-sm text-[#EFE9B8]/78">Best contact method</div>
              </div>
            </div>
            <div className="rounded-[22px] bg-white/7 p-4">
              <p className="text-sm text-[#EFE9B8]/72">Conversion arc</p>
              <div className="mt-4 space-y-3">
                {['Traffic lands', 'Trust builds', 'Call gets booked'].map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-[#F57B05] text-xs font-bold text-[#000100]">
                      {index + 1}
                    </span>
                    <span className="text-sm text-[#EFE9B8]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
