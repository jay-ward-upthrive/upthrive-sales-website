export const site = {
  name: 'Upthrive',
  slogan: 'Insurance growth for agents and agencies',
  description:
    'Upthrive helps insurance agents and agency owners generate more leads, attract better candidates, book more conversations, and build more trust with serious buyers.',
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
    'Insurance lead generation and recruiting support',
    'Appointment setting and pricing visibility',
    'Proof, compliance, and trust-building content',
    'Ready for forms, tracking, and future automation',
  ],
} as const;
