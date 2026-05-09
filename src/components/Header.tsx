import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export function Header() {
  const t = useTranslations('nav');

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          BinaryBrokerHub
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-6 text-sm text-gray-700">
            <li>
              <Link href="/brokers" className="hover:text-gray-900">
                {t('brokers')}
              </Link>
            </li>
            <li>
              <Link href="/methodology" className="hover:text-gray-900">
                {t('methodology')}
              </Link>
            </li>
            <li>
              <Link href="/editorial-team" className="hover:text-gray-900">
                {t('editorialTeam')}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
