import globals from 'globals';
import tseslint from 'typescript-eslint';
import boundaries from 'eslint-plugin-boundaries';
import eslint from '@eslint/js';

export default tseslint.config(
  {
    ignores: [".next/**", "apps/web/next-env.d.ts"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    plugins: {
      boundaries,
    },
    rules: {
      // Aquí se pueden añadir reglas específicas para 'boundaries' si es necesario.
    },
  },
);
