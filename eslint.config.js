const nextPlugin = require('@next/eslint-plugin-next');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      'prettier': prettierPlugin,
      '@next/next': nextPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...typescriptPlugin.configs['recommended'].rules,
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
    },
  },
];
