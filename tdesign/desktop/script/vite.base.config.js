import * as path from 'path';

const isCustomElement = (tag) => tag.startsWith('td-') || tag.startsWith('tdesign-theme');

export const resolveConfig = {
  alias: {
    '@': path.resolve(__dirname, '../'),
    '@test': path.resolve(__dirname, '../test'),
    '@/src': path.resolve(__dirname, '../src/'),
    '@common': path.resolve(__dirname, '../src/_common'),
  },
};

export const basePlugin = [
  [
  
  ],
];
