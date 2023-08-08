module.exports = {
  extends: [require.resolve('@umijs/lint/dist/config/eslint'), 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': 'off',
  },
};
