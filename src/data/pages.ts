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
    eyebrow: 'Core offers',
    title: 'The main Upthrive offers, structured for insurance agents who need more leads, more trust, and more booked calls.',
    summary:
      'Upthrive is not a generic brochure agency. It is a premium SEO-first sales and content system built around lead generation, recruiting, appointment setting, pricing visibility, and trust-building.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    secondaryCta: { label: 'View pricing', href: '/pricing' },
    sections: [
      {
        kind: 'cards',
        title: 'What Upthrive helps with',
        description: 'Each service is meant to support a stronger sales conversation, not just a nicer website.',
        items: [
          { title: 'Insurance lead generation', text: 'SEO-first service pages and lead funnels that help visitors understand your offer fast and move toward inquiry.' },
          { title: 'Recruiting campaigns', text: 'Dedicated recruiting pages for agency owners who need more candidate flow and better-fit applicants.' },
          { title: 'Appointment setting', text: 'Clear positioning for booked-call support and recruiting appointment workflows.' },
          { title: 'Pricing visibility', text: 'A stronger pricing and calculator experience that helps buyers self-qualify and keep moving.' },
          { title: 'Proof and trust systems', text: 'Testimonials, case-study structure, proof blocks, and better credibility markers.' },
          { title: 'Blog and resource content', text: 'A future-ready SEO content hub that supports service pages and commercial search intent.' },
        ],
      },
      {
        kind: 'list',
        title: 'What the site is built to support later',
        items: [
          'CMS-driven editing for pages, testimonials, posts, policies, and CTA text',
          'Analytics and tracking for page views, CTA clicks, forms, and calculator interactions',
          'Lead capture automation and source tracking',
          'Easy page expansion without redesigning the whole system',
        ],
      },
    ],
  },
  'insurance-leads': {
    slug: '/insurance-leads',
    eyebrow: 'Insurance lead generation',
    title: 'Insurance lead generation pages built to rank, explain the offer clearly, and move buyers toward a quote or call.',
    summary:
      'This is the broad commercial page for agents and agencies who want more lead flow, better trust signals, and cleaner sales messaging around insurance leads.',
    primaryCta: { label: 'Start pricing', href: '/lead-calculator' },
    secondaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      {
        kind: 'cards',
        title: 'Lead pages in the system',
        items: [
          { title: 'Final expense leads', text: 'Built for direct-response intent, replacement concerns, and cost clarity.' },
          { title: 'Mortgage protection leads', text: 'Focused on homeowner demand, qualification, and fast follow-up.' },
          { title: 'IUL leads', text: 'Positioned with stronger trust, education, and a more premium page tone.' },
          { title: 'Annuity leads', text: 'Structured for retirement-focused search and higher-trust conversion paths.' },
          { title: 'Medicare leads', text: 'Clear commercial page for Medicare traffic, seasonality, and buyer questions.' },
          { title: 'ACA and life insurance leads', text: 'Search-friendly pages that explain fit, expectations, and next steps quickly.' },
        ],
      },
      {
        kind: 'list',
        title: 'Why this page matters',
        items: [
          'Clarifies what kinds of insurance lead services are available',
          'Creates internal links into each lead-type page',
          'Supports SEO for broad lead-generation terms',
          'Moves visitors toward pricing, proof, and direct contact',
        ],
      },
    ],
  },
  'final-expense-leads': {
    slug: '/final-expense-leads',
    eyebrow: 'Lead type page',
    title: 'Final expense leads for agents who need a clearer offer, stronger trust, and a cleaner buying path.',
    summary:
      'This page should answer what the leads are, who they fit, and why the buying experience feels more credible than a generic list-seller page.',
    primaryCta: { label: 'See pricing options', href: '/pricing' },
    secondaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'cards', title: 'What this page should cover', items: [
        { title: 'Lead quality', text: 'Explain intent level, form detail, and what makes the lead valuable.' },
        { title: 'Replacement clarity', text: 'Set expectations around invalid records and replacement terms.' },
        { title: 'Follow-up timing', text: 'Show why speed and trust matter after delivery.' },
      ] },
      { kind: 'faq', title: 'Final expense FAQ', items: [
        { question: 'What makes the page convert better?', answer: 'It answers fit, credibility, and pricing direction quickly instead of hiding the real questions buyers have.' },
        { question: 'Should pricing be visible?', answer: 'Pricing should be guided, clear enough to qualify interest, and supported by a call or calculator next step.' },
      ] },
    ],
  },
  'mortgage-protection-leads': {
    slug: '/mortgage-protection-leads',
    eyebrow: 'Lead type page',
    title: 'Mortgage protection leads positioned with clearer trust, qualification logic, and a stronger conversion path.',
    summary:
      'This page exists for search visibility and sales clarity, helping buyers understand what they are getting and why the process feels more reliable.',
    primaryCta: { label: 'Start pricing', href: '/lead-calculator' },
    secondaryCta: { label: 'View testimonials', href: '/testimonials' },
    sections: [
      { kind: 'list', title: 'Mortgage protection page needs', items: [
        'Audience fit and targeting clarity',
        'Lead qualification explanation',
        'Fast follow-up expectations',
        'Trust-building FAQ and proof',
      ] },
    ],
  },
  'iul-leads': {
    slug: '/iul-leads',
    eyebrow: 'Lead type page',
    title: 'IUL leads presented with a more premium, trust-heavy page structure for serious insurance buyers.',
    summary:
      'The page should feel informed and credible, not aggressive, because the audience usually needs more explanation and confidence before action.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'cards', title: 'IUL page priorities', items: [
        { title: 'Education-led trust', text: 'Explain the lead flow and fit without sounding vague or pushy.' },
        { title: 'Premium tone', text: 'Use stronger design and cleaner hierarchy to support a higher-trust offer.' },
        { title: 'Proof and next step', text: 'Pair better page education with pricing or call options.' },
      ] },
    ],
  },
  'annuity-leads': {
    slug: '/annuity-leads',
    eyebrow: 'Lead type page',
    title: 'Annuity leads for retirement-focused buyers who need clarity, trust, and a more established online impression.',
    summary:
      'This page should support annuity search intent while making the offer feel professional, stable, and well explained.',
    primaryCta: { label: 'Request pricing', href: '/pricing' },
    sections: [
      { kind: 'list', title: 'Annuity page priorities', items: [
        'Retirement-focused messaging',
        'Clear explanation of who the leads fit',
        'Proof and credibility signals',
        'A strong CTA toward quote or call',
      ] },
    ],
  },
  'medicare-leads': {
    slug: '/medicare-leads',
    eyebrow: 'Lead type page',
    title: 'Medicare leads with a cleaner commercial page for seasonal demand, trust concerns, and buyer questions.',
    summary:
      'The page should work for SEO and conversion by making the service understandable quickly and pairing it with proof and next-step clarity.',
    primaryCta: { label: 'View proof', href: '/testimonials' },
    secondaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'list', title: 'Medicare page needs', items: [
        'Eligibility and fit context',
        'Service expectations',
        'Trust and compliance support',
        'A clear route to pricing or direct contact',
      ] },
    ],
  },
  'aca-leads': {
    slug: '/aca-leads',
    eyebrow: 'Lead type page',
    title: 'ACA leads with clearer service language, commercial SEO structure, and a stronger path to inquiry.',
    summary:
      'This page should explain the audience, the lead type, and the next step in a clean way that reduces confusion and improves trust.',
    primaryCta: { label: 'Start pricing', href: '/lead-calculator' },
    sections: [
      { kind: 'list', title: 'ACA page priorities', items: [
        'Clear explanation of the offer',
        'Search-friendly structure and headings',
        'Proof and FAQ support',
        'A strong CTA toward quote or call',
      ] },
    ],
  },
  'life-insurance-leads': {
    slug: '/life-insurance-leads',
    eyebrow: 'Lead type page',
    title: 'Life insurance leads supported by premium sales copy, stronger proof, and a cleaner route to pricing or inquiry.',
    summary:
      'This page should cover broad life insurance lead demand and connect that search traffic into the rest of the Upthrive lead-generation system.',
    primaryCta: { label: 'Request pricing', href: '/pricing' },
    secondaryCta: { label: 'See all lead types', href: '/insurance-leads' },
    sections: [
      { kind: 'cards', title: 'What the life insurance leads page should do', items: [
        { title: 'Capture broad search demand', text: 'Rank for wider life insurance lead terms without feeling generic.' },
        { title: 'Explain the offer fast', text: 'Make fit, quality, and next-step expectations obvious quickly.' },
        { title: 'Link to deeper pages', text: 'Support internal SEO and discovery into more specific lead categories.' },
      ] },
    ],
  },
  'exclusive-leads': {
    slug: '/exclusive-leads',
    eyebrow: 'Lead type page',
    title: 'Exclusive leads explained with stronger credibility, clearer expectations, and a more premium buying experience.',
    summary:
      'This page should handle one of the biggest buying questions directly: what makes exclusive leads different, and why should the visitor trust the offer.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'faq', title: 'Exclusive lead FAQ', items: [
        { question: 'What should this page make clear fast?', answer: 'How exclusivity works, what buyers should expect, and why the process feels more trustworthy than a vague lead marketplace.' },
        { question: 'Why is this page useful for SEO?', answer: 'It targets a high-intent term and helps qualify visitors who are specifically comparing lead types.' },
      ] },
    ],
  },
  'insurance-recruiting-leads': {
    slug: '/insurance-recruiting-leads',
    eyebrow: 'Recruiting hub',
    title: 'Insurance recruiting pages for agency owners who need better candidate flow, better trust, and cleaner appointment paths.',
    summary:
      'This section should support recruiting SEO, explain the offer clearly, and move agency owners toward a call, quote, or appointment-setting discussion.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    secondaryCta: { label: 'View recruiting pages', href: '/agency-growth' },
    sections: [
      { kind: 'cards', title: 'Recruiting page set', items: [
        { title: 'Recruiting appointment setting', text: 'A page for booked interviews and cleaner recruiting follow-up systems.' },
        { title: 'Agency growth', text: 'A page for owners focused on team building and recruiting momentum.' },
        { title: '1099 agent recruiting', text: 'A dedicated page for independent-contractor recruiting search intent.' },
        { title: 'Insurance recruiting leads', text: 'The broad page that explains the category and links to the deeper routes.' },
      ] },
      { kind: 'list', title: 'Why recruiting pages matter', items: [
        'Explain the recruiting offer clearly',
        'Support search for recruiting-related terms',
        'Push serious agency owners toward calls or quote requests',
        'Show proof and process instead of vague agency language',
      ] },
    ],
  },
  'recruiting-appointment-setting': {
    slug: '/recruiting-appointment-setting',
    eyebrow: 'Recruiting service page',
    title: 'Recruiting appointment setting for agencies that need more candidate conversations, not just more traffic.',
    summary:
      'This page should explain how Upthrive can support candidate flow after interest is generated and help agencies book more real recruiting conversations.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'list', title: 'Page priorities', items: [
        'Define what a booked recruiting appointment means',
        'Clarify who the service is for',
        'Connect it to recruiting funnels and follow-up',
        'Make the next step obvious',
      ] },
    ],
  },
  'agency-growth': {
    slug: '/agency-growth',
    eyebrow: 'Recruiting service page',
    title: 'Agency growth pages that connect recruiting, trust, and booked conversations into one clearer sales system.',
    summary:
      'This page should speak to agency owners who are trying to grow headcount and need a better online recruiting and lead-generation presence.',
    primaryCta: { label: 'View recruiting proof', href: '/testimonials' },
    secondaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'cards', title: 'Agency growth page roles', items: [
        { title: 'Recruiting clarity', text: 'Explain how recruiting support fits into broader growth goals.' },
        { title: 'Trust building', text: 'Make the business look more established and worth responding to.' },
        { title: 'Conversion path', text: 'Push owners toward calls, quote requests, or recruiting discussions.' },
      ] },
    ],
  },
  '1099-agent-recruiting': {
    slug: '/1099-agent-recruiting',
    eyebrow: 'Recruiting service page',
    title: '1099 agent recruiting pages that explain the offer clearly and help agency owners attract better-fit candidates.',
    summary:
      'This page should support recruiting SEO while making the path from traffic to booked recruiting call feel more direct and credible.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'list', title: '1099 recruiting page priorities', items: [
        'Search-friendly recruiting structure',
        'Clear fit and audience language',
        'Proof and process explanation',
        'A stronger route to call or contact',
      ] },
    ],
  },
  'appointment-setting': {
    slug: '/appointment-setting',
    eyebrow: 'Core service page',
    title: 'Appointment setting pages that explain the service clearly and show how it supports lead generation and recruiting outcomes.',
    summary:
      'This page is for visitors who need help turning interest into more booked conversations, whether the goal is client acquisition or recruiting.',
    primaryCta: { label: 'Start pricing', href: '/lead-calculator' },
    secondaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'cards', title: 'What appointment setting should communicate', items: [
        { title: 'Booked-call focus', text: 'The service exists to create more real conversations, not vanity metrics.' },
        { title: 'Lead follow-up support', text: 'It fits naturally into the broader lead and recruiting system.' },
        { title: 'Sales readiness', text: 'The page should attract people who are serious enough to keep moving.' },
      ] },
    ],
  },
  pricing: {
    slug: '/pricing',
    eyebrow: 'Pricing and scope',
    title: 'Pricing pages that help insurance buyers estimate fit, understand scope, and keep moving toward a quote or call.',
    summary:
      'Pricing visibility matters because it reduces uncertainty. Upthrive uses premium pricing pages and calculator flows to help visitors self-qualify without losing momentum.',
    primaryCta: { label: 'Open the calculator', href: '/lead-calculator' },
    secondaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'cards', title: 'What affects pricing', items: [
        { title: 'Lead type or service', text: 'Insurance leads, recruiting support, and appointment setting all change the engagement shape.' },
        { title: 'Volume and geography', text: 'Quantity, target states, and routing logic influence pricing and complexity.' },
        { title: 'Add-ons', text: 'Proof systems, content depth, follow-up paths, and booking logic all affect scope.' },
        { title: 'Future systems', text: 'Analytics, CMS, automation, and deeper CRM flows can be staged in later.' },
      ] },
      { kind: 'callout', title: 'Need a fast estimate before a call?', description: 'Use the calculator flow to get directional pricing and then move into a quote or strategy conversation.', ctaLabel: 'Open the calculator', ctaHref: '/lead-calculator' },
    ],
  },
  'lead-calculator': {
    slug: '/lead-calculator',
    eyebrow: 'Calculator',
    title: 'A mobile-friendly pricing calculator that helps buyers estimate cost, compare options, and move toward a quote or booked call.',
    summary:
      'This page should feel stronger than a spreadsheet. It needs clear selections, visual hierarchy, estimate logic, add-on support, and a strong next-step CTA.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    secondaryCta: { label: 'Contact Upthrive', href: '/contact' },
    sections: [
      { kind: 'list', title: 'Calculator requirements', items: [
        'Lead cost and total estimate visibility',
        'Add-on options and quantity tiers',
        'State or geography selection',
        'A clear route to quote request or booked call',
      ] },
    ],
  },
  testimonials: {
    slug: '/testimonials',
    eyebrow: 'Proof and testimonials',
    title: 'Proof blocks that reduce skepticism and make Upthrive feel more legitimate, premium, and trustworthy.',
    summary:
      'This page should support written testimonials, screenshot proof, video proof, case-study structure, and optional client logos over time.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'cards', title: 'Proof formats the site should support', items: [
        { title: 'Written testimonials', text: 'Short quotes that reinforce lead quality, trust, and booked-call outcomes.' },
        { title: 'Screenshot proof', text: 'Simple visual evidence that supports claims without turning the page into clutter.' },
        { title: 'Video testimonials', text: 'Stronger proof blocks that can sit on the page or in case-study style sections.' },
        { title: 'Case studies', text: 'Narrative proof for visitors who need more context before they believe the value.' },
      ] },
      { kind: 'faq', title: 'Proof FAQ', items: [
        { question: 'What should proof do on this site?', answer: 'Make the business feel more credible, reduce hesitation, and support a stronger next-step decision.' },
        { question: 'Why have a dedicated testimonials page?', answer: 'It gives cautious buyers a clear place to validate claims without forcing all proof into the homepage.' },
      ] },
    ],
  },
  about: {
    slug: '/about',
    eyebrow: 'About Upthrive',
    title: 'A clearer story for why Upthrive exists and who it helps in the insurance space.',
    summary:
      'The about page should humanize the brand, make the positioning feel intentional, and explain why the system is built around trust, SEO structure, and conversion.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'list', title: 'What the about page should cover', items: [
        'Why Upthrive focuses on insurance agents and agency owners',
        'Why SEO and conversion need to work together',
        'How proof, pricing, and trust shape the site strategy',
        'Why the platform is designed to grow into a bigger content system later',
      ] },
    ],
  },
  contact: {
    slug: '/contact',
    eyebrow: 'Contact and quote requests',
    title: 'A contact page that helps serious insurance visitors submit details and move into the right next conversation.',
    summary:
      'This page should support lead capture for agents, agency owners, and recruiting-focused visitors while staying easy to understand on mobile.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'list', title: 'Lead capture fields the system should support', items: [
        'Name, email, phone, and company or agency name',
        'Service interest and budget range',
        'Target states or geography',
        'Pain points, goals, and notes',
      ] },
    ],
  },
  'book-a-call': {
    slug: '/book-a-call',
    eyebrow: 'Book a call',
    title: 'A booking page that helps serious visitors move from interest into a call, quote discussion, or next-step sales conversation.',
    summary:
      'This page should feel premium, clear, and direct. It exists to route stronger leads into a conversation without friction.',
    primaryCta: { label: 'Start the call request', href: '/contact' },
    sections: [
      { kind: 'cards', title: 'What the booking flow should qualify', items: [
        { title: 'Service interest', text: 'Which area the visitor cares about most, from leads to recruiting to pricing.' },
        { title: 'Business context', text: 'Agency size, target states, current funnel, and main challenge.' },
        { title: 'Readiness', text: 'Whether the visitor needs a quick estimate, a call, or a deeper quote conversation.' },
      ] },
    ],
  },
  resources: {
    slug: '/resources',
    eyebrow: 'Resources',
    title: 'An SEO-ready resources hub for insurance lead generation, recruiting, appointment setting, pricing, and trust-building content.',
    summary:
      'The resources section should support search visibility, internal linking, and future CMS-driven content without forcing a redesign later.',
    primaryCta: { label: 'Read the blog', href: '/blog' },
    secondaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'cards', title: 'Content categories to support', items: [
        { title: 'Insurance lead generation', text: 'Lead quality, buyer questions, and commercial service education.' },
        { title: 'Recruiting campaigns', text: 'How agencies can attract better candidates and improve recruiting follow-up.' },
        { title: 'Appointment setting', text: 'How booked-call systems support both leads and recruiting.' },
        { title: 'Pricing and calculators', text: 'How to qualify visitors better with stronger estimate and quote flows.' },
        { title: 'Proof and trust', text: 'How insurance brands build a more credible online presence.' },
        { title: 'Legal and compliance', text: 'Supportive content around privacy, replacement, and responsible marketing language.' },
      ] },
      { kind: 'list', title: 'Editable content areas later', items: [
        'Site settings and CTA text',
        'Service pages and testimonials',
        'Blog posts and policies',
        'FAQ items and calculator rules',
      ] },
    ],
  },
  blog: {
    slug: '/blog',
    eyebrow: 'Blog and SEO content',
    title: 'A blog structure built to support SEO, internal linking, and stronger sales conversations for insurance-focused services.',
    summary:
      'The blog should support the site as a content system, not just as a decorative publishing area. Each post should connect back to service pages and conversion goals.',
    primaryCta: { label: 'View resources', href: '/resources' },
    secondaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'list', title: 'Starter content themes', items: [
        'Insurance leads and lead quality',
        'Recruiting and agency growth',
        'Appointment setting and follow-up',
        'Pricing visibility and estimate flows',
        'Trust, proof, and website conversion',
      ] },
    ],
  },
  compliance: {
    slug: '/compliance',
    eyebrow: 'Compliance and trust',
    title: 'Compliance content that supports trust, reduces confusion, and makes the business look more responsible online.',
    summary:
      'This page should frame compliance as part of a stronger trust system, not as dead legal weight. It helps visitors feel safer about the brand and the next step.',
    primaryCta: { label: 'Read the replacement policy', href: '/replacement-policy' },
    secondaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'list', title: 'Topics to support here', items: [
        'Consent and contact expectations',
        'Replacement and refund clarity',
        'Responsible claims and positioning',
        'What visitors should expect after inquiry',
      ] },
    ],
  },
  'replacement-policy': {
    slug: '/replacement-policy',
    eyebrow: 'Replacement policy',
    title: 'A replacement policy page that sets expectations clearly and helps reduce disputes later.',
    summary:
      'This route matters because buyers want trust before purchase. A visible policy makes the business feel more legitimate and easier to work with.',
    primaryCta: { label: 'View pricing', href: '/pricing' },
    sections: [
      { kind: 'cards', title: 'Policy areas to clarify', items: [
        { title: 'Invalid records', text: 'Define what counts as unusable or invalid for replacement review.' },
        { title: 'Time window', text: 'Make the replacement request window and process easy to understand.' },
        { title: 'Documentation', text: 'Clarify what evidence is needed and how the request should be submitted.' },
      ] },
    ],
  },
  privacy: {
    slug: '/privacy-policy',
    eyebrow: 'Privacy policy',
    title: 'A privacy policy route ready for final approved legal language.',
    summary:
      'The route should stay in place now so the public site can launch cleanly and receive final legal content later without changing structure.',
    primaryCta: { label: 'Contact Upthrive', href: '/contact' },
    sections: [
      { kind: 'list', title: 'Privacy topics to finalize', items: ['What data is collected', 'How the data is used', 'Third-party tools and embeds', 'User rights', 'How to contact the business'] },
    ],
  },
  terms: {
    slug: '/terms',
    eyebrow: 'Terms',
    title: 'A terms page route ready for final legal and service language.',
    summary:
      'This route keeps the legal structure complete while detailed terms are finalized later.',
    primaryCta: { label: 'Contact Upthrive', href: '/contact' },
    sections: [
      { kind: 'list', title: 'Terms topics to finalize', items: ['Service terms', 'Payment terms', 'Limitations and disclaimers', 'User responsibilities', 'Dispute and policy language'] },
    ],
  },
  cookie: {
    slug: '/cookie-policy',
    eyebrow: 'Cookie policy',
    title: 'A cookie policy route ready for final consent and tracking language.',
    summary:
      'This route supports launch completeness now and can be updated later once the exact analytics and tracking stack is finalized.',
    primaryCta: { label: 'View privacy policy', href: '/privacy-policy' },
    sections: [
      { kind: 'list', title: 'Cookie topics to finalize', items: ['Necessary cookies', 'Analytics cookies', 'Marketing cookies', 'Consent controls', 'How to change settings later'] },
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
  '/life-insurance-leads',
  '/exclusive-leads',
  '/insurance-recruiting-leads',
  '/recruiting-appointment-setting',
  '/agency-growth',
  '/1099-agent-recruiting',
  '/appointment-setting',
  '/pricing',
  '/lead-calculator',
  '/testimonials',
  '/about',
  '/contact',
  '/book-a-call',
  '/resources',
  '/blog',
  '/compliance',
  '/replacement-policy',
  '/privacy-policy',
  '/terms',
  '/cookie-policy',
];
