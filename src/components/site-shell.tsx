import type { ReactNode } from 'react';
import Link from 'next/link';
import { site } from '@/data/site';

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(245,123,5,0.18),_transparent_28%),radial-gradient(circle_at_right,_rgba(5,120,198,0.12),_transparent_26%),linear-gradient(180deg,#f8f7f2_0%,#f3efe2_100%)] text-[#000100]">
      <header className="sticky top-0 z-50 border-b border-black/8 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3 font-semibold tracking-wide">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#000100] text-sm text-[#EFE9B8] shadow-lg shadow-[#000100]/20">
              U
            </span>
            <span className="leading-tight">
              <span className="block text-xs uppercase tracking-[0.35em] text-[#382A51]/70">UpThrive</span>
              <span className="block text-sm text-[#000100]/70">For insurance agents & agencies</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-[#000100]/75 lg:flex">
            {site.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[#000100]">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/book-a-call"
              className="rounded-full bg-[#000100] px-5 py-2.5 text-sm font-medium text-[#EFE9B8] shadow-lg shadow-[#000100]/15 transition hover:-translate-y-0.5 hover:bg-[#382A51]"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-black/10 bg-[#000100] text-[#EFE9B8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#EFE9B8]/60">UpThrive</p>
            <h2 className="mt-3 text-2xl font-semibold">Insurance growth systems built to convert.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#EFE9B8]/78">
              This site structure is ready for Directus, SEO pages, calculator logic, and the future CRM and portal pieces for insurance agents and agencies.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#EFE9B8]/65">Quick links</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#EFE9B8]/80">
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
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#EFE9B8]/65">Trust points</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#EFE9B8]/80">
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
