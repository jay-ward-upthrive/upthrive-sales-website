import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['resources'].title,
  description: pages['resources'].summary,
};

export default function Page() {
  return <ContentPage content={pages['resources']} />;
}
