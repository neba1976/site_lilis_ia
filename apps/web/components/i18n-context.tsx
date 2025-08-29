'use client';
import { createContext } from 'react';

export const I18nContext = createContext({
  t: (key: string) => key, // Default no-op translator
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  format: (key: string, _values?: Record<string, string | number>) => key, // Default no-op formatter
});
