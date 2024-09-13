import { fileURLToPath } from 'url';

/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: fileURLToPath(new URL('../../tooling/tailwind/web.ts', import.meta.url)),
  tailwindFunctions: ['cn', 'cva'],
  trailingComma: 'none',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSameLine: true,
  printWidth: 120,
  overrides: [
    {
      files: '*.json.hbs',
      options: {
        parser: 'json'
      }
    },
    {
      files: '*.js.hbs',
      options: {
        parser: 'babel'
      }
    }
  ]
};

export default config;
