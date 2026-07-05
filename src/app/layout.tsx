import type { Metadata } from 'next';
import { Manrope, Sora } from 'next/font/google';
import './globals.css';
import { SiteShell } from '@/components/site-shell';
import { site } from '@/data/site';

const bodyFont = Manrope({ subsets: ['latin'], variable: '--font-body' });
const headingFont = Sora({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: 'UpThrive',
    template: '%s | UpThrive',
  },
  description: site.description,
  applicationName: 'UpThrive',
  openGraph: {
    title: 'UpThrive',
    description: site.description,
    url: site.siteUrl,
    siteName: 'UpThrive',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body className="font-body antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
