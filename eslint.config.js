const {
   defineConfig,
   globalIgnores,
} = require('eslint/config');

const globals = require('globals');
const tsParser = require('@typescript-eslint/parser');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const unusedImports = require('eslint-plugin-unused-imports');
const js = require('@eslint/js');

const {
   FlatCompat,
} = require('@eslint/eslintrc');

const compat = new FlatCompat({
   baseDirectory: __dirname,
   recommendedConfig: js.configs.recommended,
   allConfig: js.configs.all
});

module.exports = defineConfig([{
   languageOptions: {
      globals: {
         ...globals.browser,
         ...globals.node,
      },

      parser: tsParser,
      'ecmaVersion': 'latest',
      'sourceType': 'module',
      parserOptions: {},
   },

   extends: compat.extends('eslint:recommended', 'plugin:@typescript-eslint/recommended'),

   plugins: {
      '@typescript-eslint': typescriptEslint,
      'unused-imports': unusedImports,
   },

   'rules': {
      'indent': ['error', 3, {
         'SwitchCase': 1,
      }],

      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],

      'no-trailing-spaces': ['warn', {
         'ignoreComments': true,
      }],

      'space-before-function-paren': ['error', {
         'anonymous': 'never',
         'named': 'never',
         'asyncArrow': 'always',
      }],

      'unused-imports/no-unused-imports': 'warn',

      '@typescript-eslint/no-unused-vars': ['warn', {
         'argsIgnorePattern': '^_',
      }],
   },
}, globalIgnores(['**/dist/', '**/*.d.ts'])]);
