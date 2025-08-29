'use client';
import { useState, useRef, useEffect, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { LANGS } from '@repo/i18n';

export default function LangSwitcher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!btnRef.current) return;
      const menu = document.getElementById('lang-menu');
      if (
        menu &&
        !menu.contains(e.target as Node) &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  const restPath = useMemo(() => {
    const parts = (pathname || '/').split('/').filter(Boolean);
    const after = parts.length > 0 ? parts.slice(1).join('/') : '';
    return after ? `/${after}` : '';
  }, [pathname]);

  const go = (code: string) => {
    window.location.assign(`/${code}${restPath}`);
  };

  return (
    <div className="relative">
      <button
        ref={btnRef}
        title="Translate"
        aria-label="Translate"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center size-9 rounded-lg border hover:bg-gray-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700/60"
      >
        <svg
          className="size-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="8" />
          <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
        </svg>
      </button>
      {open && (
        <div
          id="lang-menu"
          className="absolute right-0 top-full mt-2 z-50 w-48 rounded-xl border bg-white shadow-md p-1 dark:bg-neutral-800 dark:border-neutral-700"
        >
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => go(l.code)}
              className="w-full text-left rounded-lg px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-neutral-700/60"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
