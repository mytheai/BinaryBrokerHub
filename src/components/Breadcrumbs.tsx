'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const locale = useLocale();

  const allItems = [{ label: 'Home', href: `/${locale}` }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="section-container pt-4 pb-2">
      <ol className="flex items-center flex-wrap gap-1 text-xs sm:text-sm text-gray-500">
        {allItems.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && (
              <svg className="w-3 h-3 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
            {item.href && i < allItems.length - 1 ? (
              <Link href={item.href} className="hover:text-emerald-400 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-400">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
