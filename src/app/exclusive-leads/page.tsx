import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['exclusive-leads'].title,
  description: pages['exclusive-leads'].summary,
};

export default function Page() {
  return <ContentPage content={pages['exclusive-leads']} />;
}
