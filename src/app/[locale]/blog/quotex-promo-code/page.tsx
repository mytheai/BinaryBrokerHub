'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function QuotexPromoCodePage() {
  const locale = useLocale();

  return (
    <div>
      <Breadcrumbs items={[
        { label: 'Blog', href: `/${locale}/blog` },
        { label: 'Quotex Promo Code 2026' },
      ]} />

      <article className="section-container py-16 max-w-4xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge-green">Bonus Guide</span>
            <span className="text-xs text-gray-600">Updated May 2026 &bull; 8 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            Quotex Promo Code 2026 &mdash; Latest Deposit Bonus Codes
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Active Quotex promo codes and deposit bonus offers for May 2026.
            Plus honest advice on whether you should use bonuses at all &mdash; and the critical
            terms most sites do not tell you about.
          </p>
        </header>

        {/* Quick Summary */}
        <section className="glass-card p-6 mb-10">
          <h2 className="text-lg font-bold mb-3 text-emerald-400">Quick Summary</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">30%</div>
              <div className="text-xs text-gray-400">First Deposit Bonus</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">$100+</div>
              <div className="text-xs text-gray-400">Min Deposit for Bonus</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-400">Read Terms</div>
              <div className="text-xs text-gray-400">Before Accepting</div>
            </div>
          </div>
        </section>

        {/* Current Offers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Current Active Offers (May 2026)</h2>
          <div className="space-y-4">
            <div className="glass-card p-6 border-emerald-500/20">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-white">30% First Deposit Bonus</h3>
                <span className="badge-green">Active</span>
              </div>
              <p className="text-sm text-gray-400 mb-2">
                Get a 30% bonus on your first deposit when you deposit $100 or more.
                Applied automatically through our link &mdash; no promo code needed.
              </p>
              <ul className="text-xs text-gray-500 space-y-1 mb-4">
                <li>&bull; Minimum deposit: $100</li>
                <li>&bull; Bonus credited as virtual funds</li>
                <li>&bull; Your deposited money is used for trading first</li>
              </ul>
              <CtaButton broker="quotex" label="Claim 30% Bonus" campaign="promo_quotex" className="w-full sm:w-auto" />
            </div>

            <div className="glass-card p-6 border-amber-500/20">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-white">Risk-Free Trade</h3>
                <span className="badge-gold">Periodic</span>
              </div>
              <p className="text-sm text-gray-400">
                Quotex sometimes offers risk-free trades as a reward &mdash; if conditions are met, you get guaranteed income;
                if not, the trade amount is returned. Check inside the platform for availability.
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-white">Trading Tournaments</h3>
                <span className="badge text-xs bg-white/[0.05] text-gray-300 border border-white/[0.1]">Occasional</span>
              </div>
              <p className="text-sm text-gray-400">
                Quotex runs trading tournaments with cash prizes. Check the platform for current tournament schedules and entry rules.
                Some tournaments are free to enter.
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-white">Promo Code Entry</h3>
                <span className="badge-blue">Manual</span>
              </div>
              <p className="text-sm text-gray-400">
                Quotex occasionally releases promo codes through their social media channels and email newsletters.
                These codes can be entered in the &ldquo;Promo Code&rdquo; section of your account for additional bonuses.
                Always verify codes on Quotex&apos;s official channels &mdash; third-party codes are often fake.
              </p>
            </div>
          </div>
        </section>

        {/* How Bonus Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">How the Quotex Bonus Actually Works</h2>
          <div className="glass-card p-6">
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Understanding how the bonus works is critical before you accept it. Here is the mechanism:
            </p>
            <div className="space-y-4">
              {[
                { step: '1', title: 'You Deposit $100', desc: 'Your trading balance shows $130 ($100 real + $30 bonus).' },
                { step: '2', title: 'Your Money Is Used First', desc: 'When you trade, your $100 real deposit is used first. Bonus funds only activate after your deposit is spent.' },
                { step: '3', title: 'Bonus Generates Virtual Profits', desc: 'Profits from bonus-funded trades can be withdrawn, but the bonus itself cannot.' },
                { step: '4', title: 'Early Withdrawal Penalty', desc: 'If you withdraw your deposited funds before using the bonus, Quotex can cancel all bonus credits and any bonus profits.' },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400 font-bold text-sm">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">{s.title}</h3>
                    <p className="text-sm text-gray-400">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Warning */}
        <section className="mb-12">
          <div className="border border-amber-500/30 bg-amber-500/[0.03] rounded-xl p-6">
            <h2 className="text-lg font-bold text-amber-400 mb-3">Critical: Read Before Using Any Bonus</h2>
            <div className="space-y-3 text-sm text-gray-300">
              <p>Based on our analysis of Quotex&apos;s bonus terms:</p>
              <ul className="space-y-2 ml-4">
                <li>&bull; <strong className="text-white">Bonuses are virtual funds</strong> &mdash; your deposited money is used first</li>
                <li>&bull; <strong className="text-white">Bonus funds cannot be withdrawn</strong> &mdash; only profits from bonus trades</li>
                <li>&bull; <strong className="text-white">If you withdraw deposited funds early</strong>, Quotex can debit all credited bonuses</li>
                <li>&bull; <strong className="text-white">Bonus rules can change</strong> at any time at Quotex&apos;s discretion</li>
                <li>&bull; <strong className="text-white">No explicit turnover requirement published</strong> &mdash; but early withdrawal triggers penalty</li>
              </ul>
              <p className="mt-4 text-amber-200/70">
                <strong>Our honest recommendation:</strong> Don&apos;t choose a broker based on bonuses. The 30% bonus is a nice extra,
                but the real value of Quotex is its high payouts (up to 98%) and fast execution. Focus on profitable trading, not free money.
              </p>
            </div>
          </div>
        </section>

        {/* Should You Use Bonuses */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Should You Use the Bonus? Honest Advice</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-5">
              <h3 className="font-bold text-emerald-400 mb-3">Accept the Bonus If...</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {[
                  'You plan to trade actively anyway (not just deposit and withdraw)',
                  'You understand bonus funds are used AFTER your deposit runs out',
                  'You won\'t need to withdraw your deposit quickly',
                  'You treat it as extra trading capital, not free money',
                  'You\'ve read and understood all bonus terms',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold text-red-400 mb-3">Skip the Bonus If...</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {[
                  'You\'re a beginner still learning (it complicates things)',
                  'You might want to withdraw your deposit early',
                  'You\'re depositing money you might need back soon',
                  'You don\'t fully understand how the bonus mechanism works',
                  'You\'re choosing Quotex primarily because of the bonus',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">!</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">How to Get the Deposit Bonus (Step-by-Step)</h2>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Open Account', desc: 'Click our link below to register. Takes under 2 minutes, no documents needed.' },
              { step: '2', title: 'Deposit $100+', desc: 'Use any method (crypto is fastest). The 30% bonus is applied to deposits of $100 or more.' },
              { step: '3', title: 'Bonus Auto-Applied', desc: 'The bonus will be credited to your account automatically. No promo code required when using our link.' },
              { step: '4', title: 'Start Trading', desc: 'Your deposited funds are used first. Bonus funds activate after your deposit is used.' },
              { step: '5', title: 'Check Promo Section', desc: 'For additional promo codes, check the "Promo" section in your account dashboard for any available codes.' },
            ].map((s) => (
              <div key={s.step} className="glass-card p-5 flex gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-400 font-bold text-sm">{s.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">{s.title}</h3>
                  <p className="text-sm text-gray-400">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison with Pocket Option */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Quotex vs Pocket Option Bonuses</h2>
          <div className="glass-card overflow-x-auto">
            <div className="min-w-[550px]">
              <div className="grid grid-cols-3 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
                <div>Feature</div>
                <div className="text-center">Quotex</div>
                <div className="text-center">Pocket Option</div>
              </div>
              {[
                { feature: 'First Deposit Bonus', quotex: '30%', po: '50-100%' },
                { feature: 'Min Deposit for Bonus', quotex: '$100', po: 'Varies' },
                { feature: 'Turnover Requirement', quotex: 'Not explicitly stated', po: '50x bonus amount' },
                { feature: 'Bonus Withdrawal', quotex: 'Only profits', po: 'Only profits (after turnover)' },
                { feature: 'Cancel Bonus', quotex: 'Contact support', po: 'Cancel in settings' },
                { feature: 'Tournaments', quotex: 'Occasional', po: 'Regular (some free)' },
                { feature: 'Our Recommendation', quotex: 'Optional', po: 'Skip for beginners' },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
                  <div className="text-white font-medium">{row.feature}</div>
                  <div className="text-center text-gray-300">{row.quotex}</div>
                  <div className="text-center text-gray-300">{row.po}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            For Pocket Option bonus details, see our{' '}
            <Link href={`/${locale}/blog/pocket-option-promo-code`} className="text-emerald-400 hover:underline">Pocket Option Promo Code guide</Link>.
          </p>
        </section>

        {/* Beware Fake Codes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Beware of Fake Quotex Promo Codes</h2>
          <div className="glass-card p-6">
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Many websites and social media accounts publish fake or expired Quotex promo codes to drive traffic.
              Here is how to protect yourself:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/[0.03] rounded-lg p-4">
                <h3 className="font-semibold text-emerald-400 text-sm mb-2">Trusted Sources</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>&bull; Quotex official website</li>
                  <li>&bull; In-app &ldquo;Promo&rdquo; section</li>
                  <li>&bull; Official email newsletters</li>
                  <li>&bull; Verified affiliate partners like us</li>
                </ul>
              </div>
              <div className="bg-white/[0.03] rounded-lg p-4">
                <h3 className="font-semibold text-red-400 text-sm mb-2">Warning Signs (Likely Fake)</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>&bull; Promises of 100%+ deposit bonus</li>
                  <li>&bull; Requires downloading external apps</li>
                  <li>&bull; Asks for your Quotex password</li>
                  <li>&bull; &ldquo;Limited time! Only 5 codes left!&rdquo;</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Never share your Quotex login credentials with anyone claiming to activate a promo code.
              Legitimate codes are entered directly in the platform&apos;s Promo section.
            </p>
          </div>
        </section>

        {/* Bonus Math */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Is the 30% Bonus Actually Worth It? The Math</h2>
          <div className="glass-card p-6">
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Unlike Pocket Option&apos;s explicit 50x turnover, Quotex&apos;s bonus terms are less transparent.
              But the principle is similar &mdash; early withdrawal forfeits the bonus. Here is a realistic scenario:
            </p>
            <div className="bg-white/[0.03] rounded-lg p-4">
              <h3 className="font-semibold text-white text-sm mb-2">Scenario: $200 Deposit + 30% Bonus ($60)</h3>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>&bull; Your trading balance: $260 ($200 real + $60 bonus)</li>
                <li>&bull; Your $200 is used for trades first</li>
                <li>&bull; If you withdraw before using the bonus: bonus credits are cancelled</li>
                <li>&bull; If you trade through your $200 and use bonus funds: only profits from bonus trades can be withdrawn</li>
                <li>&bull; <strong className="text-emerald-400">Best case:</strong> You trade profitably, use up your deposit through normal trading, then the $60 bonus gives you extra trading capital</li>
                <li>&bull; <strong className="text-red-400">Worst case:</strong> You want to withdraw early but lose bonus credits and any bonus-derived profits</li>
              </ul>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              <strong className="text-white">Bottom line:</strong> The 30% bonus is a nice-to-have if you plan to trade actively anyway.
              But it should never be the reason you choose Quotex or deposit more than you planned.
            </p>
          </div>
        </section>

        {/* Better Than Bonuses */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Better Than Any Promo Code</h2>
          <div className="glass-card p-6 border-emerald-500/20">
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Instead of chasing bonuses, here is what actually gives you an edge on Quotex:
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5 font-bold">1.</span>
                <span><strong className="text-white">$10,000 free demo account</strong> &mdash; Practice until you are consistently profitable. No bonus needed.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5 font-bold">2.</span>
                <span><strong className="text-white">High payouts (up to 98%)</strong> &mdash; The real advantage of Quotex. Higher payouts = better returns on winning trades.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5 font-bold">3.</span>
                <span><strong className="text-white">$10 minimum deposit</strong> &mdash; Start real trading with minimal risk. Better than a 30% bonus on $100.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5 font-bold">4.</span>
                <span><strong className="text-white">Learning to trade profitably</strong> &mdash; A 60% win rate with good money management beats any bonus in the long run.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'What is the latest Quotex promo code?', a: 'Quotex occasionally releases promo codes through their official social media and email. Using our link automatically applies the 30% first deposit bonus — no code needed. Always check the "Promo" section in your Quotex dashboard.' },
              { q: 'Can I withdraw the bonus money?', a: 'No. Bonus funds themselves cannot be withdrawn. Only profits generated from trades using bonus funds can be withdrawn. Your own deposited money can always be withdrawn (subject to same-method rules).' },
              { q: 'What happens if I withdraw my deposit early?', a: 'If you withdraw your deposited funds before the bonus funds are used, Quotex reserves the right to cancel all bonus credits and any profits derived from bonus trades.' },
              { q: 'Can I use multiple promo codes?', a: 'Generally, only one bonus can be active at a time. Check the Promo section in your account for available offers. New promo codes typically apply to subsequent deposits.' },
              { q: 'Is the 30% bonus worth it?', a: 'For active traders who plan to trade through their deposit anyway, it\'s a nice extra. For beginners or casual traders, we recommend starting without bonuses to keep things simple and avoid withdrawal complications.' },
              { q: 'Are third-party promo codes legitimate?', a: 'Be cautious. Many websites publish fake or expired promo codes. Only use codes from Quotex\'s official channels (website, email, social media) or trusted affiliate partners like us.' },
            ].map((faq) => (
              <div key={faq.q} className="glass-card p-5">
                <h3 className="font-semibold text-white text-sm mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="glass-card p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-3">Ready to Start?</h2>
          <p className="text-gray-400 mb-6 text-sm max-w-lg mx-auto">
            Open your account through our link for the 30% deposit bonus.
            Or try the free demo first &mdash; no deposit required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <CtaButton broker="quotex" label="Open Account + 30% Bonus" campaign="promo_quotex_bottom" />
            <CtaButton broker="quotex" type="demo" label="Try Free Demo First" variant="secondary" campaign="promo_quotex_bottom" />
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Quotex Deposit & Withdrawal Guide', href: `/${locale}/blog/quotex-deposit-withdrawal`, badge: 'Money Guide' },
              { title: 'Is Quotex Real or Fake?', href: `/${locale}/blog/is-quotex-real-or-fake`, badge: 'Trust Analysis' },
              { title: 'Pocket Option Promo Code 2026', href: `/${locale}/blog/pocket-option-promo-code`, badge: 'Bonus Guide' },
              { title: 'Quotex Trading Strategy 2026', href: `/${locale}/blog/quotex-strategy`, badge: 'Strategy' },
            ].map((article) => (
              <Link key={article.href} href={article.href} className="glass-card p-5 hover:border-emerald-500/30 transition-colors group">
                <span className="badge-green text-xs mb-2 inline-block">{article.badge}</span>
                <h3 className="font-semibold text-white text-sm group-hover:text-emerald-400 transition-colors">{article.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Risk Disclaimer */}
        <section className="border border-red-500/20 bg-red-500/[0.03] rounded-xl p-6">
          <h2 className="text-sm font-bold text-red-400 mb-2">Risk Disclaimer</h2>
          <p className="text-xs text-gray-500 leading-relaxed">
            Binary options trading involves substantial risk of loss and is not suitable for all investors.
            Bonuses come with terms and conditions that may restrict withdrawals. Always read the full bonus terms
            before accepting any promotional offer. The information on this page is for educational purposes only
            and should not be considered financial advice. Only trade with money you can afford to lose entirely.
          </p>
        </section>
      </article>
    </div>
  );
}
