'use client';

import { motion, useReducedMotion } from 'motion/react';

export function HomepageVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="mx-auto w-full max-w-[560px]">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={reduce ? undefined : { duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[28px] border border-white/10 bg-white/6 p-6 shadow-[0_24px_54px_rgba(0,0,0,0.2)]"
      >
        <div className="rounded-[24px] border border-white/10 bg-[#111111] p-6 text-[#efe9b8]">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#efe9b8]/58">Growth path</p>
          <h3 className="mt-3 font-heading text-[2.5rem] leading-[0.94]">Turn more demand into better conversations.</h3>

          <div className="mt-8 space-y-3">
            {[
              ['Lead generation', 'More qualified demand'],
              ['Recruiting', 'Better candidate flow'],
              ['Booked calls', 'Cleaner next steps'],
            ].map(([title, text]) => (
              <div key={title} className="flex items-center justify-between gap-4 rounded-[18px] border border-white/10 bg-white/5 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-[#efe9b8]">{title}</p>
                  <p className="text-sm text-[#efe9b8]/64">{text}</p>
                </div>
                <span className="h-2.5 w-2.5 rounded-full bg-[#f57b05]" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
