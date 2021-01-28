const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlPluginRemove = require("html-webpack-plugin-remove");
const {VueLoaderPlugin} = require("vue-loader");
const isProduction = process.env.NODE_ENV !== "production";

const PATHS = {
  src: path.resolve(__dirname, "../src"),
  dist: path.resolve(__dirname, "../dist"),
  assets: "assets/"
};

// Base Webpack config
module.exports = {
  externals: {
    paths: PATHS
  },
  output: {
    filename: `${PATHS.assets}js/[name].[hash].js`,
    path: PATHS.dist,
    publicPath: "/"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendors",
          test: /node_modules/,
          chunks: "all",
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
      exclude: isProduction ? [/node_modules/, /\.smart-gread-layer$/] : /node_modules/,
    },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loader: {
            scss: "vue-style-loader!css-loader!sass-loader"
          }
        }
      },
      {
        // Fonts
        test: /\.(woff(2)?|ttf|eot|svg|png|fnt)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: 'fonts/'
        }
      },
      {
        test: /\.glsl$/,
        use: [
          'raw-loader',
          'glslify-loader'
        ]
      },  
      {
        test: /\.(jpe?g|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          esModule: false
        }
      }, {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {sourceMap: true}
          },
          {
            loader: "postcss-loader",
            options: {sourceMap: true, config: {path: "./postcss.config.js"}}
          },
          {
            loader: "sass-loader",
            options: {sourceMap: true}
          },
          {
            loader: "sass-resources-loader",
            options: {
              resources: [
                "./src/assets/scss/utils/vars.scss",
                "./src/assets/scss/utils/mixins.scss",
                "./src/assets/scss/utils/fonts.scss"
              ]
            },
          }
        ]
      }, {
        test: /\.css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {sourceMap: true}
          }, {
            loader: "postcss-loader",
            options: {sourceMap: true, config: {path: "./postcss.config.js"}}
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      "~": PATHS.src,
      "vue$": "vue/dist/vue.js",
      "@": PATHS.src,
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[hash].css`,
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      inject: true,
      template: `${PATHS.src}/index.html`,
      filename: "./index.html"
    }),
    new HtmlPluginRemove(/<!--deletestart-->[\s\S]*<!--deleteend-->/gi),
  
    new CopyWebpackPlugin([
      {from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img`},
      {from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts`},
      {from: `${PATHS.src}/static`, to: ""}
    ])
  ],
};
