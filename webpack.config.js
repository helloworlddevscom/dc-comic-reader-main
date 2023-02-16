const path = require("path");
// const pkg = require("./package.json");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackShellPluginNext = require("webpack-shell-plugin-next");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require("webpack-node-externals");

const parentName = "ComicReader";
const componentName = "ComicReaderApp";


/*
  This is our postCSS loader which gets fed into the next loader.
*/

const postcss = {
  loader: "postcss-loader",
  options: {
    postcssOptions: {
      plugins: { autoprefixer: true },
    },
  },
};
const typescript = {
  loader: "ts-loader",
};

const javascript = {
  test: /\.(tsx)$/,
  exclude: [/node_modules/, /build/, /public/],
  use: [
    {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
      },
    }
  ],
};

// this is our sass/css loader. It handles files that are require('something.scss')
const styles = {
  test: /\.(css|scss)$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        sourceMap: true,
      },
    },
    {
      loader: "resolve-url-loader",
    },
    postcss,
    {
      loader: "sass-loader",
      options: {
        sourceMap: true,
      },
    },
  ],
};

const config = {
  target: "web",
  mode: "development",
  devtool: "source-map",
  // devtool: 'inline-source-map'
  entry: {
    // [componentName]: path.resolve(
    //   __dirname,
    //   `./src/components/${componentName}.tsx`
    // ),
    [parentName]: path.resolve(__dirname, `./src/components/${parentName}.tsx`),
  },
  output: {
    path: path.resolve(__dirname, "build-dev", parentName, "public"),
    filename: `${componentName}.js`,
    library: `${componentName}`,
    libraryTarget: "umd",
    // globalObject: "this",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `${componentName}.css`,
    }),
    new WebpackShellPluginNext({
      onBuildStart: {
        scripts: ['echo "Webpack Start..."', "rm -rf ./build/ComicReaderApp;"],
        blocking: true,
        parallel: false,
      },
      onBuildEnd: {
        scripts: ['echo "Webpack End..."'],
        blocking: false,
        parallel: true,
      },
    }),
  ],
  module: {
    rules: [
      javascript,
      styles,
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
        },
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: [".tsx", ".js", ".scss", ".css"],
    // alias: {
    //   "react": path.resolve(__dirname, "./node_modules/react"),
    //   "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    // },
  },
  externals: [nodeExternals()],
};

module.exports = config;
