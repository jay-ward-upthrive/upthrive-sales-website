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
    slug: 'why-insurance-lead-pages-do-not-convert',
    title: 'Why Insurance Lead Pages Get Traffic but Still Fail to Convert',
    summary: 'A practical breakdown of what happens when trust, clarity, and next-step structure are weak on a lead-generation page.',
    category: 'Insurance Lead Generation',
    publishedAt: '2026-07-05',
    body: [
      'Many insurance lead pages fail long before the form because the visitor cannot tell whether the offer is credible, specific, or worth trusting.',
      'The page has to explain what is being sold, who it is for, what proof exists, and what should happen next without burying the answer in fluff.',
      'When positioning, hierarchy, and CTA logic improve, the page starts working like a sales asset instead of a generic traffic destination.',
    ],
  },
  {
    slug: 'how-to-make-an-insurance-agency-look-more-legitimate-online',
    title: 'How to Make an Insurance Agency Look More Legitimate Online',
    summary: 'The strongest trust signals are usually message clarity, proof, design discipline, and visible next-step confidence.',
    category: 'Trust Building',
    publishedAt: '2026-07-05',
    body: [
      'Legitimacy online is not just a brand problem. It is a conversion problem because visitors do not take the next step when the site feels generic or uncertain.',
      'Clear service language, professional page structure, visible testimonials, and legal trust pages all help the business feel more established quickly.',
      'For insurance brands, that faster trust often matters more than any one visual trick or style choice.',
    ],
  },
  {
    slug: 'pricing-pages-that-help-insurance-buyers-self-qualify',
    title: 'Pricing Pages That Help Insurance Buyers Self-Qualify',
    summary: 'A better pricing experience reduces uncertainty and helps visitors move toward a quote or booked call with more confidence.',
    category: 'Pricing and Calculator',
    publishedAt: '2026-07-05',
    body: [
      'Visitors often disappear because pricing feels hidden, confusing, or impossible to estimate. A stronger pricing page reduces that friction.',
      'Good pricing content does not need to reveal every future variable. It needs to show enough structure for the visitor to understand fit and keep moving.',
      'That is why calculator logic, scope education, and CTA placement belong in the same conversation.',
    ],
  },
  {
    slug: 'recruiting-pages-for-agency-growth',
    title: 'Recruiting Pages That Support Insurance Agency Growth',
    summary: 'Recruiting pages should attract better-fit candidates and give agency owners a clearer online recruiting path.',
    category: 'Recruiting Campaigns',
    publishedAt: '2026-07-05',
    body: [
      'Recruiting traffic needs a different conversation than lead-generation traffic. The visitor is not buying leads. They are trying to grow a team.',
      'That means the page has to explain fit, opportunity, process, and next steps in a cleaner and more credible way.',
      'When recruiting pages are structured well, they support agency growth without feeling like an afterthought next to the rest of the business.',
    ],
  },
];
