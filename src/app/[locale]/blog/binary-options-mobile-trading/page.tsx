'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';

export default function BinaryOptionsMobileTradingPage() {
  const locale = useLocale();

  return (
    <article className="section-container py-16 max-w-4xl mx-auto">
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge-blue">App Comparison</span>
          <span className="text-xs text-gray-600">Updated May 2026 • 12 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
          Best Binary Options Apps 2026 — Mobile Trading Compared
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          We tested every major binary options mobile app for speed, features, reliability, and user experience.
          Here&apos;s which apps are actually worth downloading and which ones to avoid.
        </p>
      </header>

      {/* Quick Ranking */}
      <section className="glass-card p-6 mb-10">
        <h2 className="text-lg font-bold mb-4 text-blue-400">Quick Mobile App Rankings</h2>
        <div className="space-y-3">
          {[
            { rank: '1', name: 'IQ Option', score: '9.4/10', platform: 'iOS + Android', highlight: 'Best overall app', color: 'text-emerald-400' },
            { rank: '2', name: 'Pocket Option', score: '9.1/10', platform: 'Android + PWA', highlight: 'Best for copy trading', color: 'text-emerald-400' },
            { rank: '3', name: 'Quotex', score: '8.7/10', platform: 'Web App (PWA)', highlight: 'Cleanest interface', color: 'text-blue-400' },
            { rank: '4', name: 'Deriv GO', score: '8.5/10', platform: 'iOS + Android', highlight: 'Best for multipliers', color: 'text-blue-400' },
            { rank: '5', name: 'Binomo', score: '8.0/10', platform: 'iOS + Android', highlight: 'Simplest for beginners', color: 'text-gray-400' },
            { rank: '6', name: 'Olymp Trade', score: '7.8/10', platform: 'iOS + Android', highlight: 'Good tutorials in-app', color: 'text-gray-400' },
            { rank: '7', name: 'ExpertOption', score: '7.5/10', platform: 'iOS + Android', highlight: 'Social trading feed', color: 'text-gray-400' },
          ].map((app) => (
            <div key={app.rank} className="flex items-center gap-4 bg-white/[0.03] rounded-lg p-3">
              <span className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-400 font-bold text-xs">#{app.rank}</span>
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium text-sm">{app.name}</span>
                  <span className={`text-xs font-bold ${app.color}`}>{app.score}</span>
                </div>
                <div className="text-xs text-gray-400">{app.platform} — {app.highlight}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IQ Option — Best App */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">#1 IQ Option — Best Binary Options App Overall</h2>
        <div className="glass-card p-6 border border-emerald-500/20">
          <p className="text-sm text-gray-300 mb-4">
            IQ Option consistently delivers the best mobile trading experience in the binary options space.
            Their app is available on both iOS and Android with native performance, a clean charting interface,
            and nearly all features from the desktop platform.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            <div className="bg-white/[0.03] rounded-lg p-3">
              <h3 className="text-xs font-bold text-gray-400 mb-1">Platforms</h3>
              <p className="text-sm text-white">iOS App Store + Google Play</p>
              <p className="text-xs text-gray-400 mt-1">Native apps, not web wrappers</p>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-3">
              <h3 className="text-xs font-bold text-gray-400 mb-1">App Rating</h3>
              <p className="text-sm text-white">4.3★ (Google Play)</p>
              <p className="text-xs text-gray-400 mt-1">10M+ downloads</p>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-3">
              <h3 className="text-xs font-bold text-gray-400 mb-1">Offline Features</h3>
              <p className="text-sm text-white">Chart analysis only</p>
              <p className="text-xs text-gray-400 mt-1">Trading requires connection</p>
            </div>
          </div>

          <h3 className="text-sm font-bold text-white mb-3">What Makes IQ Option&apos;s App Stand Out</h3>
          <ul className="space-y-2 text-sm text-gray-400 ml-4 mb-4">
            <li>• <strong className="text-white">Multi-chart layout:</strong> View up to 4 charts simultaneously on tablets, 2 on phones</li>
            <li>• <strong className="text-white">Full indicator suite:</strong> 100+ technical indicators available on mobile — same as desktop</li>
            <li>• <strong className="text-white">Instant deposits:</strong> In-app deposits via cards, e-wallets, and crypto without leaving the app</li>
            <li>• <strong className="text-white">Push notifications:</strong> Price alerts, trade expiry reminders, and market news</li>
            <li>• <strong className="text-white">Practice mode:</strong> Switch between demo ($10,000) and real accounts with one tap</li>
            <li>• <strong className="text-white">Video tutorials:</strong> Built-in learning section with trading lessons</li>
          </ul>

          <h3 className="text-sm font-bold text-white mb-3">Drawbacks</h3>
          <ul className="space-y-2 text-sm text-gray-400 ml-4 mb-4">
            <li>• Binary options not available in EU/EEA countries (regulatory restrictions)</li>
            <li>• Some advanced drawing tools missing compared to desktop</li>
            <li>• App can be resource-heavy on older phones (requires 2GB+ RAM)</li>
          </ul>

          <Link href={`/${locale}/iq-option`} className="text-blue-400 text-sm hover:underline">
            Read full IQ Option review →
          </Link>
        </div>
      </section>

      {/* Pocket Option Mobile */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">#2 Pocket Option — Best Mobile Copy Trading</h2>
        <div className="glass-card p-6">
          <p className="text-sm text-gray-300 mb-4">
            Pocket Option offers an Android app on Google Play and a progressive web app (PWA) for iOS users.
            The standout feature on mobile is full copy trading access — you can browse, analyze, and copy
            traders entirely from your phone.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            <div className="bg-white/[0.03] rounded-lg p-3">
              <h3 className="text-xs font-bold text-gray-400 mb-1">Platforms</h3>
              <p className="text-sm text-white">Android + PWA (iOS)</p>
              <p className="text-xs text-gray-400 mt-1">No native iOS app</p>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-3">
              <h3 className="text-xs font-bold text-gray-400 mb-1">App Rating</h3>
              <p className="text-sm text-white">4.1★ (Google Play)</p>
              <p className="text-xs text-gray-400 mt-1">1M+ downloads</p>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-3">
              <h3 className="text-xs font-bold text-gray-400 mb-1">Unique Feature</h3>
              <p className="text-sm text-white">Mobile copy trading</p>
              <p className="text-xs text-gray-400 mt-1">Full leaderboard on phone</p>
            </div>
          </div>

          <h3 className="text-sm font-bold text-white mb-3">Mobile Strengths</h3>
          <ul className="space-y-2 text-sm text-gray-400 ml-4 mb-4">
            <li>• <strong className="text-white">Copy trading on mobile:</strong> Full access to trader leaderboard, stats, and one-tap copying</li>
            <li>• <strong className="text-white">180+ assets:</strong> Trade forex, crypto, stocks, and commodities on the go</li>
            <li>• <strong className="text-white">Fast execution:</strong> Trades execute in under 1 second on stable connections</li>
            <li>• <strong className="text-white">Achievements system:</strong> Gamified trading with rewards and bonuses for milestones</li>
            <li>• <strong className="text-white">PWA for iOS:</strong> Add to home screen for an app-like experience without App Store</li>
          </ul>

          <h3 className="text-sm font-bold text-white mb-3">Drawbacks</h3>
          <ul className="space-y-2 text-sm text-gray-400 ml-4 mb-4">
            <li>• No native iOS app — PWA works but lacks push notifications</li>
            <li>• Android app occasionally lags during high-volatility periods</li>
            <li>• Chart tools more limited than desktop version</li>
          </ul>

          <Link href={`/${locale}/pocket-option`} className="text-blue-400 text-sm hover:underline">
            Read full Pocket Option review →
          </Link>
        </div>
      </section>

      {/* Quotex Mobile */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">#3 Quotex — Cleanest Mobile Interface</h2>
        <div className="glass-card p-6">
          <p className="text-sm text-gray-300 mb-4">
            Quotex takes a web-first approach — their platform is a highly optimized web application that
            works beautifully on mobile browsers. No app download needed. The interface is arguably the
            cleanest and most intuitive of any binary options platform on mobile.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            <div className="bg-white/[0.03] rounded-lg p-3">
              <h3 className="text-xs font-bold text-gray-400 mb-1">Platforms</h3>
              <p className="text-sm text-white">Web App (any browser)</p>
              <p className="text-xs text-gray-400 mt-1">Works on iOS + Android</p>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-3">
              <h3 className="text-xs font-bold text-gray-400 mb-1">Load Time</h3>
              <p className="text-sm text-white">Under 3 seconds</p>
              <p className="text-xs text-gray-400 mt-1">Lightweight web app</p>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-3">
              <h3 className="text-xs font-bold text-gray-400 mb-1">Unique Feature</h3>
              <p className="text-sm text-white">No download needed</p>
              <p className="text-xs text-gray-400 mt-1">Instant access via browser</p>
            </div>
          </div>

          <h3 className="text-sm font-bold text-white mb-3">Mobile Strengths</h3>
          <ul className="space-y-2 text-sm text-gray-400 ml-4 mb-4">
            <li>• <strong className="text-white">No app needed:</strong> Just visit the website on your phone — everything works</li>
            <li>• <strong className="text-white">Minimal UI:</strong> Clean, distraction-free interface ideal for quick trades</li>
            <li>• <strong className="text-white">Fast loading:</strong> Lighter than native apps — works well even on 3G</li>
            <li>• <strong className="text-white">Cross-device sync:</strong> Start on phone, continue on desktop seamlessly</li>
            <li>• <strong className="text-white">Built-in signals:</strong> Trade signals available directly in the mobile interface</li>
          </ul>

          <h3 className="text-sm font-bold text-white mb-3">Drawbacks</h3>
          <ul className="space-y-2 text-sm text-gray-400 ml-4 mb-4">
            <li>• No native app means no push notifications for trade alerts</li>
            <li>• Chart interaction can be finicky on small phone screens</li>
            <li>• Limited indicator selection compared to IQ Option</li>
          </ul>

          <Link href={`/${locale}/quotex`} className="text-blue-400 text-sm hover:underline">
            Read full Quotex review →
          </Link>
        </div>
      </section>

      {/* Deriv GO */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">#4 Deriv GO — Best for Multiplier Trading</h2>
        <div className="glass-card p-6">
          <p className="text-sm text-gray-300 mb-4">
            Deriv GO is a dedicated mobile app specifically designed for multiplier trading and synthetic
            indices. It&apos;s not a full-featured platform — it focuses on doing one thing well: quick
            multiplier trades on the go.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            <div className="bg-white/[0.03] rounded-lg p-3">
              <h3 className="text-xs font-bold text-gray-400 mb-1">Platforms</h3>
              <p className="text-sm text-white">iOS + Android</p>
              <p className="text-xs text-gray-400 mt-1">Native apps</p>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-3">
              <h3 className="text-xs font-bold text-gray-400 mb-1">Focus</h3>
              <p className="text-sm text-white">Multipliers</p>
              <p className="text-xs text-gray-400 mt-1">Not traditional BO</p>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-3">
              <h3 className="text-xs font-bold text-gray-400 mb-1">Unique Feature</h3>
              <p className="text-sm text-white">Synthetic indices 24/7</p>
              <p className="text-xs text-gray-400 mt-1">Trade weekends</p>
            </div>
          </div>

          <h3 className="text-sm font-bold text-white mb-3">Mobile Strengths</h3>
          <ul className="space-y-2 text-sm text-gray-400 ml-4 mb-4">
            <li>• <strong className="text-white">Purpose-built:</strong> Not a desktop port — designed specifically for mobile</li>
            <li>• <strong className="text-white">24/7 synthetic indices:</strong> Trade Volatility, Crash/Boom indices any time</li>
            <li>• <strong className="text-white">Regulated broker:</strong> Deriv is licensed by MFSA, VFSC, and other authorities</li>
            <li>• <strong className="text-white">Deal cancellation:</strong> Unique feature to cancel losing trades within 60 minutes</li>
          </ul>

          <Link href={`/${locale}/deriv`} className="text-blue-400 text-sm hover:underline">
            Read full Deriv review →
          </Link>
          {' | '}
          <Link href={`/${locale}/blog/deriv-synthetic-indices-guide`} className="text-blue-400 text-sm hover:underline">
            Deriv Synthetic Indices Guide →
          </Link>
        </div>
      </section>

      {/* Other Apps */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Other Binary Options Mobile Apps</h2>
        <div className="space-y-4">
          {/* Binomo */}
          <div className="glass-card p-5">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-base font-bold text-white">Binomo</h3>
              <span className="text-xs text-gray-400">8.0/10</span>
            </div>
            <p className="text-sm text-gray-300 mb-2">
              Simple, beginner-friendly app available on iOS and Android. Good for traders who want a
              no-frills experience. The app is lightweight and works well on budget phones. Limited
              asset selection (about 70 assets) but the core trading experience is solid.
            </p>
            <div className="flex gap-4 text-xs text-gray-400">
              <span>iOS + Android</span>
              <span>Min. $10</span>
              <span>70+ assets</span>
            </div>
          </div>

          {/* Olymp Trade */}
          <div className="glass-card p-5">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-base font-bold text-white">Olymp Trade</h3>
              <span className="text-xs text-gray-400">7.8/10</span>
            </div>
            <p className="text-sm text-gray-300 mb-2">
              Full-featured app with a strong focus on education. The in-app learning center includes
              video courses, quizzes, and trading simulations. Good for beginners who want to learn
              while trading. The interface is clean but can feel cluttered on smaller screens.
            </p>
            <div className="flex gap-4 text-xs text-gray-400">
              <span>iOS + Android</span>
              <span>Min. $10</span>
              <span>80+ assets</span>
            </div>
          </div>

          {/* ExpertOption */}
          <div className="glass-card p-5">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-base font-bold text-white">ExpertOption</h3>
              <span className="text-xs text-gray-400">7.5/10</span>
            </div>
            <p className="text-sm text-gray-300 mb-2">
              Decent app with a unique social trading feed — see what other traders are buying/selling
              in real-time. The app works fine for basic trading but the UI feels dated compared to
              competitors. Social features are the main draw here.
            </p>
            <div className="flex gap-4 text-xs text-gray-400">
              <span>iOS + Android</span>
              <span>Min. $10</span>
              <span>100+ assets</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Mobile App Feature Comparison</h2>
        <div className="glass-card overflow-hidden overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="grid grid-cols-6 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
              <div>Feature</div>
              <div className="text-center">IQ Option</div>
              <div className="text-center">Pocket Option</div>
              <div className="text-center">Quotex</div>
              <div className="text-center">Deriv GO</div>
              <div className="text-center">Binomo</div>
            </div>
            {[
              { feature: 'Native iOS App', iq: '✓', po: '✗ (PWA)', qx: '✗ (Web)', dv: '✓', bn: '✓' },
              { feature: 'Native Android App', iq: '✓', po: '✓', qx: '✗ (Web)', dv: '✓', bn: '✓' },
              { feature: 'Copy Trading', iq: '✗', po: '✓', qx: '✗', dv: '✗', bn: '✗' },
              { feature: 'Demo Account', iq: '✓', po: '✓', qx: '✓', dv: '✓', bn: '✓' },
              { feature: 'Push Notifications', iq: '✓', po: 'Android only', qx: '✗', dv: '✓', bn: '✓' },
              { feature: 'Indicators', iq: '100+', po: '30+', qx: '20+', dv: '10+', bn: '15+' },
              { feature: 'OTC Trading', iq: '✗', po: '✓', qx: '✗', dv: 'Synthetics', bn: '✗' },
              { feature: 'Min. Deposit', iq: '$10', po: '$5', qx: '$10', dv: '$5', bn: '$10' },
              { feature: 'Weekend Trading', iq: '✗', po: '✓ (OTC)', qx: '✗', dv: '✓ (Synth)', bn: '✗' },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-6 p-3 text-xs ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
                <div className="text-white font-medium">{row.feature}</div>
                <div className="text-center text-gray-300">{row.iq}</div>
                <div className="text-center text-gray-300">{row.po}</div>
                <div className="text-center text-gray-300">{row.qx}</div>
                <div className="text-center text-gray-300">{row.dv}</div>
                <div className="text-center text-gray-300">{row.bn}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">How to Choose the Right Mobile App</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { need: 'Best All-Around App', recommendation: 'IQ Option — native apps on both platforms, 100+ indicators, best charting on mobile. The gold standard for mobile trading.', broker: 'IQ Option' },
            { need: 'Copy Trading on Mobile', recommendation: 'Pocket Option — the only broker with full copy trading on mobile. Browse traders, set copies, and monitor results from your phone.', broker: 'Pocket Option' },
            { need: 'No App Download', recommendation: 'Quotex — their web platform works perfectly on mobile browsers. No storage space needed, works on any device with a browser.', broker: 'Quotex' },
            { need: 'Weekend/24/7 Trading', recommendation: 'Deriv GO — trade synthetic indices around the clock, even on weekends. Purpose-built mobile experience for quick trades.', broker: 'Deriv' },
            { need: 'Complete Beginner', recommendation: 'Binomo — the simplest interface with the gentlest learning curve. Low minimum deposit ($10) and straightforward trading flow.', broker: 'Binomo' },
            { need: 'Learning While Trading', recommendation: 'Olymp Trade — best in-app education with video courses and interactive tutorials built right into the trading app.', broker: 'Olymp Trade' },
          ].map((item) => (
            <div key={item.need} className="glass-card p-5">
              <h3 className="font-semibold text-blue-400 text-sm mb-2">{item.need}</h3>
              <p className="text-sm text-gray-400">{item.recommendation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Trading Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Mobile Trading Tips</h2>
        <div className="glass-card p-6">
          <div className="space-y-4">
            {[
              { tip: 'Use WiFi for Trading', detail: 'Mobile data can be unreliable. A dropped connection during a trade could mean a missed entry or inability to manage positions. Always prefer WiFi.' },
              { tip: 'Enable Do Not Disturb', detail: 'Incoming calls and notifications can disrupt your focus during short-expiry trades. Enable DND when actively trading.' },
              { tip: 'Keep Your Phone Charged', detail: 'Running out of battery mid-trade is a real risk. Keep your phone above 30% or plugged in while trading.' },
              { tip: 'Use Landscape Mode for Charts', detail: 'Most apps support landscape orientation which gives you a much better view of price charts. Essential for technical analysis.' },
              { tip: 'Start with Longer Expiries', detail: 'On mobile, your reaction time is slower. Start with 5-15 minute expiries instead of 60-second turbo trades.' },
              { tip: 'Secure Your App', detail: 'Enable biometric login (fingerprint/face). Don\'t trade on public WiFi without a VPN. Log out when not trading.' },
            ].map((item) => (
              <div key={item.tip} className="flex gap-3">
                <span className="text-blue-400 text-sm mt-0.5 flex-shrink-0">→</span>
                <div>
                  <span className="text-white font-medium text-sm">{item.tip}</span>
                  <p className="text-gray-400 text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href={`/${locale}/blog/binary-options-copy-trading`} className="glass-card p-4 hover:border-blue-500/30 transition-colors">
            <h3 className="text-sm font-semibold text-white mb-1">Binary Options Copy Trading Guide 2026</h3>
            <p className="text-xs text-gray-400">Learn how to copy top traders automatically — works on mobile too.</p>
          </Link>
          <Link href={`/${locale}/blog/otc-trading-binary-options`} className="glass-card p-4 hover:border-blue-500/30 transition-colors">
            <h3 className="text-sm font-semibold text-white mb-1">OTC Trading in Binary Options</h3>
            <p className="text-xs text-gray-400">Trade on weekends with OTC markets — available on Pocket Option mobile.</p>
          </Link>
          <Link href={`/${locale}/blog/deriv-synthetic-indices-guide`} className="glass-card p-4 hover:border-blue-500/30 transition-colors">
            <h3 className="text-sm font-semibold text-white mb-1">Deriv Synthetic Indices Guide</h3>
            <p className="text-xs text-gray-400">24/7 trading on Deriv GO mobile app — synthetic indices explained.</p>
          </Link>
          <Link href={`/${locale}/blog/pocket-option-copy-trading`} className="glass-card p-4 hover:border-blue-500/30 transition-colors">
            <h3 className="text-sm font-semibold text-white mb-1">Pocket Option Copy Trading Deep Dive</h3>
            <p className="text-xs text-gray-400">Detailed copy trading walkthrough with real results.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="glass-card p-8 text-center mb-10">
        <h2 className="text-2xl font-bold mb-3">Download the Best Trading Apps</h2>
        <p className="text-gray-400 mb-6 text-sm max-w-lg mx-auto">
          Start with a free demo account on any of these platforms. Test the mobile experience
          before committing real money.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <CtaButton broker="pocketOption" type="demo" label="Try Pocket Option (Demo)" campaign="blog_mobile" />
          <CtaButton broker="iqOption" type="demo" label="Try IQ Option (Demo)" variant="secondary" campaign="blog_mobile" />
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="border border-gray-700/50 rounded-xl p-5">
        <p className="text-xs text-gray-500 leading-relaxed">
          <strong className="text-gray-400">Risk Disclaimer:</strong> Binary options trading involves substantial risk of loss and is not suitable
          for all investors. Mobile trading adds additional risks including connectivity issues and smaller screen sizes that may affect
          decision-making. You could lose some or all of your invested capital. Only trade with money you can afford to lose. App ratings
          and features described are based on our testing as of May 2026 and may change. This content is for educational purposes only
          and does not constitute financial advice.
        </p>
      </section>
    </article>
  );
}
