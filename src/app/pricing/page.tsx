import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['pricing'].title,
  description: pages['pricing'].summary,
};

export default function Page() {
  return <ContentPage content={pages['pricing']} />;
}
