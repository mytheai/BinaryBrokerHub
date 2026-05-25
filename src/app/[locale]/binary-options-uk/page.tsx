'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function BinaryOptionsUKPage() {
  const locale = useLocale();

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Country Guides', href: undefined }, { label: 'Binary Options in the UK' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent" />
        <div className="relative section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="badge-gold">Country Guide</span>
              <span className="badge text-xs bg-white/[0.05] text-gray-300 border border-white/[0.1]">Updated: May 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              Binary Options in the UK 2026
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
              Complete guide to binary options in the United Kingdom. The FCA banned binary options for retail traders
              in April 2019. Learn about the ban, professional trader exemptions, legal alternatives, and how to avoid scams.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Legal Status: <span className="text-red-400 font-semibold">Banned for Retail</span> &bull; FCA ban since April 2019
            </p>
          </div>
        </div>
      </section>

      {/* Legal Status */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Legal Status of Binary Options in the UK</h2>
          <div className="glass-card p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-2">Banned for Retail Traders</h3>
                <p className="text-gray-300 leading-relaxed">
                  The <strong className="text-white">Financial Conduct Authority (FCA)</strong> permanently banned the
                  sale, marketing, and distribution of binary options to retail consumers in the United Kingdom effective
                  <strong className="text-white"> April 2, 2019</strong>. This ban applies to all firms operating in or
                  from the UK, whether FCA-authorised or not.
                </p>
              </div>
            </div>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                <strong className="text-white">Why the FCA banned binary options:</strong> The FCA determined that binary
                options are &ldquo;gambling-like&rdquo; products that cause significant consumer harm. Research showed that
                approximately 74-87% of retail clients lost money trading binary options. The regulator estimated that the
                ban would save UK consumers up to <strong className="text-white">&pound;17 million per year</strong>.
                Widespread fraud by unlicensed firms further justified the permanent prohibition.
              </p>
              <p>
                <strong className="text-white">What &ldquo;elective professional&rdquo; means:</strong> The ban does not
                apply to professional or elective professional clients. To qualify as an elective professional, you must
                meet <strong className="text-white">at least two of three criteria</strong>:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 font-bold">1.</span>
                  <span>A portfolio of financial instruments (including cash deposits) exceeding <strong className="text-white">&pound;500,000</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 font-bold">2.</span>
                  <span>Work experience in the financial sector in a professional position requiring knowledge of the relevant transactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 font-bold">3.</span>
                  <span>Carried out transactions of significant size at an average frequency of 10 per quarter over the previous 4 quarters</span>
                </li>
              </ul>
              <p>
                <strong className="text-white">Offshore brokers violate FCA rules:</strong> Any broker accepting UK retail
                clients for binary options trading is violating FCA regulations, regardless of where the broker is based.
                The FCA maintains a <strong className="text-white">Warning List</strong> of unauthorised firms and regularly
                updates it. Using an offshore broker leaves you with no protection from the Financial Ombudsman Service (FOS)
                or the Financial Services Compensation Scheme (FSCS).
              </p>
              <p>
                <strong className="text-white">Our recommendation:</strong> UK retail traders should not trade binary options.
                Consider legal alternatives like spread betting (tax-free), CFDs (FCA-regulated), or forex trading through
                FCA-authorised brokers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternatives */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Legal Alternatives for UK Traders</h2>
          <p className="text-gray-400 mb-8">
            Since binary options are banned, here are regulated alternatives that offer similar short-term trading opportunities.
          </p>

          {/* Spread Betting */}
          <div className="glass-card p-6 mb-6 border border-emerald-500/30">
            <div className="flex items-center gap-2 mb-3">
              <span className="badge-green">Tax-Free Profits</span>
              <h3 className="text-xl font-bold">Spread Betting</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Spread betting is the most popular alternative to binary options in the UK and is <strong className="text-white">
              unique to the British market</strong>. Key advantages include:
            </p>
            <ul className="space-y-2 text-sm text-gray-300 mb-4">
              {[
                'Profits are exempt from Capital Gains Tax and stamp duty',
                'FCA-regulated through authorised brokers',
                'Available on forex, indices, commodities, shares, and more',
                'Leverage available (with risk management tools)',
                'Protected by FSCS up to £85,000 if broker goes insolvent',
                'Established providers: IG, City Index, Spreadex, CMC Markets',
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5 font-bold">+</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CFDs */}
          <div className="glass-card p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="badge-blue">FCA Regulated</span>
              <h3 className="text-xl font-bold">CFDs (Contracts for Difference)</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              CFDs are <strong className="text-white">FCA-regulated</strong> and available to UK retail traders,
              though with restrictions (leverage caps, negative balance protection). CFDs let you speculate on price
              movements of assets without owning them. Note: CFD profits <em>are</em> subject to Capital Gains Tax,
              unlike spread betting.
            </p>
            <ul className="space-y-2 text-sm text-gray-300 mb-4">
              {[
                'Regulated by FCA with retail client protections',
                'Maximum leverage: 30:1 for major forex pairs',
                'Negative balance protection required',
                'Available on forex, shares, indices, commodities, crypto',
                'Major providers: IG, Plus500, CMC Markets, eToro',
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5 font-bold">+</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deriv */}
          <div className="glass-card p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="badge text-xs bg-white/[0.05] text-gray-300 border border-white/[0.1]">MFSA Regulated</span>
              <h3 className="text-xl font-bold">Deriv</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Deriv holds a <strong className="text-white">Malta Financial Services Authority (MFSA)</strong> licence
              and offers synthetic indices and multiplier contracts accessible to UK residents. While not binary options,
              Deriv&rsquo;s products provide short-term trading opportunities on simulated markets. Deriv has a strong
              trust score (9.0/10) and over 20 years of operational history.
            </p>
            <div className="flex flex-wrap gap-3">
              <CtaButton broker="deriv" label="Explore Deriv" campaign="uk_deriv" size="sm" />
              <CtaButton broker="deriv" type="demo" label="Try Demo" variant="secondary" campaign="uk_deriv" size="sm" />
            </div>
          </div>

          {/* Warning about offshore */}
          <div className="glass-card p-6 border border-red-500/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-400 mb-2">Do Not Use Offshore Binary Options Brokers</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Offshore brokers such as <strong className="text-white">Pocket Option, Quotex, IQ Option,
                  Olymp Trade, Binomo, and ExpertOption</strong> are <strong className="text-red-400">not authorised
                  by the FCA</strong> and should not be used by UK residents for binary options. Any firm offering
                  binary options to UK retail consumers is violating FCA rules. You will have no protection from the
                  Financial Ombudsman Service or FSCS if things go wrong.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Information */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Tax Implications for UK Traders</h2>
          <div className="glass-card p-8">
            <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Tax Treatment of Trading Alternatives</h3>
                <p>
                  Since binary options are banned for UK retail traders, tax treatment is primarily relevant for the
                  legal alternatives available.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white/[0.03] rounded-lg">
                  <h4 className="font-semibold text-emerald-400 mb-2">Spread Betting (Tax-Free)</h4>
                  <ul className="space-y-1 text-xs">
                    <li>Profits <span className="text-emerald-400">exempt from Capital Gains Tax</span></li>
                    <li>No stamp duty applies</li>
                    <li>Classified as gambling by HMRC</li>
                    <li>Exception: if trading is your primary income source, HMRC may classify it as taxable</li>
                    <li>Losses cannot be offset against other income</li>
                  </ul>
                </div>
                <div className="p-4 bg-white/[0.03] rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-2">CFDs (Capital Gains Tax)</h4>
                  <ul className="space-y-1 text-xs">
                    <li>Profits subject to <span className="text-yellow-400">Capital Gains Tax</span></li>
                    <li>Annual CGT allowance: &pound;3,000 (2026/27)</li>
                    <li>Basic rate: 10% | Higher rate: 20%</li>
                    <li>Losses can be offset against other capital gains</li>
                    <li>Must report on Self Assessment tax return</li>
                  </ul>
                </div>
              </div>
              <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <p className="text-yellow-300 text-xs">
                  <strong>Disclaimer:</strong> This is general information, not tax advice. Tax treatment depends
                  on your individual circumstances and may change. Consult a qualified tax advisor or accountant
                  for personalized advice. HMRC rules on the tax treatment of financial instruments can vary based
                  on the frequency and nature of your trading activity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scam Warnings */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Scam Warnings for UK Traders</h2>
          <div className="glass-card p-8 border border-red-500/30">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-2">Common Scams Targeting UK Residents</h3>
                <p className="text-gray-400 text-sm">
                  Despite the FCA ban, UK residents continue to be targeted by binary options scams. The FCA
                  reports receiving thousands of enquiries about suspected investment scams each year.
                </p>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                {
                  title: 'Unlicensed Brokers Targeting UK Residents',
                  desc: 'Offshore brokers actively marketing to UK consumers despite the FCA ban. They may use UK phone numbers, .co.uk domains, or claim London offices to appear legitimate. Always check the FCA Register before engaging with any financial firm.',
                },
                {
                  title: 'Fake FCA Registration Numbers',
                  desc: 'Scam firms displaying fake or cloned FCA registration numbers. Some use real FCA numbers belonging to legitimate firms (known as "clone firms"). Always verify directly on the FCA Register at register.fca.org.uk and use the contact details listed there, not those on the firm\'s website.',
                },
                {
                  title: 'Social Media Investment Scams',
                  desc: 'Instagram, Facebook, and TikTok accounts promoting "guaranteed returns" from binary options or forex trading. These often use fake testimonials, manipulated screenshots, and pressure tactics to get you to deposit quickly.',
                },
                {
                  title: 'Cold Calling and Unsolicited Contact',
                  desc: 'Receiving unexpected calls or emails about "exclusive" trading opportunities. Legitimate FCA-authorised firms do not cold call consumers about speculative investments. If you receive unsolicited contact, it is almost certainly a scam.',
                },
                {
                  title: 'Recovery Room Scams',
                  desc: 'After losing money to a scam broker, victims are contacted by firms claiming to recover their lost funds for an upfront fee. These "recovery" operations are run by the same fraudsters or their associates. Report scams to Action Fraud (0300 123 2040).',
                },
              ].map((scam) => (
                <li key={scam.title} className="text-sm">
                  <span className="text-red-400 font-semibold">{scam.title}:</span>{' '}
                  <span className="text-gray-400">{scam.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Are binary options legal in the UK?',
                a: 'No. The FCA permanently banned the sale, marketing, and distribution of binary options to retail consumers in April 2019. Only traders classified as elective professional clients (requiring a £500K+ portfolio and financial sector experience) can access binary options through FCA-authorised firms.',
              },
              {
                q: 'Why did the FCA ban binary options?',
                a: 'The FCA banned binary options because 74-87% of retail clients lost money, the products have inherent structural disadvantages for consumers, there was widespread fraud by unlicensed operators, and the products were considered more akin to gambling than investing. The ban was estimated to save UK consumers £17 million per year.',
              },
              {
                q: 'Can I use offshore brokers from the UK?',
                a: 'While some offshore brokers may technically allow UK sign-ups, doing so goes against FCA guidance and leaves you completely unprotected. You will have no access to the Financial Ombudsman Service or FSCS compensation if the broker refuses withdrawals or engages in fraud.',
              },
              {
                q: 'What is the best alternative to binary options in the UK?',
                a: 'Spread betting is the most popular alternative because profits are tax-free in the UK. It is FCA-regulated, available from established providers like IG and City Index, and offers short-term trading on similar markets. CFDs are another option, though profits are subject to Capital Gains Tax.',
              },
              {
                q: 'Can I become a professional trader to access binary options?',
                a: 'Technically yes, but the requirements are very high. You must meet at least two of three criteria: a financial instrument portfolio exceeding £500,000, relevant professional experience in the financial sector, and a history of frequent significant-sized transactions. Most retail traders do not qualify.',
              },
              {
                q: 'Is spread betting tax-free in the UK?',
                a: 'Yes, for most individuals. Spread betting profits are currently exempt from Capital Gains Tax and stamp duty under HMRC rules. However, if spread betting is your primary source of income, HMRC may reclassify it as taxable. Consult a tax advisor for your specific circumstances.',
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
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Compare All Brokers', href: `/${locale}/compare`, desc: 'Side-by-side broker comparison' },
              { title: 'Deriv Review', href: `/${locale}/deriv`, desc: 'MFSA-regulated alternative' },
              { title: 'Binary Options in India', href: `/${locale}/binary-options-india`, desc: 'India country guide' },
              { title: 'Binary Options in the USA', href: `/${locale}/binary-options-usa`, desc: 'USA country guide' },
              { title: 'Beginner Trading Guide', href: `/${locale}/blog/binary-options-trading-guide`, desc: 'Learn trading from scratch' },
              { title: 'Scam Avoidance Guide', href: `/${locale}/blog/binary-options-scams`, desc: 'How to identify and avoid scams' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="glass-card p-4 hover:bg-white/[0.05] transition-colors group">
                <h3 className="font-semibold text-sm text-white group-hover:text-red-400 transition-colors">{link.title}</h3>
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
              Binary options are banned for retail consumers in the UK by the FCA. The information on this page is for
              educational purposes only and does not constitute financial, legal, or tax advice. Trading CFDs and spread
              betting involves significant risk of loss. Approximately 70-80% of retail investor accounts lose money
              when trading CFDs. You should consider whether you understand how these products work and whether you can
              afford the risk of losing your money. Past performance is not indicative of future results. If you suspect
              a financial scam, report it to Action Fraud on 0300 123 2040 or the FCA on 0800 111 6768.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
