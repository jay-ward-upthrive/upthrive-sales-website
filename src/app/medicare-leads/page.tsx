import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['medicare-leads'].title,
  description: pages['medicare-leads'].summary,
};

export default function Page() {
  return <ContentPage content={pages['medicare-leads']} />;
}
