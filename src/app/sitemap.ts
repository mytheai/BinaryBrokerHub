import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.binarybrokerhub.com';
  const locales = ['en']; // EN-only focus: consolidate crawl budget; ru/es canonical → en
  const lastModified = new Date();

  const pages = [
    // Homepage
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },

    // Broker Reviews (primary)
    { path: '/pocket-option', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/quotex', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/iq-option', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/deriv', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/olymp-trade', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/binomo', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/expert-option', priority: 0.7, changeFrequency: 'monthly' as const },

    // Comparison Pages
    { path: '/compare', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/compare/pocket-option-vs-quotex', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/compare/pocket-option-vs-iq-option', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/compare/quotex-vs-iq-option', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/compare/pocket-option-vs-binomo', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/compare/quotex-vs-binomo', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/compare/iq-option-vs-deriv', priority: 0.8, changeFrequency: 'monthly' as const },

    // Blog — Hub
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },

    // Blog — Pillar Content (high priority)
    { path: '/blog/best-binary-options-brokers', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/blog/binary-options-trading-guide', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/blog/binary-options-regulation', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/blog/binary-options-strategy-beginners', priority: 0.85, changeFrequency: 'monthly' as const },

    // Blog — Broker-Specific
    { path: '/blog/is-quotex-real-or-fake', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog/is-pocket-option-legit', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog/quotex-deposit-withdrawal', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog/pocket-option-withdrawal', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog/quotex-promo-code', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog/pocket-option-promo-code', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog/quotex-strategy', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog/pocket-option-copy-trading', priority: 0.7, changeFrequency: 'monthly' as const },

    // Blog — Educational Content
    { path: '/blog/binary-options-vs-forex', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/blog/binary-options-demo-account', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/blog/binary-options-minimum-deposit', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/blog/how-to-withdraw-binary-options', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/blog/binary-options-copy-trading', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/blog/binary-options-mobile-trading', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog/otc-trading-binary-options', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog/deriv-synthetic-indices-guide', priority: 0.7, changeFrequency: 'monthly' as const },

    // Blog — Timeframe Strategies
    { path: '/blog/60-second-binary-options-strategy', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/blog/5-minute-binary-options-strategy', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/blog/30-minute-binary-options-strategy', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/blog/1-day-binary-options-strategy', priority: 0.75, changeFrequency: 'monthly' as const },

    // Country Guides
    { path: '/binary-options-india', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/binary-options-usa', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/binary-options-uk', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/binary-options-nigeria', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/binary-options-philippines', priority: 0.8, changeFrequency: 'monthly' as const },

    // Scam Blacklist
    { path: '/scams', priority: 0.8, changeFrequency: 'weekly' as const },

    // Glossary
    { path: '/glossary', priority: 0.7, changeFrequency: 'monthly' as const },

    // Tools & Utility
    { path: '/tools/calculator', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/methodology', priority: 0.5, changeFrequency: 'monthly' as const },

    // About
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
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
