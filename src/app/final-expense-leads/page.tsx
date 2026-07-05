import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['final-expense-leads'].title,
  description: pages['final-expense-leads'].summary,
};

export default function Page() {
  return <ContentPage content={pages['final-expense-leads']} />;
}
