export const LANGS = [
  {code:'es', label:'Español'},
  {code:'en', label:'English (US)'},
  {code:'fr', label:'Français'},
] as const;

export const CODES = LANGS.map(l=>l.code);
