'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import Breadcrumbs from '@/components/Breadcrumbs';

type StatusKey = 'banned' | 'bannedTotal' | 'restricted' | 'gray';

const STATUS: Record<StatusKey, { label: string; cls: string; dot: string }> = {
  banned: { label: 'Banned (retail)', cls: 'bg-red-500/15 text-red-400 border-red-500/30', dot: 'bg-red-400' },
  bannedTotal: { label: 'Banned (total)', cls: 'bg-red-500/20 text-red-300 border-red-500/40', dot: 'bg-red-300' },
  restricted: { label: 'Restricted', cls: 'bg-orange-500/15 text-orange-400 border-orange-500/30', dot: 'bg-orange-400' },
  gray: { label: 'Unregulated / gray', cls: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30', dot: 'bg-yellow-400' },
};

interface Jurisdiction {
  country: string;
  status: StatusKey;
  regulator: string;
  rule: string;
  meaning: string;
  source: string;
  sourceUrl: string;
}

const JURISDICTIONS: Jurisdiction[] = [
  {
    country: 'European Union (27)',
    status: 'banned',
    regulator: 'National regulators (ex-ESMA)',
    rule: 'ESMA EU-wide ban in 2018, then made permanent by each national regulator (2019–2020).',
    meaning: 'Cannot be legally marketed or sold to retail clients anywhere in the EU.',
    source: 'ESMA',
    sourceUrl: 'https://www.esma.europa.eu/investor-corner/product-intervention',
  },
  {
    country: 'France',
    status: 'banned',
    regulator: 'AMF',
    rule: 'Permanent national ban; the AMF took over the prohibition from ESMA.',
    meaning: 'Marketing, distribution and sale to retail prohibited in or from France.',
    source: 'AMF',
    sourceUrl: 'https://www.amf-france.org',
  },
  {
    country: 'Germany',
    status: 'banned',
    regulator: 'BaFin',
    rule: 'Permanent national ban under the post-ESMA framework.',
    meaning: 'Same retail prohibition as the wider EU bloc.',
    source: 'BaFin',
    sourceUrl: 'https://www.bafin.de',
  },
  {
    country: 'United Kingdom',
    status: 'banned',
    regulator: 'FCA',
    rule: 'Permanent ban since April 2019 (the FCA cited 74–87% of retail clients losing money).',
    meaning: 'Any broker offering binary options to UK retail breaches FCA rules; firms appear on the FCA Warning List.',
    source: 'FCA',
    sourceUrl: 'https://www.fca.org.uk',
  },
  {
    country: 'Australia',
    status: 'banned',
    regulator: 'ASIC',
    rule: 'Banned since 3 May 2021, extended to 1 October 2031 (~80% of retail clients lost money).',
    meaning: 'Issue and distribution of binary options to retail clients is prohibited.',
    source: 'ASIC',
    sourceUrl: 'https://www.asic.gov.au/about-asic/news-centre/find-a-media-release/2022-releases/22-243mr-asic-s-binary-options-ban-extended-until-2031/',
  },
  {
    country: 'Canada',
    status: 'bannedTotal',
    regulator: 'CSA',
    rule: 'Complete ban on advertising, offering or selling binary options to Canadians.',
    meaning: 'Among the strictest regimes worldwide — no legal domestic offering exists.',
    source: 'CSA',
    sourceUrl: 'https://www.securities-administrators.ca',
  },
  {
    country: 'Israel',
    status: 'bannedTotal',
    regulator: 'ISA',
    rule: 'Law banning the entire binary options industry (2017).',
    meaning: 'Both trading and operating binary options firms are outlawed.',
    source: 'ISA',
    sourceUrl: 'https://www.isa.gov.il',
  },
  {
    country: 'Indonesia',
    status: 'bannedTotal',
    regulator: 'BAPPEBTI',
    rule: 'Declared binary options illegal and akin to gambling; platforms blocked.',
    meaning: 'Treated as illegal; many sites are blocked at the ISP level.',
    source: 'BAPPEBTI',
    sourceUrl: 'https://www.bappebti.go.id',
  },
  {
    country: 'United States',
    status: 'restricted',
    regulator: 'CFTC / SEC',
    rule: 'Legal only via a CFTC-registered exchange (e.g. Nadex); offshore brokers are illegal.',
    meaning: 'One main regulated venue. Using offshore brokers violates federal law.',
    source: 'CFTC',
    sourceUrl: 'https://www.cftc.gov',
  },
  {
    country: 'India',
    status: 'gray',
    regulator: 'SEBI / RBI',
    rule: 'Not regulated by SEBI; offshore brokers appear on the RBI Alert List; remittance for binary options is restricted under FEMA / the Liberalised Remittance Scheme.',
    meaning: 'Accessible via offshore brokers, but no domestic recourse — plus FEMA and tax exposure.',
    source: 'RBI',
    sourceUrl: 'https://www.rbi.org.in',
  },
  {
    country: 'Nigeria',
    status: 'gray',
    regulator: 'SEC Nigeria',
    rule: "Outside SEC Nigeria's regulatory perimeter; no oversight of binary options.",
    meaning: 'Offshore trading is common; no domestic recourse; profits are taxable by FIRS.',
    source: 'SEC Nigeria',
    sourceUrl: 'https://sec.gov.ng',
  },
  {
    country: 'Philippines',
    status: 'gray',
    regulator: 'SEC Philippines',
    rule: 'SEC advisories and warnings issued; no explicit ban.',
    meaning: 'Accessible offshore; some platforms flagged by the SEC; no local protection.',
    source: 'SEC PH',
    sourceUrl: 'https://www.sec.gov.ph',
  },
];

function StatusPill({ status }: { status: StatusKey }) {
  const s = STATUS[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ${s.cls}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}

export default function BinaryOptionsLegalityPage() {
  const locale = useLocale();

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Regulation', href: undefined }, { label: 'Legality Tracker' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
        <div className="relative section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="badge-gold">Regulation</span>
              <span className="badge text-xs bg-white/[0.05] text-gray-300 border border-white/[0.1]">Updated: May 2026</span>
              <span className="badge text-xs bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Sourced to regulators</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              Binary Options Legality Tracker 2026
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-6 leading-relaxed">
              Binary options are <strong className="text-white">banned for retail traders across the entire EU, UK,
              Australia, Canada and Israel</strong>, and treated as illegal gambling in Indonesia — yet remain
              widely marketed in <strong className="text-white">unregulated emerging markets</strong> like India,
              Nigeria and the Philippines, where traders have <strong className="text-yellow-400">no domestic legal
              recourse</strong>.
            </p>
            <p className="text-sm text-gray-500">
              An independent, country-by-country reference. Every status below links to its national regulator.
            </p>
          </div>
        </div>
      </section>

      {/* Tracker Table */}
      <section className="section-container py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Legal Status by Country</h2>
          <p className="text-gray-400 mb-6 text-sm">
            Status reflects rules for <strong className="text-white">retail</strong> traders. &ldquo;Unregulated / gray&rdquo;
            means no local authority oversees binary options — trading is accessible via offshore brokers, but with no
            domestic protection.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap gap-3 mb-6">
            <StatusPill status="banned" />
            <StatusPill status="bannedTotal" />
            <StatusPill status="restricted" />
            <StatusPill status="gray" />
          </div>

          <div className="glass-card overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-4 py-3 text-gray-400 font-semibold">Country</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">Status</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">Regulator</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold min-w-[260px]">Key rule</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold min-w-[240px]">What it means for a trader</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">Source</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {JURISDICTIONS.map((j) => (
                  <tr key={j.country} className="border-b border-white/5 align-top">
                    <td className="px-4 py-3 font-semibold text-white whitespace-nowrap">{j.country}</td>
                    <td className="px-4 py-3"><StatusPill status={j.status} /></td>
                    <td className="px-4 py-3 whitespace-nowrap">{j.regulator}</td>
                    <td className="px-4 py-3 text-gray-400">{j.rule}</td>
                    <td className="px-4 py-3 text-gray-400">{j.meaning}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <a
                        href={j.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        {j.source} &#8599;
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            This tracker is reviewed quarterly. Regulations change — always confirm current status with the official
            regulator before trading. More jurisdictions are being added; see our methodology below.
          </p>
        </div>
      </section>

      {/* What protection means + broker availability */}
      <section className="section-container py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Legal Status vs Actual Protection</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold text-red-400 mb-2">Banned markets</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                In the EU, UK, Australia, Canada and Israel, no regulated broker may legally offer binary options to
                retail traders. Any platform soliciting you is operating outside the rules — typically the strongest
                signal to walk away. Regulators here maintain public warning lists.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold text-orange-400 mb-2">Restricted markets</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                In the US, binary options are legal only on a CFTC-registered exchange such as Nadex, where you trade on
                a regulated venue rather than against the broker. Offshore brokers remain illegal and offer no
                protection.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold text-yellow-400 mb-2">Unregulated markets</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                In India, Nigeria and the Philippines, offshore brokers like Pocket Option, Quotex, IQ Option and Olymp
                Trade accept clients, but no local authority oversees them. You may still owe tax on profits, and you
                have no domestic compensation scheme if something goes wrong.
              </p>
            </div>
          </div>
          <div className="glass-card p-6 mt-6 border border-emerald-500/20">
            <p className="text-sm text-gray-300 leading-relaxed">
              <strong className="text-white">Our position:</strong> we earn affiliate commissions from some brokers, and
              we will still tell you plainly when binary options are banned where you live. If you are in a banned
              jurisdiction, the responsible choice is a <Link href={`/${locale}/blog/binary-options-regulation`} className="text-emerald-400 hover:underline">regulated alternative</Link>,
              not an offshore workaround. See how we test and rate brokers in our{' '}
              <Link href={`/${locale}/methodology`} className="text-emerald-400 hover:underline">methodology</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology / Independence */}
      <section className="section-container py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Methodology &amp; Sources</h2>
          <div className="glass-card p-8 space-y-4 text-sm text-gray-300 leading-relaxed">
            <p>
              <strong className="text-white">Primary sources only.</strong> Each status is taken from the relevant
              national financial regulator (ESMA, FCA, ASIC, CFTC, CSA, ISA, BAPPEBTI, AMF, BaFin, RBI/SEBI, SEC Nigeria,
              SEC Philippines) and linked in the table above. We do not report legal status based on broker marketing.
            </p>
            <p>
              <strong className="text-white">Independence.</strong> BinaryBrokerHub earns affiliate commissions from some
              brokers. Legal status is reported from regulators, not from those commercial relationships — including when
              the conclusion is that binary options are banned.
            </p>
            <p>
              <strong className="text-white">Updates.</strong> Reviewed quarterly. Last updated May 2026. Jurisdictions
              are being expanded toward full global coverage; corrections are welcome.
            </p>
          </div>
        </div>
      </section>

      {/* Cite / reuse this tracker */}
      <section className="section-container py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Cite or Reuse This Tracker</h2>
          <p className="text-gray-400 text-sm mb-4">
            Journalists, educators and researchers are welcome to reference this data with attribution. Suggested credit:
          </p>
          <div className="glass-card p-5">
            <code className="text-xs text-gray-300 break-words">
              Source: Binary Options Legality Tracker 2026, BinaryBrokerHub —
              https://www.binarybrokerhub.com/{locale}/binary-options-legality
            </code>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-container py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'In which countries are binary options banned?',
                a: 'Binary options are banned for retail traders across the entire EU, the UK (FCA, since April 2019), Australia (ASIC, until at least October 2031) and Canada (a complete ban). Israel banned the whole industry, and Indonesia treats binary options as illegal gambling.',
              },
              {
                q: 'Is binary options trading legal in the United States?',
                a: 'Only via a CFTC-registered exchange such as Nadex. Offshore brokers that are not CFTC-registered are illegal for US residents.',
              },
              {
                q: 'Why did the EU, UK and Australia ban binary options?',
                a: 'Regulators found the large majority of retail clients lost money — the FCA cited 74–87% and ASIC around 80%. The product was judged to cause significant consumer harm.',
              },
              {
                q: 'Is binary options trading legal in India?',
                a: 'It is not licensed by SEBI and sits in a gray area. Offshore brokers appear on the RBI Alert List, and remittance for binary options is restricted under FEMA. Indian traders using offshore brokers have no domestic legal recourse.',
              },
              {
                q: 'Is it safe to trade in an unregulated country?',
                a: 'Unregulated means no local oversight or compensation scheme. Trading is accessible offshore, but you carry the full risk yourself and may still owe tax on any profits. Use only well-established brokers and start with a demo account.',
              },
            ].map((faq, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-container py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Country Guides &amp; Related</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Binary Options in India', href: `/${locale}/binary-options-india`, desc: 'SEBI/RBI status, UPI deposits, tax' },
              { title: 'Binary Options in USA', href: `/${locale}/binary-options-usa`, desc: 'CFTC, Nadex, legal alternatives' },
              { title: 'Binary Options in UK', href: `/${locale}/binary-options-uk`, desc: 'FCA ban, spread betting, CFDs' },
              { title: 'Binary Options in Nigeria', href: `/${locale}/binary-options-nigeria`, desc: 'SEC status, Naira deposits, tax' },
              { title: 'Binary Options in Philippines', href: `/${locale}/binary-options-philippines`, desc: 'SEC advisories, GCash, best brokers' },
              { title: 'Binary Options Regulation', href: `/${locale}/blog/binary-options-regulation`, desc: 'How regulation tiers work' },
              { title: 'Scam Blacklist & Red Flags', href: `/${locale}/scams`, desc: 'Spot fraud before you deposit' },
              { title: 'Testing Methodology', href: `/${locale}/methodology`, desc: 'How we test and rate brokers' },
              { title: 'Compare All Brokers', href: `/${locale}/compare`, desc: 'Side-by-side broker comparison' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="glass-card p-4 hover:bg-white/[0.05] transition-colors group">
                <h3 className="font-semibold text-sm text-white group-hover:text-emerald-400 transition-colors">{link.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="section-container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 border border-yellow-500/20">
            <h3 className="font-bold text-yellow-400 text-sm mb-2">Risk Disclaimer</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Binary options trading involves substantial risk of loss and is not suitable for all investors. This page
              is for educational purposes only and does not constitute financial or legal advice. Legal status can change
              and may depend on your specific circumstances — always confirm with the official regulator and, where
              needed, a qualified legal professional. In many jurisdictions binary options are banned for retail traders.
              Only trade with money you can afford to lose.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
