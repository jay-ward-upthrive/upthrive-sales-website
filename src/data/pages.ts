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
    title: 'The main Upthrive offers for insurance businesses that need more leads, more trust, and more booked calls.',
    summary:
      'Upthrive is positioned around insurance lead generation, recruiting campaigns, appointment setting, pricing visibility, proof, and stronger sales conversations.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    secondaryCta: { label: 'View pricing', href: '/pricing' },
    sections: [
      {
        kind: 'cards',
        title: 'What Upthrive helps with',
        items: [
          { title: 'Insurance lead generation', text: 'Clear lead offers for final expense, mortgage protection, IUL, annuity, Medicare, ACA, life, and exclusive lead demand.' },
          { title: 'Recruiting campaigns', text: 'Recruiting pages and offers for agency growth, 1099 recruiting, and better candidate flow.' },
          { title: 'Appointment setting', text: 'Booked-call support that helps turn interest into real sales or recruiting conversations.' },
          { title: 'Pricing visibility', text: 'Stronger pricing pages and estimate flows that help buyers self-qualify faster.' },
          { title: 'Proof and trust', text: 'Testimonials, screenshot proof, compliance pages, and credibility systems that reduce skepticism.' },
          { title: 'Resources and content', text: 'Blog and resource structure that supports trust, education, and future content growth.' },
        ],
      },
      {
        kind: 'list',
        title: 'What the system supports later',
        items: [
          'CMS-driven updates for pages, testimonials, blog posts, policies, and FAQ items',
          'Form tracking, CTA tracking, and source tracking',
          'Calculator rules and pricing updates',
          'Automation and CRM handoff later',
        ],
      },
    ],
  },
  'insurance-leads': {
    slug: '/insurance-leads',
    eyebrow: 'Insurance leads',
    title: 'Insurance lead generation for agents and agencies that need better pipeline quality and clearer buying paths.',
    summary:
      'This is the broad commercial page for insurance lead demand, with deeper routes for specific lead categories and higher-intent buyer questions.',
    primaryCta: { label: 'Start pricing', href: '/lead-calculator' },
    secondaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      {
        kind: 'cards',
        title: 'Lead types in the system',
        items: [
          { title: 'Final expense leads', text: 'Built for buyers who care about cost clarity, quality expectations, and follow-up speed.' },
          { title: 'Mortgage protection leads', text: 'Positioned around homeowner fit, qualification, and cleaner next steps.' },
          { title: 'IUL leads', text: 'Framed with stronger trust and a more premium sales tone.' },
          { title: 'Annuity leads', text: 'Structured for retirement-focused demand and higher-trust conversations.' },
          { title: 'Medicare leads', text: 'Supported by proof, service expectations, and direct next-step clarity.' },
          { title: 'ACA, life, and exclusive leads', text: 'Broader commercial routes that help buyers compare demand types and move toward a quote.' },
        ],
      },
      {
        kind: 'faq',
        title: 'Insurance lead FAQ',
        items: [
          { question: 'Who is this page for?', answer: 'Insurance agents, agency owners, and sales teams evaluating lead options and trying to understand fit quickly.' },
          { question: 'What should this page do well?', answer: 'Explain the offer clearly, connect into deeper lead-type pages, and move visitors toward pricing, proof, or a call.' },
        ],
      },
    ],
  },
  'final-expense-leads': {
    slug: '/final-expense-leads',
    eyebrow: 'Lead type',
    title: 'Final expense leads for teams that want clearer expectations, stronger trust, and cleaner pricing conversations.',
    summary:
      'This page should answer what the lead type is, who it fits, and why the buying experience feels more credible than a vague marketplace pitch.',
    primaryCta: { label: 'See pricing options', href: '/pricing' },
    secondaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'cards', title: 'What buyers care about', items: [
        { title: 'Lead quality', text: 'Explain intent level, routing, and what makes the lead useful in practice.' },
        { title: 'Replacement clarity', text: 'Set expectations around invalid records and replacement terms.' },
        { title: 'Follow-up timing', text: 'Show why speed and process matter after delivery.' },
      ] },
    ],
  },
  'mortgage-protection-leads': {
    slug: '/mortgage-protection-leads',
    eyebrow: 'Lead type',
    title: 'Mortgage protection leads positioned with clearer trust, qualification logic, and a stronger path to inquiry.',
    summary:
      'This page should make the offer and fit obvious quickly while helping buyers understand what kind of conversation they are paying for.',
    primaryCta: { label: 'Start pricing', href: '/lead-calculator' },
    secondaryCta: { label: 'View testimonials', href: '/testimonials' },
    sections: [
      { kind: 'list', title: 'Mortgage protection priorities', items: [
        'Audience fit and targeting clarity',
        'Lead qualification explanation',
        'Fast follow-up expectations',
        'A clear next step toward pricing or contact',
      ] },
    ],
  },
  'iul-leads': {
    slug: '/iul-leads',
    eyebrow: 'Lead type',
    title: 'IUL leads presented with stronger trust, cleaner explanation, and a more premium sales posture.',
    summary:
      'The audience for this page usually needs more confidence and context before taking action, so the page should feel informed and established.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'cards', title: 'IUL page priorities', items: [
        { title: 'Education-led trust', text: 'Explain the lead flow and fit without sounding pushy.' },
        { title: 'Premium tone', text: 'Use stronger hierarchy and cleaner proof.' },
        { title: 'Proof and next step', text: 'Pair page clarity with direct pricing or call options.' },
      ] },
    ],
  },
  'annuity-leads': {
    slug: '/annuity-leads',
    eyebrow: 'Lead type',
    title: 'Annuity leads for retirement-focused buyers who need clarity, trust, and a stronger buying path.',
    summary:
      'This page should make the offer feel stable, professional, and well explained for a higher-trust audience.',
    primaryCta: { label: 'Request pricing', href: '/pricing' },
    sections: [
      { kind: 'list', title: 'Annuity page priorities', items: [
        'Retirement-focused positioning',
        'Clear explanation of fit',
        'Proof and credibility signals',
        'A strong CTA toward quote or call',
      ] },
    ],
  },
  'medicare-leads': {
    slug: '/medicare-leads',
    eyebrow: 'Lead type',
    title: 'Medicare leads with clearer service language, stronger proof, and cleaner next-step guidance.',
    summary:
      'The page should answer the biggest buyer questions quickly and help them move toward proof, pricing, or a call without confusion.',
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
    eyebrow: 'Lead type',
    title: 'ACA leads with clearer offer language and a stronger path to inquiry.',
    summary:
      'This page should explain the audience, the lead type, and the next step in a clean way that reduces confusion and improves trust.',
    primaryCta: { label: 'Start pricing', href: '/lead-calculator' },
    sections: [
      { kind: 'list', title: 'ACA page priorities', items: [
        'Clear explanation of the offer',
        'Proof and FAQ support',
        'Qualification expectations',
        'A strong CTA toward quote or call',
      ] },
    ],
  },
  'life-insurance-leads': {
    slug: '/life-insurance-leads',
    eyebrow: 'Lead type',
    title: 'Life insurance leads supported by stronger proof, clearer expectations, and a cleaner route to pricing or contact.',
    summary:
      'This page should cover broad life insurance lead demand and connect buyers into the rest of the Upthrive lead-generation system.',
    primaryCta: { label: 'Request pricing', href: '/pricing' },
    secondaryCta: { label: 'See all lead types', href: '/insurance-leads' },
    sections: [
      { kind: 'cards', title: 'What this page should do', items: [
        { title: 'Capture broad demand', text: 'Speak to wider life insurance lead interest without sounding generic.' },
        { title: 'Explain the offer fast', text: 'Make fit, quality, and next-step expectations obvious quickly.' },
        { title: 'Link to deeper routes', text: 'Support discovery into more specific lead categories.' },
      ] },
    ],
  },
  'exclusive-leads': {
    slug: '/exclusive-leads',
    eyebrow: 'Lead type',
    title: 'Exclusive leads explained with stronger credibility and clearer expectations.',
    summary:
      'This page should handle a major buying question directly: what makes exclusive leads different, and why should the buyer trust the offer.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'faq', title: 'Exclusive lead FAQ', items: [
        { question: 'What should this page make clear fast?', answer: 'How exclusivity works, what buyers should expect, and why the process feels more trustworthy than a vague lead marketplace.' },
        { question: 'Why does this page matter?', answer: 'It qualifies visitors who are actively comparing lead types and want a clearer buying path.' },
      ] },
    ],
  },
  'insurance-recruiting-leads': {
    slug: '/insurance-recruiting-leads',
    eyebrow: 'Recruiting hub',
    title: 'Insurance recruiting campaigns for agency owners who need better candidate flow and cleaner appointment paths.',
    summary:
      'This section should explain the recruiting offer clearly and move agency owners toward a call, quote request, or recruiting appointment-setting conversation.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    secondaryCta: { label: 'View recruiting pages', href: '/agency-growth' },
    sections: [
      { kind: 'cards', title: 'Recruiting page set', items: [
        { title: 'Recruiting appointment setting', text: 'Booked interviews and cleaner recruiting follow-up systems.' },
        { title: 'Agency growth', text: 'A page for owners focused on team growth and recruiting momentum.' },
        { title: '1099 agent recruiting', text: 'A dedicated route for independent-contractor recruiting demand.' },
        { title: 'Insurance recruiting campaigns', text: 'The broad page that explains the category and links to the deeper routes.' },
      ] },
    ],
  },
  'recruiting-appointment-setting': {
    slug: '/recruiting-appointment-setting',
    eyebrow: 'Recruiting service',
    title: 'Recruiting appointment setting for agencies that need more candidate conversations, not just more interest.',
    summary:
      'This page should explain how better booking support helps agencies turn candidate flow into real recruiting conversations.',
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
    eyebrow: 'Recruiting service',
    title: 'Agency growth support that connects recruiting, trust, and booked conversations into one clearer growth system.',
    summary:
      'This page should speak to owners who are trying to grow headcount and need a stronger recruiting offer and cleaner candidate path.',
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
    eyebrow: 'Recruiting service',
    title: '1099 agent recruiting that helps agency owners attract better-fit candidates and book more conversations.',
    summary:
      'This page should make the audience, opportunity, and next step obvious quickly for owners hiring independent agents.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'list', title: '1099 recruiting page priorities', items: [
        'Clear fit and audience language',
        'Proof and process explanation',
        'A stronger route to call or contact',
        'Booked-conversation focus',
      ] },
    ],
  },
  'appointment-setting': {
    slug: '/appointment-setting',
    eyebrow: 'Core service',
    title: 'Appointment setting that helps turn demand into more real conversations.',
    summary:
      'This page is for visitors who need help moving lead or recruiting interest into booked calls with better follow-up and less drop-off.',
    primaryCta: { label: 'Start pricing', href: '/lead-calculator' },
    secondaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'cards', title: 'What appointment setting should communicate', items: [
        { title: 'Booked-call focus', text: 'The service exists to create more real conversations, not vanity metrics.' },
        { title: 'Lead follow-up support', text: 'It fits naturally into broader lead and recruiting systems.' },
        { title: 'Sales readiness', text: 'The page should attract people who are serious enough to keep moving.' },
      ] },
    ],
  },
  pricing: {
    slug: '/pricing',
    eyebrow: 'Pricing and scope',
    title: 'Pricing pages that help buyers estimate fit, understand scope, and move toward a quote or call.',
    summary:
      'Pricing visibility matters because it reduces uncertainty. Upthrive uses stronger pricing pages and estimate flows to help serious buyers self-qualify faster.',
    primaryCta: { label: 'Open the calculator', href: '/lead-calculator' },
    secondaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'cards', title: 'What affects pricing', items: [
        { title: 'Lead type or service', text: 'Insurance leads, recruiting support, and appointment setting all scope differently.' },
        { title: 'Volume and geography', text: 'Quantity, target states, and routing complexity influence pricing and operations.' },
        { title: 'Add-ons', text: 'Proof systems, follow-up support, and additional services affect scope.' },
        { title: 'Future systems', text: 'Tracking, automation, and deeper handoff logic can be staged in later.' },
      ] },
      { kind: 'callout', title: 'Need a fast estimate before a call?', description: 'Use the calculator to get directional pricing and then move into a quote or strategy conversation.', ctaLabel: 'Open the calculator', ctaHref: '/lead-calculator' },
    ],
  },
  'lead-calculator': {
    slug: '/lead-calculator',
    eyebrow: 'Calculator',
    title: 'A mobile-friendly pricing calculator that helps buyers estimate cost and keep moving toward a quote or booked call.',
    summary:
      'This page should feel stronger than a spreadsheet. It needs clear selections, estimate logic, add-on support, and a direct next-step CTA.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    secondaryCta: { label: 'Contact Upthrive', href: '/contact' },
    sections: [
      { kind: 'list', title: 'Calculator requirements', items: [
        'Lead cost and total estimate visibility',
        'Add-on options and volume tiers',
        'State or geography selection',
        'A clear route to quote request or booked call',
      ] },
    ],
  },
  testimonials: {
    slug: '/testimonials',
    eyebrow: 'Proof',
    title: 'Proof that reduces skepticism and makes Upthrive feel more legitimate, premium, and trustworthy.',
    summary:
      'This page should support written testimonials, screenshot proof, video proof, case-study structure, and optional logos over time.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'cards', title: 'Proof formats the system should support', items: [
        { title: 'Written testimonials', text: 'Short quotes that reinforce lead quality, trust, and booked-call outcomes.' },
        { title: 'Screenshot proof', text: 'Simple visual evidence that supports claims without clutter.' },
        { title: 'Video testimonials', text: 'Stronger proof blocks for visitors who need more confidence.' },
        { title: 'Case studies', text: 'Narrative proof for visitors who want more context before they believe the value.' },
      ] },
    ],
  },
  about: {
    slug: '/about',
    eyebrow: 'About Upthrive',
    title: 'A clearer story for why Upthrive exists and who it helps in the insurance space.',
    summary:
      'The about page should humanize the brand, explain the focus on insurance growth, and show why the company is built around leads, recruiting, booked calls, pricing clarity, and trust.',
    primaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'list', title: 'What the about page should cover', items: [
        'Why Upthrive focuses on insurance agents and agency owners',
        'How lead generation and recruiting fit together',
        'Why pricing clarity and proof matter',
        'Why trust-building content supports the sales process',
      ] },
    ],
  },
  contact: {
    slug: '/contact',
    eyebrow: 'Contact',
    title: 'A contact page built to route serious buyers into the right next conversation.',
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
    title: 'A booking page that moves serious visitors into a clearer quote or sales conversation.',
    summary:
      'This page should qualify service interest, business context, budget direction, target states, and what the current funnel needs to do better.',
    primaryCta: { label: 'Start the call request', href: '/contact' },
    sections: [
      { kind: 'cards', title: 'What the booking flow should qualify', items: [
        { title: 'Service interest', text: 'Which area matters most, from leads to recruiting to pricing.' },
        { title: 'Business context', text: 'Agency size, target states, current funnel, and main challenge.' },
        { title: 'Readiness', text: 'Whether the visitor needs a quick estimate, a call, or a deeper quote conversation.' },
      ] },
    ],
  },
  resources: {
    slug: '/resources',
    eyebrow: 'Resources',
    title: 'A resources hub for insurance lead generation, recruiting, appointment setting, pricing, and trust-building content.',
    summary:
      'The resources section should support education, internal linking, and future content growth without becoming fluff.',
    primaryCta: { label: 'Read the blog', href: '/blog' },
    secondaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'cards', title: 'Content categories to support', items: [
        { title: 'Insurance lead generation', text: 'Lead quality, buyer questions, and service education.' },
        { title: 'Recruiting campaigns', text: 'How agencies can attract better candidates and improve recruiting follow-up.' },
        { title: 'Appointment setting', text: 'How booked-call systems support both leads and recruiting.' },
        { title: 'Pricing and calculators', text: 'How to qualify buyers better with stronger estimate and quote flows.' },
        { title: 'Proof and trust', text: 'How insurance brands build a more credible presence.' },
        { title: 'Legal and compliance', text: 'Supportive content around privacy, replacement, and responsible marketing language.' },
      ] },
    ],
  },
  blog: {
    slug: '/blog',
    eyebrow: 'Blog',
    title: 'A blog structure built to support trust, education, and stronger sales conversations.',
    summary:
      'Each post should answer real buyer questions clearly and connect visitors back into services, pricing, proof, or contact paths.',
    primaryCta: { label: 'View resources', href: '/resources' },
    secondaryCta: { label: 'Book a strategy call', href: '/book-a-call' },
    sections: [
      { kind: 'list', title: 'Starter content themes', items: [
        'Insurance leads and lead quality',
        'Recruiting and agency growth',
        'Appointment setting and follow-up',
        'Pricing visibility and estimate flows',
        'Trust, proof, and buyer confidence',
      ] },
    ],
  },
  compliance: {
    slug: '/compliance',
    eyebrow: 'Compliance and trust',
    title: 'Compliance content that supports trust, reduces confusion, and makes the business feel more responsible.',
    summary:
      'This page should frame compliance as part of a stronger trust system and help visitors feel safer about the brand and the next step.',
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
      'A visible policy makes the business feel more legitimate and easier to work with before purchase.',
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
      { kind: 'list', title: 'Privacy topics to finalize', items: ['What data is collected', 'How the data is used', 'Third-party tools', 'User rights', 'How to contact the business'] },
    ],
  },
  terms: {
    slug: '/terms',
    eyebrow: 'Terms',
    title: 'A terms route ready for final legal and service language.',
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
      'This route supports launch completeness now and can be updated later once the exact tracking stack is finalized.',
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
