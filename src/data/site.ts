export const site = {
  name: 'UpThrive',
  slogan: 'Insurance growth systems for agents and agencies',
  description:
    'UpThrive helps insurance businesses grow with exclusive leads, recruiting campaigns, appointment setting, pricing clarity, and conversion systems.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://upthrive-solutions.com',
  navigation: [
    { label: 'Services', href: '/services' },
    { label: 'Lead Types', href: '/insurance-leads' },
    { label: 'Recruiting', href: '/insurance-recruiting-leads' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Resources', href: '/resources' },
  ],
  serviceHighlights: [
    {
      title: 'Insurance lead generation',
      text: 'Dedicated pages for final expense, mortgage protection, IUL, annuity, Medicare, ACA, and more.',
      href: '/insurance-leads',
    },
    {
      title: 'Recruiting campaigns',
      text: 'Attract licensed and aspiring agents with a cleaner, more persuasive recruiting funnel.',
      href: '/insurance-recruiting-leads',
    },
    {
      title: 'Appointment setting',
      text: 'Turn interest into booked conversations with a simple, conversion-first process.',
      href: '/appointment-setting',
    },
    {
      title: 'Pricing calculator',
      text: 'A configurable quote flow that can later connect to backend pricing logic and checkout.',
      href: '/lead-calculator',
    },
  ],
  trustPoints: [
    'Premium, conversion-focused design',
    'SEO-ready architecture',
    'Directus-ready editable content structure',
    'Future portal and CRM friendly',
  ],
  footerLinks: [
    { label: 'Book a Call', href: '/book-a-call' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
  ],
} as const;
