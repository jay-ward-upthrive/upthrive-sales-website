import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['insurance-recruiting-leads'].title,
  description: pages['insurance-recruiting-leads'].summary,
};

export default function Page() {
  return <ContentPage content={pages['insurance-recruiting-leads']} />;
}
