'use client';
import { useEffect } from 'react';



export default function Home() {
  
  
  
  useEffect(() => {}, []);

  return (
    <div className="max-w-[90rem] mx-auto px-3 sm:px-6 lg:px-10 py-6 relative">
      <div className="max-w-3xl mx-auto pt-24 pb-16 text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-neutral-100">
          What can I help with?
        </h1>

        {/* Chat input card */}
        <div className="mt-6 mx-auto max-w-3xl text-left">
          <div className="rounded-2xl border bg-white p-3 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="flex items-center gap-2 px-1 pb-2 text-sm text-gray-500">
              <button className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 hover:bg-gray-100 dark:hover:bg-neutral-700/60">
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
                <span>Tools</span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="flex-1 border rounded-xl px-4 py-3 text-[15px] placeholder:text-gray-400 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200"
                placeholder="Ask anything..."
              />
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-sm dark:border-neutral-700 dark:text-neutral-200">
                  gpt-o3
                  <svg
                    className="size-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button className="inline-flex items-center justify-center size-9 rounded-lg bg-emerald-600 text-white">
                  <svg
                    className="size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="m5 12 14-7-7 14-2-6-6-1z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Chips */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              'Health',
              'Learn',
              'Technology',
              'Life stuff',
              'Science',
              'Language',
            ].map((x, i) => (
              <button
                key={i}
                className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700/60"
              >
                {x}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
