'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState, useContext } from 'react';
import type { JSX } from 'react';
import { I18nContext } from './i18n-context';

export default function Sidebar({ locale }: { locale: string }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState<boolean>(false); // This is the state controlled by the button
  const { t } = useContext(I18nContext);

  // State to track if we are in mobile mode
  const [isMobileMode, setIsMobileMode] = useState(false);

  // Effect to detect mobile mode and update isMobileMode state
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsMobileMode(!e.matches); // true if screen < 768px
    };

    // Initial check
    setIsMobileMode(!mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []); // Run once on mount

  // Effect to control the 'collapsed' state based on 'isMobileMode'
  useEffect(() => {
    if (isMobileMode) {
      // If entering mobile mode, collapse the sidebar
      setCollapsed(true);
    } else {
      // If exiting mobile mode (going to desktop), expand the sidebar
      setCollapsed(false);
    }
  }, [isMobileMode]); // Run whenever isMobileMode changes

  // Read persisted state
  useEffect(() => {
    const stored = localStorage.getItem('sidebar_collapsed');
    if (stored) setCollapsed(stored === '1');
  }, []);

  // Utility: update CSS var --sbw based on viewport & state
  const syncWidthVar = (stateCollapsed = collapsed) => {
    const md = window.matchMedia('(min-width: 768px)').matches;
    const width = md ? (stateCollapsed ? 52 : 260) : 52;
    document.documentElement.style.setProperty('--sbw', width + 'px');
    window.dispatchEvent(
      new CustomEvent('sidebar-width-change', { detail: { width } }),
    );
  };

  // Persist & sync on change
  useEffect(() => {
    localStorage.setItem('sidebar_collapsed', collapsed ? '1' : '0');
    // defer to next tick to ensure DOM is ready
    const id = requestAnimationFrame(() => syncWidthVar(collapsed));
    return () => cancelAnimationFrame(id);
  }, [collapsed]);

  

  const isActive = (slug: string) =>
    pathname ? pathname.startsWith(`/${locale}/${slug}`) : false;

  const Item = ({
    href,
    icon,
    label,
  }: {
    href: string;
    icon: JSX.Element; 
    label: string;
  }) => {
    const active = isActive(href.split('/').pop() || '');

    return (
      <li>
        <Link
          href={href}
          title={label}
          className={`group flex items-center gap-3 rounded-xl ${
            collapsed
              ? 'justify-center p-2' // When collapsed, center content, add some padding
              : 'px-3 py-2' // When expanded, use original padding
          } ${
            !collapsed && active && 'bg-gray-100 dark:bg-neutral-700/60' // Active state for expanded
          } ${
            !collapsed && 'hover:bg-gray-100 dark:hover:bg-neutral-700/60' // Hover for expanded
          }`}
        >
          <span
            className={`inline-flex items-center justify-center size-9 rounded-lg border text-gray-600 dark:border-neutral-700 dark:text-neutral-300 ${
              !collapsed &&
              'group-hover:border-gray-300 dark:group-hover:border-neutral-600'
            } ${
              collapsed && active && 'bg-gray-100 dark:bg-neutral-700/60' // Active state for collapsed icon
            } ${
              collapsed && 'hover:bg-gray-100 dark:hover:bg-neutral-700/60' // Hover for collapsed icon
            }`}
          >
            {icon}
          </span>
          {!collapsed && (
            <span className="truncate dark:text-neutral-200">{label}</span>
          )}
        </Link>
      </li>
    );
  };

  return (
    <div
      id="hs-pro-sidebar"
      className="fixed inset-y-0 start-0 z-60 bg-white border-e border-gray-200 dark:bg-neutral-800 dark:border-neutral-700 md:end-auto md:bottom-0"
      role="dialog"
      aria-label="Sidebar"
      style={{ width: 'var(--sbw, 0px)' }}
    >
      <div
        className="relative flex flex-col h-full max-h-full"
        style={{ width: 'var(--sbw, 0px)' }}
      >
        <header className="py-2.5 px-3 flex justify-between items-center gap-x-2">
          <div className="flex items-center gap-x-2 w-full">
            {!collapsed && (
              <a
                href="#"
                aria-label="Logo"
                className="shrink-0 inline-flex items-center font-semibold w-full justify-center text-xl gap-x-2"
              >
                <img
                  src="/assets/img/logo-2.png"
                  alt="Logo"
                  className="w-auto h-14"
                />
              </a>
            )}
          </div>
          {!isMobileMode && (
            <button
              onClick={() => setCollapsed((v) => !v)}
              className="my-2 inline-flex items-center justify-center size-9 rounded-lg border hover:bg-gray-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700/60"
              aria-label="Collapse sidebar"
              title={collapsed ? t('sidebar.expand') : t('sidebar.collapse')}
            >
              {collapsed ? (
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 3v18" />
                  <path d="m8 9 3 3-3 3" />
                </svg>
              ) : (
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 3v18" />
                  <path d="m10 15-3-3 3-3" />
                </svg>
              )}
            </button>
          )}
        </header>

        <nav className="px-3 py-4">
          <div
            className="text-xs uppercase text-gray-400 dark:text-neutral-500 mb-2"
            style={{ display: collapsed ? 'none' : 'block' }}
          >
            {t('common.explore')}
          </div>
          <ul className="space-y-1">
            <Item
              href={`/${locale}/catalog`}
              label={t('common.catalog')}
              icon={
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              }
            />
            <Item
              href={`/${locale}/team`}
              label={t('common.team')}
              icon={
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M16 11a4 4 0 10-8 0 4 4 0 008 0Z" />
                  <path d="M12 15c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4Z" />
                </svg>
              }
            />
            <Item
              href={`/${locale}/pricing`}
              label={t('common.pricing')}
              icon={
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 1v22M17 5H9a4 4 0 000 8h6a4 4 0 010 8H7" />
                </svg>
              }
            />
            <Item
              href={`/${locale}/faq`}
              label={t('common.faq')}
              icon={
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 9h6M9 13h3" />
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              }
            />
            <Item
              href={`/${locale}/contact`}
              label={t('common.contact')}
              icon={
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 8V7a2 2 0 00-2-2H5a2 2 0 00-2 2v1" />
                  <path d="M3 8l9 6 9-6" />
                  <path d="M21 8v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
                </svg>
              }
            />
          </ul>
        </nav>
      </div>
    </div>
  );
}