import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['lead-calculator'].title,
  description: pages['lead-calculator'].summary,
};

export default function Page() {
  return <ContentPage content={pages['lead-calculator']} />;
}
