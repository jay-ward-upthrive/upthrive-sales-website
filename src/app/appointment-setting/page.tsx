import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['appointment-setting'].title,
  description: pages['appointment-setting'].summary,
};

export default function Page() {
  return <ContentPage content={pages['appointment-setting']} />;
}
