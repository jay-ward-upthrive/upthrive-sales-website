import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['compliance'].title,
  description: pages['compliance'].summary,
};

export default function Page() {
  return <ContentPage content={pages['compliance']} />;
}
