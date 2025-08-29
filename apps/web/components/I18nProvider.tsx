'use client';
import { I18nContext } from '../components/i18n-context';
import { Messages } from '@repo/i18n';

export default function I18nProvider({
  children,
  messages,
}: {
  children: React.ReactNode;
  messages: Messages;
}) {
  const t = (key: string): string => {
    const keys = key.split('.');
    let current: unknown = messages; // Start with unknown
    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = (current as Record<string, unknown>)[k]; // Cast to Record<string, unknown>
      } else {
        return key; // Return the key itself if not found
      }
    }
    return String(current); // Ensure it's a string
  };

  const format = (key: string, values?: Record<string, string | number>): string => {
    const keys = key.split('.');
    let message: unknown = messages; // Start with unknown
    for (const k of keys) {
      if (message && typeof message === 'object' && k in message) {
        message = (message as Record<string, unknown>)[k]; // Cast to Record<string, unknown>
      } else {
        return key; // Return the key itself if not found
      }
    }

    if (values) {
      // Ensure message is a string before replacing
      if (typeof message === 'string') {
        for (const [k, v] of Object.entries(values)) {
          message = (message as string).replace(`{${k}}`, String(v));
        }
      } else {
        // Handle case where message is not a string (e.g., it's an object)
        return String(message); // Or throw an error, or return key
      }
    }
    return String(message);
  };

  return <I18nContext.Provider value={{ t, format }}>{children}</I18nContext.Provider>;
}