import { MetadataRoute } from 'next';
import { site } from '@/data/site';

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.NODE_ENV === 'production';

  return {
    rules: isProd ? { userAgent: '*', allow: '/' } : { userAgent: '*', disallow: '/' },
    sitemap: `${site.siteUrl}/sitemap.xml`,
  };
}
