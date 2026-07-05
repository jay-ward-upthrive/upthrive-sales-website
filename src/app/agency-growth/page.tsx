import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['agency-growth'].title,
  description: pages['agency-growth'].summary,
};

export default function Page() {
  return <ContentPage content={pages['agency-growth']} />;
}
