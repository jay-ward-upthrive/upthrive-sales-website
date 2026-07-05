import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['recruiting-appointment-setting'].title,
  description: pages['recruiting-appointment-setting'].summary,
};

export default function Page() {
  return <ContentPage content={pages['recruiting-appointment-setting']} />;
}
