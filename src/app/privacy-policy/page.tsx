import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['privacy'].title,
  description: pages['privacy'].summary,
};

export default function Page() {
  return <ContentPage content={pages['privacy']} />;
}
