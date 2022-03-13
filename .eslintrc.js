module.exports = {
   'env': {
      'browser': true,
      'es2021': true,
      'node': true,
   },
   'extends': [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended'
   ],
   'parser': '@typescript-eslint/parser',
   'parserOptions': {
      'ecmaVersion': 'latest',
      'sourceType': 'module'
   },
   'plugins': [
      '@typescript-eslint',
      'unused-imports'
   ],
   'ignorePatterns': ['dist/', '*.d.ts'],
   'rules': {
      'indent': [
         'error',
         3,
         {
            'SwitchCase': 1
         }
      ],
      'linebreak-style': [
         'error',
         'unix'
      ],
      'quotes': [
         'error',
         'single'
      ],
      'semi': [
         'error',
         'always'
      ],
      'no-trailing-spaces': [
         'warn',
         {
            'ignoreComments': true
         }
      ],
      'space-before-function-paren': ['error', {
         'anonymous': 'never',
         'named': 'never',
         'asyncArrow': 'always'
      }],
      'unused-imports/no-unused-imports': 'warn',
      '@typescript-eslint/no-unused-vars': [
         'warn',
         {
            'argsIgnorePattern': '^_'
         }
      ],
   }
};
