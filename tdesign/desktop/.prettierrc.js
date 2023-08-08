module.exports = {
  pluginSearchDirs: false,
  plugins: [
    require.resolve('prettier-plugin-organize-imports'),
    require.resolve('prettier-plugin-packagejson'),
  ],
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  semi: false,
  trailingComma: 'none',
  bracketSpacing: true,
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'preserve',
      },
    },
  ],
};
