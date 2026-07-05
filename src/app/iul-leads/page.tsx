import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['iul-leads'].title,
  description: pages['iul-leads'].summary,
};

export default function Page() {
  return <ContentPage content={pages['iul-leads']} />;
}
