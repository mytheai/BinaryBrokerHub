import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="mt-24 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              BinaryBrokerHub
            </Link>
            <p className="mt-3 text-sm text-gray-600">{t('tagline')}</p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              {t('sections.rankings')}
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>
                <Link href="/brokers" className="hover:text-gray-900">
                  {t('links.allBrokers')}
                </Link>
              </li>
              <li>
                <Link href="/brokers" className="hover:text-gray-900">
                  {t('links.bestForBeginners')}
                </Link>
              </li>
              <li>
                <Link href="/brokers" className="hover:text-gray-900">
                  {t('links.bestRegulated')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              {t('sections.about')}
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>
                <Link href="/methodology" className="hover:text-gray-900">
                  {t('links.methodology')}
                </Link>
              </li>
              <li>
                <Link href="/editorial-team" className="hover:text-gray-900">
                  {t('links.editorialTeam')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-900">
                  {t('links.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              {t('sections.legal')}
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>
                <Link href="/risk-disclosure" className="hover:text-gray-900">
                  {t('links.riskDisclosure')}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gray-900">
                  {t('links.privacy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 text-xs text-gray-600">
          <p className="font-semibold text-gray-700">Risk warning</p>
          <p className="mt-1">{t('riskWarning')}</p>
          <p className="mt-4 font-semibold text-gray-700">
            Affiliate disclosure
          </p>
          <p className="mt-1">{t('affiliateDisclosure')}</p>
          <p className="mt-6 text-gray-500">
            © {new Date().getFullYear()} BinaryBrokerHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
