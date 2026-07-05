import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['terms'].title,
  description: pages['terms'].summary,
};

export default function Page() {
  return <ContentPage content={pages['terms']} />;
}
