import type { MetadataRoute } from 'next';
import { BROKER_SLUGS } from '@/lib/brokers';

const SITE_ORIGIN = 'https://binarybrokerhub.com';

const STATIC_ROUTES: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
}> = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/brokers', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/methodology', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/editorial-team', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/risk-disclosure', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/privacy', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/contact', priority: 0.5, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${SITE_ORIGIN}/en${r.path === '/' ? '' : r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const brokerEntries: MetadataRoute.Sitemap = BROKER_SLUGS.map((slug) => ({
    url: `${SITE_ORIGIN}/en/brokers/${slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.95,
  }));

  return [...staticEntries, ...brokerEntries];
}
