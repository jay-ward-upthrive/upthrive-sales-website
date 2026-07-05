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
    slug: 'how-to-improve-insurance-lead-quality',
    title: 'How Insurance Teams Can Improve Lead Quality Without Killing Volume',
    summary: 'A practical look at lead quality, qualification, speed, and what actually helps teams convert more of the demand they already buy.',
    category: 'Insurance Lead Generation',
    publishedAt: '2026-07-05',
    body: [
      'Lead quality usually breaks down when teams buy volume without clear qualification standards or a strong follow-up plan.',
      'The best lead systems make expectations clear, route demand fast, and help sales teams know what kind of conversation they are walking into.',
      'When qualification and follow-up improve together, lead quality stops feeling random and starts feeling manageable.',
    ],
  },
  {
    slug: 'how-agency-owners-can-recruit-better-agents',
    title: 'How Agency Owners Can Recruit Better Agents Without Wasting Time',
    summary: 'Recruiting gets easier when the offer is clearer, the screening path is stronger, and the booked conversation happens faster.',
    category: 'Recruiting Campaigns',
    publishedAt: '2026-07-05',
    body: [
      'Recruiting improves when agencies stop treating candidate flow like a generic blast and start treating it like a qualified pipeline.',
      'Stronger recruiting systems set expectations early, filter for fit, and move serious people into a real appointment faster.',
      'That usually creates better conversations and less wasted time for owners and recruiting teams.',
    ],
  },
  {
    slug: 'why-pricing-visibility-helps-book-more-calls',
    title: 'Why Pricing Visibility Helps Book More Calls',
    summary: 'Buyers move faster when they understand the rough shape of cost, quantity, and next steps before they ever talk to sales.',
    category: 'Pricing and Calculator',
    publishedAt: '2026-07-05',
    body: [
      'Unclear pricing creates hesitation. People may still be interested, but they slow down because they cannot tell whether the offer is realistic for them.',
      'A better pricing experience gives enough structure to qualify interest without pretending every deal is identical.',
      'That is why estimate flows and stronger pricing pages tend to help serious buyers move toward a real call faster.',
    ],
  },
  {
    slug: 'appointment-setting-that-supports-sales-teams',
    title: 'Appointment Setting That Actually Supports Sales Teams',
    summary: 'Booked calls matter more when the lead handoff, confirmation process, and next-step expectations are all cleaner.',
    category: 'Appointment Setting',
    publishedAt: '2026-07-05',
    body: [
      'Appointment setting works best when it is treated as part of the sales system instead of a disconnected add-on.',
      'Good handoff, reminder logic, and clear booking expectations all improve the quality of the conversation that happens next.',
      'That makes the service easier to trust and more useful to teams that care about real outcomes, not just calendar volume.',
    ],
  },
];
