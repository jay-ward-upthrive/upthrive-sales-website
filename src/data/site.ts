export const site = {
  name: 'Upthrive',
  slogan: 'Premium SEO-first websites for insurance growth',
  description:
    'Upthrive builds premium SEO-first websites, lead generation pages, recruiting funnels, pricing experiences, and trust systems for insurance agents and agency owners.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://upthrive-solutions.com',
  primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
  navigation: [
    { label: 'Services', href: '/services' },
    { label: 'Insurance Leads', href: '/insurance-leads' },
    { label: 'Recruiting', href: '/insurance-recruiting-leads' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Proof', href: '/testimonials' },
    { label: 'Resources', href: '/resources' },
  ],
  footerLinks: [
    { label: 'Services', href: '/services' },
    { label: 'Insurance Leads', href: '/insurance-leads' },
    { label: 'Recruiting', href: '/insurance-recruiting-leads' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms', href: '/terms' },
  ],
  trustPoints: [
    'SEO-first structure with conversion-focused page design',
    'Lead generation, recruiting, appointment setting, and pricing flows',
    'Future-ready content model for CMS editing and expansion',
    'Ready for analytics, forms, tracking, and automation later',
  ],
} as const;
