export type CardItem = {
  title: string;
  text: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PageSection =
  | {
      kind: 'cards';
      title: string;
      description?: string;
      items: CardItem[];
    }
  | {
      kind: 'list';
      title: string;
      description?: string;
      items: string[];
    }
  | {
      kind: 'faq';
      title: string;
      description?: string;
      items: FaqItem[];
    }
  | {
      kind: 'callout';
      title: string;
      description: string;
      ctaLabel: string;
      ctaHref: string;
    };

export type PageContent = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  sections: PageSection[];
};

export const pages: Record<string, PageContent> = {
  home: {
    slug: '/',
    eyebrow: 'UpThrive website foundation',
    title: 'Insurance lead generation, recruiting, and appointment setting for agents who want real pipeline.',
    summary:
      'UpThrive helps insurance agents and agency owners generate more opportunities, explain their offer clearly, and move visitors toward calls, quotes, and booked appointments.',
    primaryCta: { label: 'Book a Call', href: '/book-a-call' },
    secondaryCta: { label: 'View Pricing', href: '/pricing' },
    sections: [
      {
        kind: 'cards',
        title: 'What UpThrive will become',
        description: 'The first production build is designed around the core revenue paths already in your brief.',
        items: [
          { title: 'Insurance lead generation', text: 'Dedicated pages for each major lead type and buying intent.' },
          { title: 'Recruiting campaigns', text: 'A clearer path for agency owners hiring licensed or aspiring agents.' },
          { title: 'Appointment setting', text: 'A separate service page and future add-on for booked conversations.' },
          { title: 'Pricing visibility', text: 'A polished lead calculator that can later connect to backend pricing rules.' },
        ],
      },
      {
        kind: 'list',
        title: 'Home page structure',
        description: 'The homepage should answer the buyer fast and move them toward a call or quote.',
        items: [
          'Hero with strong promise and CTA',
          'Problem / solution section',
          'Service highlights',
          'Lead types and recruiting paths',
          'Proof and testimonials',
          'Compliance and replacement policy preview',
          'Pricing / calculator CTA',
          'FAQ and final conversion block',
        ],
      },
      {
        kind: 'callout',
        title: 'Build the site once, connect the systems later',
        description:
          'The structure is ready for Directus, lead capture, analytics, and checkout integration without redesigning the public site.',
        ctaLabel: 'See the services structure',
        ctaHref: '/services',
      },
    ],
  },
  services: {
    slug: '/services',
    eyebrow: 'Core offers',
    title: 'Everything UpThrive sells, organized for insurance agents and agency owners.',
    summary:
      'This page acts as the main services hub and sends visitors into each dedicated commercial page for leads, recruiting, appointment setting, and pricing.',
    primaryCta: { label: 'Explore lead types', href: '/insurance-leads' },
    secondaryCta: { label: 'View recruiting', href: '/insurance-recruiting-leads' },
    sections: [
      {
        kind: 'cards',
        title: 'Primary offers',
        items: [
          { title: 'Insurance leads', text: 'Broad hub for final expense, mortgage protection, IUL, annuity, Medicare, ACA, and more.' },
          { title: 'Recruiting leads', text: 'Positioned for agency growth and licensed-agent acquisition.' },
          { title: 'Appointment setting', text: 'Separate service page with clear workflow and deliverables.' },
          { title: 'Pricing calculator', text: 'A quote-first flow that reduces friction and sets expectations.' },
        ],
      },
      {
        kind: 'list',
        title: 'Supporting trust pages',
        items: ['Testimonials', 'Compliance', 'Replacement policy', 'About', 'Contact', 'Resources'],
      },
    ],
  },
  'insurance-leads': {
    slug: '/insurance-leads',
    eyebrow: 'Lead generation hub',
    title: 'Insurance leads built for agents and agencies that need real pipeline, not recycled lists.',
    summary:
      'This is the broad commercial page for insurance agents who want cleaner lead flow, better fit, and a clearer buying path.',
    primaryCta: { label: 'Calculate pricing', href: '/lead-calculator' },
    secondaryCta: { label: 'View final expense leads', href: '/final-expense-leads' },
    sections: [
      {
        kind: 'cards',
        title: 'Lead types to support',
        items: [
          { title: 'Final expense', text: 'High-intent consumer demand with a dedicated page.' },
          { title: 'Mortgage protection', text: 'Homeowner-focused traffic and buyer education.' },
          { title: 'IUL', text: 'Suitability-aware messaging and qualification.' },
          { title: 'Annuity', text: 'Retirement-focused demand with careful compliance language.' },
          { title: 'Medicare', text: 'Seasonal and eligibility-aware page structure.' },
          { title: 'ACA', text: 'Clear offer framing and eligibility context.' },
        ],
      },
      {
        kind: 'list',
        title: 'Trust and differentiation',
        items: [
          'Exclusive vs shared lead clarity',
          'Qualification and validation language',
          'Replacement policy preview',
          'Delivery expectations',
          'CTA to pricing or call',
        ],
      },
    ],
  },
  'final-expense-leads': {
    slug: '/final-expense-leads',
    eyebrow: 'Final expense SEO page',
    title: 'Final expense leads with clear quality standards and replacement rules.',
    summary:
      'This page should rank and convert by explaining what the leads are, who they are for, and what makes them worth buying.',
    primaryCta: { label: 'See pricing', href: '/pricing' },
    secondaryCta: { label: 'Read replacement policy', href: '/replacement-policy' },
    sections: [
      { kind: 'list', title: 'What buyers care about', items: ['Lead quality', 'Area targeting', 'Exclusivity', 'Delivery speed', 'Replacement terms'] },
      { kind: 'cards', title: 'Page sections', items: [
        { title: 'Hero', text: 'Direct promise for final expense buyers.' },
        { title: 'Qualification', text: 'Explain form data, validation, and targeting.' },
        { title: 'Replacement policy', text: 'Show what is covered before purchase.' },
        { title: 'FAQ', text: 'Handle objections without overselling.' },
      ] },
    ],
  },
  'mortgage-protection-leads': {
    slug: '/mortgage-protection-leads',
    eyebrow: 'Mortgage protection page',
    title: 'Mortgage protection leads for homeowners and policy-fit conversations.',
    summary: 'A focused page for mortgage protection intent, education, and buyer trust.',
    primaryCta: { label: 'Book a call', href: '/book-a-call' },
    secondaryCta: { label: 'View insurance leads', href: '/insurance-leads' },
    sections: [
      { kind: 'list', title: 'Important sections', items: ['Who these leads fit', 'Qualification flow', 'Lead delivery expectations', 'Common objections', 'FAQ'] },
    ],
  },
  'iul-leads': {
    slug: '/iul-leads',
    eyebrow: 'IUL page',
    title: 'IUL leads with suitability-aware messaging and a clear funnel.',
    summary: 'The IUL page should feel premium, serious, and compliant.',
    primaryCta: { label: 'View pricing', href: '/pricing' },
    sections: [
      { kind: 'list', title: 'Required sections', items: ['Suitability framing', 'Qualification', 'Education-based positioning', 'FAQ', 'CTA'] },
    ],
  },
  'annuity-leads': {
    slug: '/annuity-leads',
    eyebrow: 'Annuity page',
    title: 'Annuity leads for retirement-focused buyers.',
    summary: 'This page should emphasize retirement context, qualification, and trust.',
    primaryCta: { label: 'Calculate pricing', href: '/lead-calculator' },
    sections: [
      { kind: 'list', title: 'Required sections', items: ['Retirement-focused hero', 'Qualification requirements', 'Compliance-safe language', 'FAQ', 'CTA'] },
    ],
  },
  'medicare-leads': {
    slug: '/medicare-leads',
    eyebrow: 'Medicare page',
    title: 'Medicare leads with seasonal and eligibility-aware structure.',
    summary: 'Use this page to address common Medicare buying concerns and conversion blockers.',
    primaryCta: { label: 'Book a call', href: '/book-a-call' },
    sections: [
      { kind: 'list', title: 'Important sections', items: ['Lead type explanation', 'Qualification fields', 'Enrollment-period note', 'Compliance-safe language', 'FAQ'] },
    ],
  },
  'aca-leads': {
    slug: '/aca-leads',
    eyebrow: 'ACA page',
    title: 'ACA leads structured for clarity, qualification, and trust.',
    summary: 'This page should make the offer and audience obvious quickly.',
    primaryCta: { label: 'View pricing', href: '/pricing' },
    sections: [
      { kind: 'list', title: 'Important sections', items: ['Offer explanation', 'Qualification', 'Eligibility context', 'FAQ', 'CTA'] },
    ],
  },
  'insurance-recruiting-leads': {
    slug: '/insurance-recruiting-leads',
    eyebrow: 'Recruiting funnel',
    title: 'Insurance recruiting leads for agencies that want more licensed and aspiring agents.',
    summary:
      'This page is built for agency owners who need a cleaner recruiting funnel and want better-fit people to book calls.',
    primaryCta: { label: 'Book recruiting call', href: '/book-a-call' },
    secondaryCta: { label: 'View appointment setting', href: '/appointment-setting' },
    sections: [
      { kind: 'cards', title: 'Why it converts', items: [
        { title: 'Clear audience', text: 'Agency owners know exactly who it is for.' },
        { title: 'Simple next step', text: 'Visitors can book a call or request a plan.' },
        { title: 'Sales support', text: 'Appointment setting can be layered in later.' },
        { title: 'SEO intent', text: 'Built for commercial recruiting search terms.' },
      ] },
      { kind: 'list', title: 'Required sections', items: ['Hero', 'Candidate profile', 'Qualification', 'Funnel flow', 'FAQ', 'CTA'] },
    ],
  },
  'appointment-setting': {
    slug: '/appointment-setting',
    eyebrow: 'Appointment setting',
    title: 'Appointment setting that turns interest into booked conversations.',
    summary: 'Sell appointment setting as its own service and as a future upsell.',
    primaryCta: { label: 'Request a quote', href: '/lead-calculator' },
    sections: [
      { kind: 'list', title: 'What this page needs', items: ['What the setters do', 'Booking definition', 'Confirmation and follow-up', 'Show-rate language', 'FAQ'] },
    ],
  },
  pricing: {
    slug: '/pricing',
    eyebrow: 'Pricing hub',
    title: 'Pricing that starts with an estimate and pushes the right people to a call.',
    summary: 'The calculator and pricing page should make expectations clear without burying the lead.',
    primaryCta: { label: 'Open calculator', href: '/lead-calculator' },
    secondaryCta: { label: 'Book a call', href: '/book-a-call' },
    sections: [
      { kind: 'cards', title: 'Pricing page goals', items: [
        { title: 'Reduce friction', text: 'Give buyers enough clarity to keep moving.' },
        { title: 'Qualify better', text: 'Filter people who are not a fit before a call.' },
        { title: 'Future-proof', text: 'Centralize pricing rules later in a backend config or CMS.' },
      ] },
    ],
  },
  'lead-calculator': {
    slug: '/lead-calculator',
    eyebrow: 'Calculator shell',
    title: 'A premium lead configurator, not a cramped dropdown form.',
    summary: 'The structure is ready for a real pricing engine once rules are finalized.',
    primaryCta: { label: 'Book after estimate', href: '/book-a-call' },
    secondaryCta: { label: 'View pricing hub', href: '/pricing' },
    sections: [
      { kind: 'cards', title: 'Calculator experience', items: [
        { title: 'Product cards', text: 'Use visual selections instead of a spreadsheet feel.' },
        { title: 'Live summary', text: 'Show the estimate in a clean side panel or summary card.' },
        { title: 'Mobile friendly', text: 'Keep the flow readable and simple on phones.' },
        { title: 'Backend ready', text: 'Move pricing logic into a single source later.' },
      ] },
      { kind: 'list', title: 'Later calculation inputs', items: ['Lead type', 'Quantity', 'State', 'Add-ons', 'Plan duration', 'Discount rules'] },
    ],
  },
  testimonials: {
    slug: '/testimonials',
    eyebrow: 'Proof page',
    title: 'Testimonials and proof for insurance agents who want to see real results.',
    summary: 'This page should be built from real proof and used to convert cautious insurance buyers.',
    primaryCta: { label: 'Read compliance', href: '/compliance' },
    sections: [
      { kind: 'list', title: 'Proof clusters', items: ['Video testimonials', 'Screenshots', 'Written quotes', 'Case-study style sections', 'CTA after each cluster'] },
      { kind: 'callout', title: 'Only use real proof', description: 'Any example content here should be replaced with approved client proof before launch.', ctaLabel: 'Request a call', ctaHref: '/book-a-call' },
    ],
  },
  compliance: {
    slug: '/compliance',
    eyebrow: 'Trust page',
    title: 'Compliance-aware messaging that does not overpromise.',
    summary: 'This page should answer objections about consent, records, and responsible delivery.',
    primaryCta: { label: 'Read replacement policy', href: '/replacement-policy' },
    sections: [
      { kind: 'list', title: 'Required topics', items: ['TCPA-aware language', 'Opt-in capture', 'Delivery records', 'Client responsibilities', 'DNC position'] },
    ],
  },
  'replacement-policy': {
    slug: '/replacement-policy',
    eyebrow: 'Policy page',
    title: 'Replacement rules people can read before they buy.',
    summary: 'Make the policy visible and simple so disputes are reduced later.',
    primaryCta: { label: 'See pricing', href: '/pricing' },
    sections: [
      { kind: 'cards', title: 'Typical replaceable categories', items: [
        { title: 'Invalid data', text: 'Wrong number, disconnected number, wrong state, incomplete lead.' },
        { title: 'Targeting mismatch', text: 'Out of ordered geography or language mismatch if not ordered.' },
        { title: 'Duplicates', text: 'Duplicate within the stated policy window.' },
      ] },
    ],
  },
  about: {
    slug: '/about',
    eyebrow: 'About UpThrive',
    title: 'A grounded, founder-led partner for insurance agents and agencies.',
    summary: 'The about page should humanize the brand without feeling generic or corporate.',
    primaryCta: { label: 'Contact us', href: '/contact' },
    sections: [
      { kind: 'list', title: 'What the page should cover', items: ['Founder story', 'Why the company exists', 'How the team operates', 'What UpThrive believes about ethics and follow-up'] },
    ],
  },
  contact: {
    slug: '/contact',
    eyebrow: 'Contact',
    title: 'Short, simple contact path for insurance agents and agency owners.',
    summary: 'Keep the form and call to action simple so the page converts cleanly.',
    primaryCta: { label: 'Book a call', href: '/book-a-call' },
    sections: [
      { kind: 'list', title: 'Suggested form fields', items: ['Name', 'Email', 'Phone', 'Agency name', 'Service interest', 'Budget range', 'Target states'] },
    ],
  },
  'book-a-call': {
    slug: '/book-a-call',
    eyebrow: 'Booking page',
    title: 'Make booking the obvious next step for serious buyers.',
    summary: 'This page can hold Calendly or a direct scheduler later.',
    primaryCta: { label: 'Open scheduler', href: '/contact' },
    sections: [
      { kind: 'list', title: 'Booking page requirements', items: ['Scheduler embed', 'Short qualification form', 'What to expect on the call', 'Service routing'] },
    ],
  },
  resources: {
    slug: '/resources',
    eyebrow: 'Resources',
    title: 'A commercial SEO hub for blog posts and guides.',
    summary: 'Use this page to organize future blog content into useful categories.',
    primaryCta: { label: 'Read the blog', href: '/blog' },
    sections: [
      { kind: 'cards', title: 'Initial categories', items: [
        { title: 'Insurance lead generation', text: 'Lead quality, replacement policy, and performance.' },
        { title: 'Recruiting agents', text: 'How to recruit and qualify better candidates.' },
        { title: 'Appointment setting', text: 'How to move from lead to conversation.' },
        { title: 'Compliance and TCPA', text: 'Trust, consent, and documentation.' },
      ] },
    ],
  },
  blog: {
    slug: '/blog',
    eyebrow: 'Blog index',
    title: 'Blog structure ready for commercial SEO and thought leadership.',
    summary: 'The blog should pull from CMS content later, but the routing is ready now.',
    primaryCta: { label: 'See resources', href: '/resources' },
    sections: [
      { kind: 'list', title: 'Starter topic buckets', items: ['Insurance Lead Generation', 'Final Expense Sales', 'Recruiting Agents', 'Appointment Setting', 'Compliance', 'Lead Follow-Up'] },
    ],
  },
  privacy: {
    slug: '/privacy-policy',
    eyebrow: 'Legal',
    title: 'Privacy policy page placeholder, ready for final legal text.',
    summary: 'Keep this route in place now so legal copy can be inserted without changing the structure.',
    primaryCta: { label: 'Terms', href: '/terms' },
    sections: [
      { kind: 'list', title: 'What to cover later', items: ['What data is collected', 'How it is used', 'Cookies', 'Third parties', 'User rights'] },
    ],
  },
  terms: {
    slug: '/terms',
    eyebrow: 'Legal',
    title: 'Terms page placeholder, ready for the final policy language.',
    summary: 'This route is required for launch and should be replaced with legal review later.',
    primaryCta: { label: 'Privacy policy', href: '/privacy-policy' },
    sections: [
      { kind: 'list', title: 'What to cover later', items: ['Service terms', 'User responsibilities', 'Disclaimers', 'Payment terms', 'Limitations'] },
    ],
  },
  cookie: {
    slug: '/cookie-policy',
    eyebrow: 'Legal',
    title: 'Cookie policy placeholder, ready for consent wording later.',
    summary: 'This route keeps the website complete before analytics or tracking are added.',
    primaryCta: { label: 'Privacy policy', href: '/privacy-policy' },
    sections: [
      { kind: 'list', title: 'What to cover later', items: ['Necessary cookies', 'Analytics cookies', 'Marketing cookies', 'Consent controls', 'How to change settings'] },
    ],
  },
};

export const routeOrder = [
  '/',
  '/services',
  '/insurance-leads',
  '/final-expense-leads',
  '/mortgage-protection-leads',
  '/iul-leads',
  '/annuity-leads',
  '/medicare-leads',
  '/aca-leads',
  '/insurance-recruiting-leads',
  '/appointment-setting',
  '/pricing',
  '/lead-calculator',
  '/testimonials',
  '/compliance',
  '/replacement-policy',
  '/about',
  '/contact',
  '/book-a-call',
  '/resources',
  '/blog',
  '/privacy-policy',
  '/terms',
  '/cookie-policy',
];
