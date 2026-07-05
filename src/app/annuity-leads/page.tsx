import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['annuity-leads'].title,
  description: pages['annuity-leads'].summary,
};

export default function Page() {
  return <ContentPage content={pages['annuity-leads']} />;
}
