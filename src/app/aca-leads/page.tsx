import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['aca-leads'].title,
  description: pages['aca-leads'].summary,
};

export default function Page() {
  return <ContentPage content={pages['aca-leads']} />;
}
