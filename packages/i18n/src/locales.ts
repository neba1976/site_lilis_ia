export const LANGS = [
  {code:'es', label:'Español'},
  {code:'en', label:'English (US)'},
  {code:'fr', label:'Français'},
] as const;

export const CODES = LANGS.map(l=>l.code);


export const getMessages = async (locale: string) => {
  switch (locale) {
    case 'es':
      return (await import('./messages/es.json')).default;
    case 'en':
      return (await import('./messages/en.json')).default;
    case 'fr':
      return (await import('./messages/fr.json')).default;
    default:
      return (await import('./messages/en.json')).default;
  }
};

export type Messages = Awaited<ReturnType<typeof getMessages>>;

export type Locale = (typeof CODES)[number];

export const getTranslator = async (locale: Locale) => {
  const messages = await getMessages(locale);

  return (key: keyof Messages) => {
    return messages[key];
  };
};

export const getFormatter = async (locale: Locale) => {
  const messages = await getMessages(locale);

  return (key: string, values?: Record<string, string | number>) => {
    const keys = key.split('.');
    let message: unknown = messages;
    for (const k of keys) {
      if (typeof message === 'object' && message !== null && k in message) {
        message = (message as Record<string, unknown>)[k];
      } else {
        return key; // Return the key itself if not found
      }
    }

    if (values) {
      if (typeof message === 'string') {
        for (const [k, v] of Object.entries(values)) {
          message = (message as string).replace(`{${k}}`, String(v));
        }
      } else {
        return String(message);
      }
    }
    return String(message);
  };
};

export const getScopedFormatter = async (locale: Locale, scope: string) => {
  const messages = await getMessages(locale);

  return (key: string, values?: Record<string, string | number>) => {
    const scopedKey = `${scope}.${key}`;
    const keys = scopedKey.split('.'); // Use scopedKey for traversal
    let message: unknown = messages;
    for (const k of keys) {
      if (typeof message === 'object' && message !== null && k in message) {
        message = (message as Record<string, unknown>)[k];
      } else {
        return scopedKey; // Return the scopedKey itself if not found
      }
    }

    if (values) {
      if (typeof message === 'string') {
        for (const [k, v] of Object.entries(values)) {
          message = (message as string).replace(`{${k}}`, String(v));
        }
      } else {
        return String(message);
      }
    }
    return String(message);
  };
};