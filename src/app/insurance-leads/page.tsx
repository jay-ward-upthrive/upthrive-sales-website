import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['insurance-leads'].title,
  description: pages['insurance-leads'].summary,
};

export default function Page() {
  return <ContentPage content={pages['insurance-leads']} />;
}
