import { ContentPage } from '@/components/content-page';
import { pages } from '@/data/pages';

export const metadata = {
  title: pages['1099-agent-recruiting'].title,
  description: pages['1099-agent-recruiting'].summary,
};

export default function Page() {
  return <ContentPage content={pages['1099-agent-recruiting']} />;
}
