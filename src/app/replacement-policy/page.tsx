import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['replacement-policy'].title,
  description: pages['replacement-policy'].summary,
};

export default function Page() {
  return <ContentPage content={pages['replacement-policy']} />;
}
