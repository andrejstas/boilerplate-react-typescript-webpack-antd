module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier'
  ],
  plugins: ['eslint-plugin-import', 'react', '@typescript-eslint', 'jest', 'prettier'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: ['external', 'internal'],
        alphabetize: {
          order: 'asc'
        },
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '+(react|react-dom)',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '+(components|screens)',
            group: 'internal'
          },
          {
            pattern: '+(components|screens)/**',
            group: 'internal'
          }
        ],
        pathGroupsExcludedImportTypes: []
      }
    ],
    "prettier/prettier": 2
  },
};
