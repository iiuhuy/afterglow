/* eslint comma-dangle: 0 */
const webpack = require("webpack");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const prod = process.env.NODE_ENV === "production";
const isDevelopment = process.env.NODE_ENV === "development";
const ip = require("ip");
console.log(ip.address());

const serverIp = ip.address();

function getOutput() {
  if (prod) {
    return path.resolve(__dirname, "assets/");
  } else {
    return path.resolve(__dirname, "assets/");
  }
}

module.exports = {
  mode: "development",
  entry: "./src/js/app.js",
  stats: {
    cached: false,
    cachedAssets: false,
    chunkModules: false,
    chunks: false,
    colors: true,
    errorDetails: true,
    hash: false,
    // progress: true,
    reasons: false,
    timings: true,
    version: false
  },
  output: {
    path: getOutput(),
    filename: "js/bundle.js",
    publicPath: isDevelopment ? `http://${serverIp}:8080/assets/` : ""
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   loader: "babel",
      //   exclude: /node_modules/,
      //   query: {
      //     plugins: ["transform-runtime", "add-module-exports"],
      //     presets: ["es2015", "stage-1"]
      //   }
      // },
      // {
      //   test: /\.jsx?$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: [["@babel/preset-env"]]
      //     }
      //   }
      // },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        loader: "babel-loader",
        test: "/.js$|jsx/",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          // style-loader
          { loader: "style-loader" },
          // css-loader
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
          // sass-loader
          // { loader: "sass-loader" }
        ]
      },
      // {
      //   test: /\.scss$/,
      //   loader: prod
      //     ? ExtractTextPlugin.extract(
      //         "style-loader",
      //         `css-loader!autoprefixer-loader?browsers=last 3 version!sass-loader?includePaths[]=""`
      //       )
      //     : `style!css!autoprefixer?browsers=last 3 version!sass?includePaths[]=""`
      // },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      { test: /\.(glsl|frag|vert)$/, loader: "raw", exclude: /node_modules/ },
      {
        test: /\.(glsl|frag|vert)$/,
        loader: "glslify",
        exclude: /node_modules/
      }
    ]
  },
  plugins: prod
    ? [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "[name].css",
          chunkFilename: "[id].css"
        }),
        // new webpack.optimize.DedupePlugin(),
        // new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({ "process.env.NODE_ENV": '"production"' })
        // new webpack.optimize.UglifyJsPlugin({
        //   compress: {
        //     screw_ie8: true,
        //     warnings: false
        //   }
        // }),
        // new ExtractTextPlugin("css/main.css")
      ]
    : [
        new webpack.DefinePlugin({ "process.env.NODE_ENV": '"development"' })
        // new webpack.optimize.OccurenceOrderPlugin()
      ]
};
