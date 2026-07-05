import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['cookie'].title,
  description: pages['cookie'].summary,
};

export default function Page() {
  return <ContentPage content={pages['cookie']} />;
}
