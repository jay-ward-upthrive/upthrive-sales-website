import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['blog'].title,
  description: pages['blog'].summary,
};

export default function Page() {
  return <ContentPage content={pages['blog']} />;
}
