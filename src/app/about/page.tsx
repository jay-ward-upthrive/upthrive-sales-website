import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['about'].title,
  description: pages['about'].summary,
};

export default function Page() {
  return <ContentPage content={pages['about']} />;
}
