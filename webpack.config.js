var webpack = require("webpack");
var dashboard = require("webpack-dashboard");
var dashboardPlugin = require("webpack-dashboard/plugin");
var path = require("path");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
  devServer: {
    hotOnly: true
  },
  entry: [
    "script!jquery/dist/jquery.min.js",
    "script!foundation-sites/dist/foundation.min.js",
    "./app/app.jsx"
  ],
  externals: {
    jquery: "jQuery"
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false
    //   }
    // }),
    // new webpack.optimize.CommonsChunkPlugin(
    //   {name:'common'}
    // ),
    new dashboardPlugin(dashboard.setData),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  output: {
    path: __dirname,
    // where bundle.js is created
    // has different effect when using webpack devserver vs. express
    // change filename to ./public/bundle.js when using express
    filename: "./bundle.js",
    publicPath: "/"
    // the prefixPath, as in localhost/{publicPath}/{filename}
    // prepended to assets like foo.jpg inhtml.
    // in other words, webpack rewrites url's in html
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      "node_modules",
      "./app/components/",
      "./app/redux-playground/",
      "./app/api/"
    ],
    alias: {
      app: "app",
      applicationStyles: "app/styles/app.scss"
    },
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-0"]
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, "./node_modules/foundation-sites/scss")
    ]
  },
  devtool: process.env.NODE_ENV == "production" ? undefined : "cheap-module-eval-source-map"
};
