import ts from 'typescript-eslint';
import unusedImports from 'eslint-plugin-unused-imports';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';

export default ts.config(
   eslint.configs.recommended,
   tseslint.configs.recommended,
   defineConfig({
      name: 'jeroentvb/eslint-config-typescript',

      languageOptions: {
         globals: {
            ...globals.browser,
            ...globals.node,
         },

         parser: tseslint.parser,
         'ecmaVersion': 'latest',
         'sourceType': 'module',
         parserOptions: {},
      },

      plugins: {
         'unused-imports': unusedImports,
         'typescript-eslint': tseslint.plugin,
         '@stylistic': stylistic
      },

      rules: {
         '@stylistic/indent': ['error', 3, {
            'SwitchCase': 1,
         }],

         '@stylistic/linebreak-style': ['error', 'unix'],
         '@stylistic/quotes': ['error', 'single'],
         '@stylistic/semi': ['error', 'always'],

         '@stylistic/no-trailing-spaces': ['warn', {
            'ignoreComments': true,
         }],

         '@stylistic/space-before-function-paren': ['error', {
            'anonymous': 'never',
            'named': 'never',
            'asyncArrow': 'always',
         }],

         'unused-imports/no-unused-imports': 'warn',

         'typescript-eslint/no-unused-vars': ['warn', {
            'varsIgnorePattern': '^_',
            'argsIgnorePattern': '^_',
         }],
      },
   })
);
