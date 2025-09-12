// eslint.config.js (raíz) — Flat Config moderno (sin tseslint.config)
import globals from 'globals';
import tseslint from 'typescript-eslint';
import boundaries from 'eslint-plugin-boundaries';
import eslint from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';

export default [
  // Ignorar artefactos
  {
    ignores: ['**/.next/**', '**/node_modules/**'],
  },

  // Reglas base recomendadas (JS) + TypeScript (incluye parser)
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  // Entorno: browser + node
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Plugin boundaries (reglas opcionales)
  {
    plugins: { boundaries },
    rules: {
      // Añade aquí reglas de boundaries si las necesitas
      // 'boundaries/entry-point': 'off'
    },
  },

  // Reglas de Next (Core Web Vitals) SOLO para apps/web
  {
    files: ['apps/web/**/*.{js,jsx,ts,tsx}'],
    plugins: { '@next/next': nextPlugin },
    rules: {
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },

  // Silenciar la regla en el archivo generado por Next
  {
    files: ['apps/web/next-env.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
];
