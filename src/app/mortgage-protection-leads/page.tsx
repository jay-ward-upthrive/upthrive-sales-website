import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['mortgage-protection-leads'].title,
  description: pages['mortgage-protection-leads'].summary,
};

export default function Page() {
  return <ContentPage content={pages['mortgage-protection-leads']} />;
}
