import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['life-insurance-leads'].title,
  description: pages['life-insurance-leads'].summary,
};

export default function Page() {
  return <ContentPage content={pages['life-insurance-leads']} />;
}
