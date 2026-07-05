import type { ReactNode } from 'react';
import Link from 'next/link';
import { site } from '@/data/site';

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] text-[#000100]">
      <header className="sticky top-0 z-50 border-b border-black/8 bg-[#efe9b8]/88 backdrop-blur-xl">
        <div className="section-shell flex h-[72px] items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#000100] text-sm font-bold text-[#efe9b8] shadow-[0_14px_34px_rgba(0,1,0,0.18)]">
              U
            </span>
            <span className="leading-tight">
              <span className="block font-heading text-[1.35rem] leading-none text-[#000100]">Upthrive</span>
              <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#382a51]/72">
                Premium SEO-first insurance growth
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-[#000100]/74 xl:flex">
            {site.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[#000100]">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <details className="group relative xl:hidden">
              <summary className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-2xl border border-black/10 bg-white/65 text-[#000100]">
                <span className="sr-only">Open menu</span>
                <div className="space-y-1.5">
                  <span className="block h-0.5 w-5 rounded-full bg-[#000100]" />
                  <span className="block h-0.5 w-5 rounded-full bg-[#000100]" />
                  <span className="block h-0.5 w-5 rounded-full bg-[#000100]" />
                </div>
              </summary>
              <div className="absolute right-0 top-[calc(100%+12px)] w-72 rounded-[28px] border border-black/8 bg-[#fffdf1] p-4 shadow-[0_24px_60px_rgba(23,16,5,0.12)]">
                <nav className="grid gap-2">
                  {site.navigation.map((item) => (
                    <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-3 text-sm font-semibold text-[#000100]/78 transition hover:bg-black/4">
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <Link href={site.primaryCta.href} className="cta-primary mt-3 w-full px-4 py-3 text-sm">
                  {site.primaryCta.label}
                </Link>
              </div>
            </details>

            <Link href={site.primaryCta.href} className="light-button hidden px-4 py-2.5 text-sm sm:inline-flex lg:px-5">
              {site.primaryCta.label}
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/8 bg-[#000100] text-[#efe9b8]">
        <div className="section-shell grid gap-10 py-14 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <div>
            <p className="kicker text-[#efe9b8]/58">Upthrive</p>
            <h2 className="mt-4 max-w-lg text-4xl leading-[0.98]">SEO-first pages. Better trust. Stronger calls.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#efe9b8]/76">
              Upthrive gives insurance agents and agency owners a premium website system for lead generation, recruiting, appointment setting, pricing visibility, and trust-building content.
            </p>
          </div>

          <div>
            <h3 className="kicker text-[#efe9b8]/58">Navigate</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#efe9b8]/82">
              {site.footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="kicker text-[#efe9b8]/58">What the site is ready for</h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[#efe9b8]/82">
              {site.trustPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
