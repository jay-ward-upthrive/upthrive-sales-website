'use client';

import { motion, useReducedMotion } from 'motion/react';

export function HomepageVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="relative rounded-[28px] border border-white/10 bg-white/6 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.22)] backdrop-blur-sm">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={reduce ? undefined : { duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[24px] border border-white/10 bg-[#000100] p-6 text-[#EFE9B8]"
        >
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#EFE9B8]/56">Growth snapshot</p>
          <h3 className="mt-3 font-heading text-[2.4rem] leading-[0.96]">A cleaner path from demand to conversation.</h3>

          <div className="mt-6 grid gap-3">
            {[
              ['Lead demand', 'Clearer offer and stronger fit'],
              ['Recruiting flow', 'Better candidate routing'],
              ['Booked calls', 'Less friction before contact'],
            ].map(([title, text]) => (
              <div key={title} className="flex items-center justify-between gap-4 rounded-[18px] border border-white/10 bg-white/5 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-[#EFE9B8]">{title}</p>
                  <p className="text-sm text-[#EFE9B8]/66">{text}</p>
                </div>
                <span className="rounded-full bg-[#F57B05] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#000100]">
                  Active
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: -18 }}
          animate={reduce ? undefined : { opacity: 1, x: 0 }}
          transition={reduce ? undefined : { duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -left-4 top-8 rounded-[22px] border border-black/8 bg-[#fffdf1] px-4 py-4 text-[#000100] shadow-[0_14px_28px_rgba(23,16,5,0.08)]"
        >
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#382A51]/58">Trust</p>
          <p className="mt-2 font-heading text-[2rem] leading-none">4.9</p>
          <p className="mt-1 text-sm text-[#000100]/68">Buyer confidence</p>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: 18 }}
          animate={reduce ? undefined : { opacity: 1, x: 0 }}
          transition={reduce ? undefined : { duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -bottom-4 right-6 rounded-[22px] border border-[#F57B05]/16 bg-[#F57B05] px-5 py-4 text-[#000100] shadow-[0_14px_28px_rgba(245,123,5,0.18)]"
        >
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#000100]/62">Next step</p>
          <p className="mt-2 font-heading text-[1.8rem] leading-none">Book a call</p>
        </motion.div>
      </div>
    </div>
  );
}
