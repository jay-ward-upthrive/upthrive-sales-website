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
    slug: 'exclusive-vs-shared-leads',
    title: 'Exclusive vs Shared Insurance Leads: What Agents Should Know',
    summary: 'A practical explainer for buyers comparing lead quality, exclusivity, and conversion expectations.',
    category: 'Insurance Lead Generation',
    publishedAt: '2026-07-05',
    body: [
      'Use this article to explain the real difference between exclusive and shared leads.',
      'Keep the writing focused on process, expectations, and follow-up, not hype.',
    ],
  },
  {
    slug: 'speed-to-lead',
    title: 'How Fast Should You Call a New Insurance Lead?',
    summary: 'A conversion-focused guide that ties response speed to better lead outcomes.',
    category: 'Lead Follow-Up',
    publishedAt: '2026-07-05',
    body: [
      'This post should show why speed matters and how teams can build a better follow-up rhythm.',
      'It is a strong internal-link target for the recruiting and appointment-setting pages too.',
    ],
  },
  {
    slug: 'recruiting-agents',
    title: 'How to Recruit More Insurance Agents Without Wasting Time',
    summary: 'Position the recruiting offer as a cleaner pipeline with better qualification.',
    category: 'Recruiting Agents',
    publishedAt: '2026-07-05',
    body: [
      'This article should support the recruiting silo and route people to book a call.',
      'It should talk about candidate quality, screening, and booked conversations.',
    ],
  },
];
