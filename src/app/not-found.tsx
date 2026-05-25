'use client';

import Link from 'next/link';

export default function RootNotFound() {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>404 — Page Not Found | BinaryBrokerHub</title>
        <style>{`
          body {
            margin: 0;
            background: #0a0f1a;
            color: #fff;
            font-family: Inter, system-ui, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            text-align: center;
          }
          a {
            color: #34d399;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        `}</style>
      </head>
      <body>
        <div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>404</h1>
          <p style={{ color: '#9ca3af', fontSize: '1.125rem', marginBottom: '2rem' }}>
            Page not found. Let&apos;s get you back on track.
          </p>
          <Link href="/en">Go to Homepage</Link>
        </div>
      </body>
    </html>
  );
}
