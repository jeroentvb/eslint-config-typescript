import ts from 'typescript-eslint';
import unusedImports from "eslint-plugin-unused-imports";

export default ts.config(
   eslint.configs.recommended,
   tseslint.configs.recommended,
   defineConfig({
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

      rules: {
         indent: ['error', 3, {
            'SwitchCase': 1,
         }],

         linebreak-style: ['error', 'unix'],
         quotes: ['error', 'single'],
         semi: ['error', 'always'],

         no-trailing-spaces: ['warn', {
            ignoreComments: true,
         }],

         space-before-function-paren: ['error', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always',
         }],

         unused-imports/no-unused-imports: 'warn',

         typescript-eslint/no-unused-vars: ['warn', {
            argsIgnorePattern: '^_',
         }],
      },

      plugins: {
         'unused-imports': unusedImports,
      },
  })
);
