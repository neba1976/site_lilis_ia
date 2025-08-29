export const LANGS = [
  {code:'es', label:'Español'},
  {code:'en', label:'English (US)'},
  {code:'en-UK', label:'English (UK)'},
  {code:'de', label:'Deutsch'},
  {code:'da', label:'Dansk'},
  {code:'it', label:'Italiano'},
  {code:'zh-TW', label:'中文 (繁體)'},
] as const;

export const CODES = LANGS.map(l=>l.code);
