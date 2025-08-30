'use client';
import { useEffect, useContext } from 'react';
import { I18nContext } from '../../components/i18n-context';

export default function Home() {
  const { t } = useContext(I18nContext);

  useEffect(() => {}, []);

  return (
    <div className="max-w-[90rem] mx-auto px-3 sm:px-6 lg:px-10 py-6 relative">
      <div className="max-w-3xl mx-auto pt-24 pb-16 text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-neutral-100">
          {t('page.what_can_i_help_with')}
        </h1>

        {/* Chat input card */}
        <div className="mt-6 mx-auto max-w-3xl text-left">
          <div className="rounded-2xl border bg-white p-3 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="flex items-center gap-2 px-1 pb-2 text-sm text-gray-500">
              <button className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 hover:bg-gray-100 dark:hover:bg-neutral-700/60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>

                <span>{t('page.refresh')}</span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="flex-1 border rounded-xl px-4 py-3 text-[15px] placeholder:text-gray-400 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200"
                placeholder={t('page.ask_anything')}
              />
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center justify-center size-10 rounded-lg bg-neutral-600 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}