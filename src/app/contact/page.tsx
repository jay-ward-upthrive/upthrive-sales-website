import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['contact'].title,
  description: pages['contact'].summary,
};

export default function Page() {
  return <ContentPage content={pages['contact']} />;
}
