import type { Metadata } from 'next';
import { Archivo_Narrow, Inter } from 'next/font/google';
import './globals.css';
import { SiteShell } from '@/components/site-shell';
import { site } from '@/data/site';

const bodyFont = Inter({ subsets: ['latin'], variable: '--font-body' });
const headingFont = Archivo_Narrow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: 'Upthrive',
    template: '%s | Upthrive',
  },
  description: site.description,
  applicationName: 'Upthrive',
  openGraph: {
    title: 'Upthrive',
    description: site.description,
    url: site.siteUrl,
    siteName: 'Upthrive',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upthrive',
    description: site.description,
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
