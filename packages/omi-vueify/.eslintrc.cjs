module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    quotes: ['error', 'single'],
    'semi': ['error', 'never']
  },
  ignorePatterns: ['dist', 'node_modules'],
  overrides: [
    {
      files: ['**/*.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
}; 