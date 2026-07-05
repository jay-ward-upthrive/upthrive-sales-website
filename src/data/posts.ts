export type Post = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishedAt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: 'why-insurance-websites-fail-to-convert',
    title: 'Why Insurance Websites Get Traffic but Not Enough Calls',
    summary: 'A practical look at why trust breaks down before the call to action ever has a chance to work.',
    category: 'Website Conversion',
    publishedAt: '2026-07-05',
    body: [
      'Many insurance websites are not losing because nobody visits. They are losing because the page feels generic, outdated, or unclear within the first few seconds.',
      'If the visitor cannot quickly understand who the agency helps, why it is credible, and what should happen next, trust stays low and action slows down.',
      'A better website does not just describe services. It earns confidence and moves people toward a call with less hesitation.',
    ],
  },
  {
    slug: 'how-to-build-trust-fast-online',
    title: 'How Insurance Agents Can Build Trust Faster Online',
    summary: 'The strongest trust signals are often simple: message clarity, proof, structure, and a cleaner next step.',
    category: 'Trust Building',
    publishedAt: '2026-07-05',
    body: [
      'Trust online usually breaks down before a visitor reaches the contact page. The design, message, and calls to action all shape that first impression.',
      'Clear positioning, a professional visual system, and visible proof reduce uncertainty fast. That matters even more in insurance, where credibility drives action.',
      'A trust-focused site does not need to feel loud. It needs to feel clear, established, and easy to believe.',
    ],
  },
  {
    slug: 'from-form-submit-to-booked-call',
    title: 'From Form Submit to Booked Call: Where Most Websites Lose Momentum',
    summary: 'The conversion path does not end at the form. The handoff after the click matters just as much.',
    category: 'Follow-Up Systems',
    publishedAt: '2026-07-05',
    body: [
      'A website can earn the form fill and still lose the opportunity if the next step feels slow, confusing, or impersonal.',
      'Thank-you states, routing logic, scheduling flow, and follow-up messaging all shape whether the lead becomes a conversation.',
      'That is why Upthrive treats the site like a sales system instead of a static brochure.',
    ],
  },
];
