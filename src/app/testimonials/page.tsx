import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['testimonials'].title,
  description: pages['testimonials'].summary,
};

export default function Page() {
  return <ContentPage content={pages['testimonials']} />;
}
