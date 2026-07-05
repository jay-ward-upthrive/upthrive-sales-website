import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['services'].title,
  description: pages['services'].summary,
};

export default function Page() {
  return <ContentPage content={pages['services']} />;
}
