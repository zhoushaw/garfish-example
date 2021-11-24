/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // 入口文件
  entry: {
    index: ['./src']
  },
  // 配置加载后缀名
  resolve: {
    extensions: ['*', '.vue', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  // 产出路径
  output: {
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
    publicPath: "/goofy/gar/example/master-vue/",
    path: path.resolve('./dist/')
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './postcss.config.js'
              }
            }
          },
          {
            loader: 'css-loader',
            options: {
              minimize: {
                autoprefixer: {
                  add: true,
                  browsers: ['FireFox > 1', 'Chrome > 1', 'ie >= 8']
                }
              }
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: 'vue-style-loader!css-loader!postcss-loader',
            less: [
              {
                loader: 'vue-style-loader'
              },
              {
                loader: 'css-loader'
              },
              {
                loader: 'less-loader',
                options: {
                  javascriptEnabled: true
                }
              }
            ]
          }
        }
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname,'./src'),
          path.resolve(__dirname, './node_modules/query-string')
        ],
        use: ['babel-loader'] // 'babel-loader' is also a legal name to reference
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        ]
      },
      {
        test: /\.(jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        ]
      },
      {
        test: /\.svg/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
              minetype: 'image/svg+xml'
            }
          }
        ]
      },
      {
        test: /\.woff|woff2|eot|ttf$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'markdown-loader',
            options: {
              pedantic: true
              /* your options here */
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new UglifyJsPlugin(),
    new CleanWebpackPlugin(path.join(__dirname, '/output')),
    new HtmlWebpackPlugin({
      template: 'src/templates/index.html',
      inject: true,
      chunks: ['index']
    })
  ]
}
