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
  services: {
    slug: '/services',
    eyebrow: 'Sales-focused services',
    title: 'What Upthrive builds for insurance agents who need more trust and more booked calls.',
    summary:
      'Upthrive does not start with SEO. We start with message clarity, credibility, conversion, and a website system that helps serious buyers take the next step.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    secondaryCta: { label: 'See the homepage', href: '/' },
    sections: [
      {
        kind: 'cards',
        title: 'Core services',
        description: 'Everything is built around trust, lead capture, and cleaner conversion.',
        items: [
          {
            title: 'Website strategy',
            text: 'Positioning, offer clarity, and page architecture that help insurance buyers understand why they should trust you fast.',
          },
          {
            title: 'Design that sells',
            text: 'Premium visual systems that make your agency look established, credible, and worth contacting.',
          },
          {
            title: 'Conversion systems',
            text: 'Calls to action, section flow, booking paths, and page logic built to move traffic toward real conversations.',
          },
          {
            title: 'Lead capture and follow-up',
            text: 'Forms, routing, thank-you states, and follow-up touchpoints that reduce friction after the first click.',
          },
          {
            title: 'SEO support',
            text: 'Search visibility that supports the main sales system instead of acting like the whole strategy.',
          },
        ],
      },
      {
        kind: 'list',
        title: 'What changes after launch',
        description: 'The goal is not just a better homepage. It is a better sales impression.',
        items: [
          'Your agency looks more credible above the fold',
          'Visitors understand what you do faster',
          'Calls to action feel clearer and easier to trust',
          'Lead capture paths create less drop-off',
          'The site supports calls instead of passively existing',
        ],
      },
      {
        kind: 'callout',
        title: 'Need the website to work harder than it does now?',
        description: 'Upthrive can turn a generic insurance website into a sharper sales system with clearer trust signals and cleaner booking paths.',
        ctaLabel: 'Book a strategy call',
        ctaHref: '/book-a-call',
      },
    ],
  },
  testimonials: {
    slug: '/testimonials',
    eyebrow: 'Proof and trust',
    title: 'Proof that helps insurance buyers believe the next step is worth taking.',
    summary:
      'Strong proof is not decoration. It lowers hesitation, builds confidence, and makes the call to action easier to trust.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      {
        kind: 'cards',
        title: 'Proof formats that convert best',
        items: [
          { title: 'Short testimonials', text: 'Direct quotes about lead quality, trust, and booked calls.' },
          { title: 'Before and after framing', text: 'Show the difference between a generic site and a sales-focused one.' },
          { title: 'Credibility markers', text: 'Licensing, service areas, niche focus, and recognizable trust signals.' },
        ],
      },
      {
        kind: 'list',
        title: 'What proof should communicate',
        items: [
          'The agency looks more established',
          'The site creates better first impressions',
          'Traffic turns into more serious conversations',
          'Trust improves before the first call ever happens',
        ],
      },
    ],
  },
  about: {
    slug: '/about',
    eyebrow: 'About Upthrive',
    title: 'Upthrive is a sales-focused marketing partner for insurance agents, not a generic agency.',
    summary:
      'The mission is simple: help insurance businesses look credible online, build trust faster, and turn more traffic into booked calls.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      {
        kind: 'list',
        title: 'What Upthrive believes',
        items: [
          'A website should support sales, not just sit online',
          'Trust has to be built before people ever talk to you',
          'Clear structure beats vague agency language',
          'Good design should make the next step feel easier',
        ],
      },
      {
        kind: 'callout',
        title: 'This is for insurance businesses that want a stronger first impression and a cleaner path to contact.',
        description: 'If traffic is reaching the site but not turning into enough conversations, the website has a conversion problem. That is the gap Upthrive is built to fix.',
        ctaLabel: 'Book a strategy call',
        ctaHref: '/book-a-call',
      },
    ],
  },
  contact: {
    slug: '/contact',
    eyebrow: 'Contact Upthrive',
    title: 'A simple contact path for insurance agents and agency owners who want a better website sales system.',
    summary:
      'Keep the first conversation focused on goals, trust gaps, and what the website needs to do better.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      {
        kind: 'list',
        title: 'Best things to share',
        items: [
          'What your current site is not doing well',
          'What kind of leads or calls you want more of',
          'Where trust breaks down in your current funnel',
          'What pages or systems already exist',
        ],
      },
    ],
  },
  'book-a-call': {
    slug: '/book-a-call',
    eyebrow: 'Book a strategy call',
    title: 'Book a strategy call and get clear on what your website needs to do better.',
    summary:
      'This page is where serious insurance agents and agency owners move from interest to a real conversation about trust, positioning, and conversion.',
    primaryCta: { label: 'Book a strategy call', href: '/contact' },
    sections: [
      {
        kind: 'cards',
        title: 'What the call should cover',
        items: [
          { title: 'Current site reality', text: 'What the website looks like today and where it loses momentum.' },
          { title: 'Trust gaps', text: 'Where buyers hesitate and what needs to change above the fold.' },
          { title: 'Conversion priorities', text: 'What should happen before, during, and after the main call to action.' },
        ],
      },
    ],
  },
  pricing: {
    slug: '/pricing',
    eyebrow: 'Scope and engagement',
    title: 'Website scope should match the sales problem you are trying to solve.',
    summary:
      'Upthrive scopes around trust, conversion, and the supporting systems the site needs. That is more useful than forcing generic package language.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      {
        kind: 'cards',
        title: 'What affects scope',
        items: [
          { title: 'Page count', text: 'How much of the site needs to be rewritten, redesigned, or rebuilt.' },
          { title: 'Offer clarity', text: 'How much message work is needed before design starts.' },
          { title: 'Conversion system depth', text: 'Forms, routing, booking flow, and follow-up logic all change the scope.' },
          { title: 'Support layers', text: 'SEO support, analytics, or content structure can be added after the core sales system is set.' },
        ],
      },
    ],
  },
  resources: {
    slug: '/resources',
    eyebrow: 'Resources',
    title: 'Practical resources for insurance businesses that want better websites and better conversion.',
    summary:
      'Use this section for clear, useful content about trust, positioning, website conversion, and follow-up for insurance agents.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    secondaryCta: { label: 'Read the blog', href: '/blog' },
    sections: [
      {
        kind: 'cards',
        title: 'Suggested content pillars',
        items: [
          { title: 'Website conversion', text: 'How to turn visits into better calls and stronger first impressions.' },
          { title: 'Trust building', text: 'How insurance agents can look more credible online.' },
          { title: 'Offer clarity', text: 'How to explain products and services without sounding generic.' },
          { title: 'Follow-up systems', text: 'How better next steps help more buyers actually book.' },
        ],
      },
    ],
  },
  blog: {
    slug: '/blog',
    eyebrow: 'Blog',
    title: 'A content hub for website trust, conversion, and lead follow-up in insurance.',
    summary:
      'The blog should support the sales story of the site with sharp, useful articles that answer buyer and agent questions clearly.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      {
        kind: 'list',
        title: 'Starter topics',
        items: [
          'How to make an insurance website look more credible',
          'What turns traffic into booked calls',
          'Why generic websites hurt trust',
          'How to improve the path from form submit to conversation',
        ],
      },
    ],
  },
  compliance: {
    slug: '/compliance',
    eyebrow: 'Compliance',
    title: 'A sales-focused website still needs clear, responsible compliance language.',
    summary:
      'Trust grows when the site is persuasive without becoming vague, reckless, or confusing about what happens next.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      {
        kind: 'list',
        title: 'What compliance content should do',
        items: [
          'Set realistic expectations',
          'Clarify forms and consent language',
          'Support a trustworthy buying experience',
          'Help the agency look careful and credible',
        ],
      },
    ],
  },
  privacy: {
    slug: '/privacy-policy',
    eyebrow: 'Privacy policy',
    title: 'Privacy policy placeholder ready for final legal copy.',
    summary:
      'This route is in place so launch structure stays complete while final privacy language is approved.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      {
        kind: 'list',
        title: 'Topics to finalize',
        items: ['What data is collected', 'How data is used', 'Third-party tools', 'User rights', 'Contact information'],
      },
    ],
  },
  terms: {
    slug: '/terms',
    eyebrow: 'Terms',
    title: 'Terms placeholder ready for final legal copy.',
    summary:
      'This route can be replaced with approved legal language without changing the public site structure.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      {
        kind: 'list',
        title: 'Topics to finalize',
        items: ['Service terms', 'Payment terms', 'Limitations', 'Disclaimers', 'User responsibilities'],
      },
    ],
  },
  cookie: {
    slug: '/cookie-policy',
    eyebrow: 'Cookie policy',
    title: 'Cookie policy placeholder ready for final consent language.',
    summary:
      'This route stays available now so the public site can launch cleanly and accept final policy text later.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      {
        kind: 'list',
        title: 'Topics to finalize',
        items: ['Necessary cookies', 'Analytics cookies', 'Marketing cookies', 'Consent controls', 'How to change settings'],
      },
    ],
  },
};

export const routeOrder = [
  '/',
  '/services',
  '/testimonials',
  '/about',
  '/pricing',
  '/resources',
  '/blog',
  '/contact',
  '/book-a-call',
  '/compliance',
  '/privacy-policy',
  '/terms',
  '/cookie-policy',
];
