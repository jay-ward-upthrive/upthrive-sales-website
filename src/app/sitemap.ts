import type { MetadataRoute } from 'next';
import { routeOrder } from '@/data/pages';
import { site } from '@/data/site';
import { posts } from '@/data/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = routeOrder.map((route) => ({
    url: `${site.siteUrl}${route === '/' ? '' : route}`,
    lastModified: new Date(),
    changeFrequency: route === '/blog' || route === '/resources' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '/' ? 1 : route === '/services' || route === '/book-a-call' ? 0.9 : 0.7,
  }));

  const blogRoutes = posts.map((post) => ({
    url: `${site.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.55,
  }));

  return [...routes, ...blogRoutes];
}
