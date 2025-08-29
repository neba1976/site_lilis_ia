import '../globals.css';
import type { ReactNode } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import PrelineScript from '../../components/PrelineScript';
import LangSwitcher from '../../components/LangSwitcher';

import Sidebar from '../../components/Sidebar';

export const metadata = {
  title: 'AI Chat | Preline-style',
  description: 'Home calcada al template Preline AI Chat',
};

const THEME_BOOTSTRAP = `
const html = document.documentElement;
const v = localStorage.getItem('hs_theme');
const dark = v==='dark' || (v==='auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
const light = v==='light' || (v==='auto' && !window.matchMedia('(prefers-color-scheme: dark)').matches);
if (dark) html.classList.add('dark'); else html.classList.remove('dark');
if (light) html.classList.add('light'); else html.classList.remove('light');
`;

export default async function RootLayout(props: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { children, params } = props;
  const { locale } = await params;

  return (
    <html lang={locale} className="relative min-h-full">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <Script id="theme-bootstrap" strategy="beforeInteractive">
          {THEME_BOOTSTRAP}
        </Script>
        <link rel="icon" href="/assets/img/logo.svg" />
      </head>
      <body className="dark:bg-neutral-800 antialiased">
        <PrelineScript />
        {/* Sidebar global */}
        <Sidebar locale={locale} />

        {/* Header */}
        <header
          className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur dark:bg-neutral-800/80 dark:border-neutral-700"
          style={{ marginInlineStart: 'var(--sbw, 0px)' }}
        >
          <div className="max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-3 py-3">
              <div className="flex items-center gap-2">
                
                <Link href={`/${locale}`} className="flex items-center gap-2">
                  <img
                    src="/assets/img/logo.svg"
                    alt="logo"
                    className="size-7 rounded"
                  />
                  <span className="font-semibold dark:text-neutral-200">
                    AI Suite
                  </span>
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <LangSwitcher current={locale} />
              </div>
            </div>
          </div>
        </header>

        <main
          className="min-h-[calc(100dvh-64px)]"
          style={{ marginInlineStart: 'var(--sbw, 0px)' }}
        >
          {children}
        </main>
        <footer
          className="border-t py-6 text-center text-sm text-slate-500 dark:text-neutral-400 dark:border-neutral-700"
          style={{ marginInlineStart: 'var(--sbw, 0px)' }}
        >
          v3.12 • Next 15 • Custom i18n • Template UI
        </footer>
      </body>
    </html>
  );
}
