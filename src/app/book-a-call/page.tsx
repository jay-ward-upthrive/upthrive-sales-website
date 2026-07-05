import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['book-a-call'].title,
  description: pages['book-a-call'].summary,
};

export default function Page() {
  return <ContentPage content={pages['book-a-call']} />;
}
