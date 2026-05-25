import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://binarybrokerhub.com';
  const locales = ['en', 'ru', 'es'];
  const lastModified = new Date();

  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/quotex', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/pocket-option', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/iq-option', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/deriv', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/olymp-trade', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/binomo', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/expert-option', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/compare', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/blog/is-quotex-real-or-fake', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog/is-pocket-option-legit', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog/quotex-deposit-withdrawal', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog/pocket-option-withdrawal', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog/quotex-promo-code', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog/pocket-option-promo-code', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog/quotex-strategy', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog/pocket-option-copy-trading', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/tools/calculator', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/methodology', priority: 0.5, changeFrequency: 'monthly' as const },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    }
  }

  return entries;
}
