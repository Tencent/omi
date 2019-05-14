const path = require('path');

module.exports = {
  module: {
    rules: [
      // {
      //   test: /\.s?css$/,
      //   use: ['style-loader', 'raw-loader', 'sass-loader'],
      //   include: [
      //     path.resolve(__dirname, '../css/'),
      //   ],
      // },
      // {
      //   test: /\.svg$/,
      //   use: [
      //     {
      //       loader: 'babel-loader',
      //       query: {
      //         presets: ['airbnb'],
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(js|jsx|mjs)$/,
        //include: paths.appSrc,
        loader: require.resolve('babel-loader'),
        options: {
          "presets": [
            "@babel/preset-env",
            [
              "@babel/preset-react",
              {
                "pragma": "Omi.h"
              }
            ]
          ],
          "plugins": [
            "@babel/plugin-proposal-class-properties",
            [
              "@babel/plugin-proposal-decorators",
              {
                "legacy": true
              }
            ],
            "@babel/plugin-proposal-function-bind",
            "@babel/plugin-proposal-object-rest-spread",
            "@babel/plugin-syntax-dynamic-import"
          ],
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
        },
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
