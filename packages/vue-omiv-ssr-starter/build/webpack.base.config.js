const path = require("path");
// const projectRoot = path.resolve(__dirname, '../')
const vueConfig = require("./vue-loader.config");

module.exports = {
  devtool: "#source-map",
  entry: {
    app: "./src/client-entry.js",
    vendor: ["vue", "vue-router", "axios"]
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".js", ".vue"],
    alias: {
      src: path.resolve(__dirname, "../src"),
      assets: path.resolve(__dirname, "../src/assets"),
      components: path.resolve(__dirname, "../src/components")
    }
  },

  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/dist/",
    filename: "client-bundle.[chunkhash].js"
  },

  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   loader: 'eslint-loader',
      //   exclude: /node_modules/
      // },
      // {
      //   enforce: 'pre',
      //   test: /\.vue$/,
      //   loader: 'eslint-loader',
      //   exclude: /node_modules/
      // },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      }
    ]
  }
};
