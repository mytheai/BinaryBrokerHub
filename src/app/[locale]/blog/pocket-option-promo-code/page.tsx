'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function PocketOptionPromoCodePage() {
  const locale = useLocale();

  return (
    <div>
      <Breadcrumbs items={[
        { label: 'Blog', href: `/${locale}/blog` },
        { label: 'Pocket Option Promo Code 2026' },
      ]} />

      <article className="section-container py-16 max-w-4xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge-blue">Bonus Guide</span>
            <span className="text-xs text-gray-600">Updated May 2026 &bull; 9 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            Pocket Option Promo Code 2026 &mdash; Deposit Bonus Up to 100%
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Latest Pocket Option bonus codes, deposit promotions, and how they actually work.
            Full breakdown of terms so you know exactly what you&apos;re getting &mdash; and what you&apos;re giving up.
          </p>
        </header>

        {/* Quick Summary */}
        <section className="glass-card p-6 mb-10">
          <h2 className="text-lg font-bold mb-3 text-blue-400">Quick Summary</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50-100%</div>
              <div className="text-xs text-gray-400">Deposit Bonus Range</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-400">50x</div>
              <div className="text-xs text-gray-400">Turnover Requirement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">Skip It</div>
              <div className="text-xs text-gray-400">Our Advice for Beginners</div>
            </div>
          </div>
        </section>

        {/* Current Offers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Active Promotions (May 2026)</h2>
          <div className="space-y-4">
            <div className="glass-card p-6 border-blue-500/20">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-white">50-100% Deposit Bonus</h3>
                <span className="badge-blue">Active</span>
              </div>
              <p className="text-sm text-gray-400 mb-2">
                Pocket Option regularly offers 50-100% deposit bonuses. The percentage and availability
                change frequently &mdash; check the &ldquo;Promo&rdquo; section in your account for current offers.
                Using our link ensures you see the latest available bonus.
              </p>
              <ul className="text-xs text-gray-500 space-y-1 mb-4">
                <li>&bull; Bonus percentage varies by promotion period</li>
                <li>&bull; Applied to qualifying deposits</li>
                <li>&bull; 50x turnover requirement applies</li>
              </ul>
              <CtaButton broker="pocketOption" label="Check Current Bonus" campaign="promo_po" className="w-full sm:w-auto" />
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-white">Free Tournaments</h3>
                <span className="badge-green">Regular</span>
              </div>
              <p className="text-sm text-gray-400">
                Pocket Option offers regular tournaments &mdash; some with free entry. Compete against other traders
                for cash prizes. Check the Tournaments section inside your account.
                This is genuinely free money opportunity &mdash; no deposit or bonus strings attached.
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-white">Achievements &amp; Gems</h3>
                <span className="badge-gold">Ongoing</span>
              </div>
              <p className="text-sm text-gray-400">
                Earn Gems through active trading. Exchange for perks: risk-free trades, cashback, and bonuses.
                Three tiers: Bronze, Silver, Gold with increasing rewards. This is a loyalty program, not a deposit bonus.
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-white">Promo Code Entry</h3>
                <span className="badge-blue">Manual</span>
              </div>
              <p className="text-sm text-gray-400">
                Pocket Option releases promo codes through their official Telegram channel, email newsletters,
                and social media. Enter codes in your account under Promo &rarr; Promo Code.
                Codes typically have expiry dates (often 30 days). Always verify codes on official channels.
              </p>
            </div>
          </div>
        </section>

        {/* Bonus Tiers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Bonus Tiers &amp; Percentages</h2>
          <div className="glass-card p-6">
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Pocket Option bonus percentages vary based on deposit amount and current promotions.
              Here is a typical structure (may change without notice):
            </p>
            <div className="glass-card overflow-hidden">
              <div className="grid grid-cols-3 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
                <div>Deposit Amount</div>
                <div className="text-center">Typical Bonus</div>
                <div className="text-center">Turnover Required</div>
              </div>
              {[
                { deposit: '$5 - $49', bonus: '0-30%', turnover: '50x bonus' },
                { deposit: '$50 - $99', bonus: '30-50%', turnover: '50x bonus' },
                { deposit: '$100 - $499', bonus: '50-70%', turnover: '50x bonus' },
                { deposit: '$500 - $999', bonus: '70-100%', turnover: '50x bonus' },
                { deposit: '$1,000+', bonus: 'Up to 100%', turnover: '50x bonus' },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
                  <div className="text-white font-medium">{row.deposit}</div>
                  <div className="text-center text-blue-400">{row.bonus}</div>
                  <div className="text-center text-amber-400">{row.turnover}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * These are typical ranges. Actual bonus percentages vary by promotion period.
              Check inside your account for current offers.
            </p>
          </div>
        </section>

        {/* Critical Warning */}
        <section className="mb-12">
          <div className="border border-red-500/30 bg-red-500/[0.03] rounded-xl p-6">
            <h2 className="text-lg font-bold text-red-400 mb-3">Critical: Bonus Terms You MUST Know</h2>
            <div className="space-y-3 text-sm text-gray-300">
              <p>After analyzing Pocket Option&apos;s bonus terms and conditions:</p>
              <ul className="space-y-2 ml-4">
                <li>&bull; <strong className="text-white">50x turnover requirement</strong> &mdash; You must trade 50x the bonus amount before withdrawing bonus profits</li>
                <li>&bull; <strong className="text-white">Withdrawal cancels bonus</strong> &mdash; If you withdraw before meeting turnover, all bonus funds AND bonus profits are removed</li>
                <li>&bull; <strong className="text-white">Time limits apply</strong> &mdash; Promo codes often expire within one month</li>
                <li>&bull; <strong className="text-white">Rules change without notice</strong> &mdash; Pocket Option can modify or cancel bonuses at any time</li>
                <li>&bull; <strong className="text-white">Bonus locks your deposit</strong> &mdash; Effectively, accepting a bonus means you commit to trading through your deposit</li>
              </ul>

              <div className="mt-4 bg-red-500/[0.05] rounded-lg p-4">
                <h3 className="font-semibold text-white text-sm mb-2">What 50x Turnover Actually Means</h3>
                <p className="text-gray-400">
                  If you get a $100 bonus, you need to make $5,000 worth of trades before you can withdraw any bonus profits.
                  With $1 trades, that is 5,000 individual trades. With a 60% win rate at 85% payout, you would lose money
                  on turnover alone. <strong className="text-red-300">The math is heavily against you.</strong>
                </p>
              </div>

              <p className="mt-4 text-red-200/70">
                <strong>Our strong recommendation:</strong> Skip the bonuses entirely as a beginner.
                The 50x turnover requirement means you&apos;d need to trade $5,000 on a $100 bonus before withdrawing any bonus profits.
                This encourages overtrading and is how beginners lose money. Focus on the $5 minimum deposit and learn to trade profitably first.
              </p>
            </div>
          </div>
        </section>

        {/* How to Apply Promo Code */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">How to Apply a Promo Code (Step-by-Step)</h2>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Log Into Your Account', desc: 'Open Pocket Option and log in. If you don\'t have an account, register first (takes 1 minute).' },
              { step: '2', title: 'Go to Promo Section', desc: 'Navigate to the "Promo" tab in your account dashboard. This is where all promotional offers are listed.' },
              { step: '3', title: 'Click "Promo Code"', desc: 'Find the promo code entry field. It\'s usually labeled "Enter Promo Code" or "Activate Code".' },
              { step: '4', title: 'Enter the Code', desc: 'Type or paste the promo code exactly as provided. Codes are case-sensitive and have expiry dates.' },
              { step: '5', title: 'Make Qualifying Deposit', desc: 'If the code requires a deposit, make the qualifying deposit amount. The bonus will be credited after.' },
              { step: '6', title: 'Verify Bonus Applied', desc: 'Check your balance to confirm the bonus was credited. If not, contact support with your code.' },
            ].map((s) => (
              <div key={s.step} className="glass-card p-5 flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-400 font-bold text-sm">{s.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">{s.title}</h3>
                  <p className="text-sm text-gray-400">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Better Alternative */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Better Than Any Promo Code</h2>
          <div className="glass-card p-6 border-emerald-500/20">
            <p className="text-gray-300 leading-relaxed mb-4 text-sm">
              Instead of chasing bonuses with restrictive terms, here&apos;s what actually gives you an edge:
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5 font-bold">1.</span>
                <span><strong className="text-white">$50,000 free demo account</strong> &mdash; Practice until you&apos;re consistently profitable. No bonus needed.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5 font-bold">2.</span>
                <span><strong className="text-white">Copy trading</strong> &mdash; Follow proven traders for free. No deposit bonus matches a 68%+ win rate from{' '}
                  <Link href={`/${locale}/blog/pocket-option-copy-trading`} className="text-blue-400 hover:underline">copy trading</Link>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5 font-bold">3.</span>
                <span><strong className="text-white">$5 minimum deposit</strong> &mdash; Start real trading with just $5. Lower risk than any bonus scheme.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5 font-bold">4.</span>
                <span><strong className="text-white">Free tournaments</strong> &mdash; Compete for cash prizes without depositing. Actual free money opportunity.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Fake Promo Code Warning */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Beware of Fake Promo Codes</h2>
          <div className="glass-card p-6">
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              The internet is full of websites and YouTube videos claiming to have &ldquo;exclusive&rdquo; Pocket Option promo codes.
              Here is how to tell real from fake:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/[0.03] rounded-lg p-4">
                <h3 className="font-semibold text-emerald-400 text-sm mb-2">Legitimate Sources</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>&bull; Pocket Option official website</li>
                  <li>&bull; Official Telegram channel</li>
                  <li>&bull; Email from @pocketoption.com</li>
                  <li>&bull; In-app Promo section</li>
                  <li>&bull; Trusted affiliate partners</li>
                </ul>
              </div>
              <div className="bg-white/[0.03] rounded-lg p-4">
                <h3 className="font-semibold text-red-400 text-sm mb-2">Red Flags (Likely Fake)</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>&bull; &ldquo;200% bonus guaranteed&rdquo; &mdash; too good to be true</li>
                  <li>&bull; Requires downloading unknown apps</li>
                  <li>&bull; Asks for your password or account details</li>
                  <li>&bull; Random Telegram groups sharing &ldquo;VIP codes&rdquo;</li>
                  <li>&bull; Codes that never seem to work</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              If a code does not work, it is likely expired or fake. Never share your account password with anyone
              claiming to &ldquo;activate&rdquo; a promo code for you.
            </p>
          </div>
        </section>

        {/* Bonus Math Breakdown */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">The Math Behind Bonus Turnover</h2>
          <div className="glass-card p-6">
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Let&apos;s calculate whether the bonus actually helps you, using a realistic scenario:
            </p>
            <div className="space-y-4">
              <div className="bg-white/[0.03] rounded-lg p-4">
                <h3 className="font-semibold text-white text-sm mb-2">Scenario: $100 Deposit + 100% Bonus ($100)</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>&bull; Turnover needed: $100 &times; 50 = <strong className="text-white">$5,000 in trades</strong></li>
                  <li>&bull; With $1 trades: that is 5,000 individual trades</li>
                  <li>&bull; At 60% win rate and 85% payout: expected loss = $50 per 1,000 trades</li>
                  <li>&bull; Over 5,000 trades: expected loss from turnover = <strong className="text-red-400">~$250</strong></li>
                  <li>&bull; Bonus value: $100. Net impact: <strong className="text-red-400">-$150</strong></li>
                </ul>
              </div>
              <p className="text-sm text-amber-300">
                In most realistic scenarios, the cost of meeting turnover requirements exceeds the bonus value.
                This is why we recommend skipping bonuses unless you are already an active, profitable trader.
              </p>
            </div>
          </div>
        </section>

        {/* Gems System Explained */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Pocket Option Gems &amp; Achievement System</h2>
          <div className="glass-card p-6">
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Besides promo codes, Pocket Option has a built-in reward system worth understanding:
            </p>
            <div className="glass-card overflow-hidden">
              <div className="grid grid-cols-3 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
                <div>Tier</div>
                <div className="text-center">Requirement</div>
                <div className="text-center">Perks</div>
              </div>
              {[
                { tier: 'Bronze', req: 'New account', perks: 'Basic gem earning, standard support' },
                { tier: 'Silver', req: 'Active trading + achievements', perks: 'Higher gem rates, risk-free trades' },
                { tier: 'Gold', req: 'High-volume trading', perks: 'Maximum gem rates, cashback, VIP support' },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
                  <div className="text-white font-medium">{row.tier}</div>
                  <div className="text-center text-gray-400 text-xs">{row.req}</div>
                  <div className="text-center text-gray-300 text-xs">{row.perks}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Gems can be exchanged for risk-free trades, cashback, and other bonuses.
              Unlike promo code bonuses, Gems are earned through normal trading activity &mdash;
              no special deposits or turnover requirements beyond your regular trading.
            </p>
          </div>
        </section>

        {/* Comparison with Quotex */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Pocket Option vs Quotex Bonuses</h2>
          <div className="glass-card overflow-x-auto">
            <div className="min-w-[550px]">
              <div className="grid grid-cols-3 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
                <div>Feature</div>
                <div className="text-center">Pocket Option</div>
                <div className="text-center">Quotex</div>
              </div>
              {[
                { feature: 'Max Bonus', po: 'Up to 100%', quotex: '30%' },
                { feature: 'Turnover Requirement', po: '50x bonus', quotex: 'Not stated explicitly' },
                { feature: 'Min Deposit', po: '$5', quotex: '$10 ($100 for bonus)' },
                { feature: 'Bonus Cancellation', po: 'Possible (forfeit bonus)', quotex: 'Contact support' },
                { feature: 'Tournaments', po: 'Regular (some free)', quotex: 'Occasional' },
                { feature: 'Gems/Loyalty', po: 'Yes (3 tiers)', quotex: 'No' },
                { feature: 'Risk Level', po: 'High (50x turnover)', quotex: 'Moderate' },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
                  <div className="text-white font-medium">{row.feature}</div>
                  <div className="text-center text-gray-300">{row.po}</div>
                  <div className="text-center text-gray-300">{row.quotex}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            For Quotex bonus details, see our{' '}
            <Link href={`/${locale}/blog/quotex-promo-code`} className="text-emerald-400 hover:underline">Quotex Promo Code guide</Link>.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'What is the latest Pocket Option promo code?', a: 'Pocket Option releases promo codes through their official Telegram channel and email newsletters. Codes change frequently. Check the Promo section in your account for currently available codes. Using our link may automatically activate available bonuses.' },
              { q: 'Is the 100% bonus worth it?', a: 'For most traders, no. The 50x turnover requirement means on a $100 bonus, you need $5,000 in trading volume before withdrawing bonus profits. This encourages overtrading. We recommend starting without bonuses.' },
              { q: 'Can I cancel a bonus after accepting it?', a: 'Yes. Go to your account settings and cancel the active bonus. You will forfeit the bonus funds and any profits from bonus trades, but your own deposited money remains withdrawable.' },
              { q: 'What is the 50x turnover requirement?', a: 'It means you must trade 50 times the bonus amount before you can withdraw profits from bonus trades. Example: $100 bonus × 50 = $5,000 in trading volume needed. This is very difficult for most traders to achieve profitably.' },
              { q: 'Are Pocket Option promo codes from YouTube/Telegram real?', a: 'Some are legitimate, many are fake or expired. Only trust codes from Pocket Option\'s official channels. Using our referral link is the safest way to get available bonuses.' },
              { q: 'Can I use bonuses on demo account?', a: 'No. Bonuses only apply to real money accounts. However, the demo account gives you $50,000 in virtual funds — which is far more useful for learning than any deposit bonus.' },
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
          <h2 className="text-2xl font-bold mb-3">Start Smart, Not With Bonuses</h2>
          <p className="text-gray-400 mb-6 text-sm max-w-lg mx-auto">
            Open a free demo account and practice until you&apos;re profitable.
            Then deposit just $5 to start real trading. That&apos;s worth more than any 100% bonus with impossible terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <CtaButton broker="pocketOption" type="demo" label="Free Demo ($50K)" campaign="promo_po_bottom" />
            <CtaButton broker="pocketOption" label="Open Account ($5 min)" variant="secondary" campaign="promo_po_bottom" />
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Pocket Option Withdrawal Guide', href: `/${locale}/blog/pocket-option-withdrawal`, badge: 'Money Guide' },
              { title: 'Is Pocket Option Legit?', href: `/${locale}/blog/is-pocket-option-legit`, badge: 'Trust Analysis' },
              { title: 'Quotex Promo Code 2026', href: `/${locale}/blog/quotex-promo-code`, badge: 'Bonus Guide' },
              { title: 'Pocket Option Copy Trading', href: `/${locale}/blog/pocket-option-copy-trading`, badge: 'Feature Guide' },
            ].map((article) => (
              <Link key={article.href} href={article.href} className="glass-card p-5 hover:border-blue-500/30 transition-colors group">
                <span className="badge-blue text-xs mb-2 inline-block">{article.badge}</span>
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400 transition-colors">{article.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Risk Disclaimer */}
        <section className="border border-red-500/20 bg-red-500/[0.03] rounded-xl p-6">
          <h2 className="text-sm font-bold text-red-400 mb-2">Risk Disclaimer</h2>
          <p className="text-xs text-gray-500 leading-relaxed">
            Binary options trading involves substantial risk of loss and is not suitable for all investors.
            Bonuses come with terms and conditions including turnover requirements that may restrict withdrawals.
            Always read the full bonus terms before accepting any promotional offer. The information on this page
            is for educational purposes only and should not be considered financial advice.
            Only trade with money you can afford to lose entirely.
          </p>
        </section>
      </article>
    </div>
  );
}
