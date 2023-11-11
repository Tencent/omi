module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  env: {
    browser: true,
  },
  rules: {
    quotes: ['error', 'single'],
    'semi': ['error', 'never']
  },
  ignorePatterns: [],
  overrides: [
    {
      files: ['**/*.ts'],
      parserOptions: {
       
      },
     
   
    },
  ],
};
