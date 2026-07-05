export const site = {
  name: 'Upthrive',
  slogan: 'Websites that sell for insurance agents',
  description:
    'Upthrive helps insurance agents and agency owners get more leads, build trust online, and turn website traffic into booked calls with sales-focused websites and conversion systems.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://upthrive-solutions.com',
  primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
  navigation: [
    { label: 'Services', href: '/#services' },
    { label: 'Process', href: '/#process' },
    { label: 'Proof', href: '/#proof' },
    { label: 'FAQ', href: '/#faq' },
  ],
  footerLinks: [
    { label: 'Services', href: '/services' },
    { label: 'Proof', href: '/testimonials' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms', href: '/terms' },
  ],
  trustPoints: [
    'Sales-first website strategy',
    'Credibility-focused design system',
    'Conversion paths built around booked calls',
    'SEO support that backs the main sales engine',
  ],
} as const;
