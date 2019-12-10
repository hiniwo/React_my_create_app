// path为Node的核心模块
const path = require('path');
const webpack = require("webpack");
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
    entry: './app/index.js',
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    resolve: {
      extensions: [
        '.ts',
        '.js' // add this
      ]
    },
    devServer: {
      // 以dist为基础启动一个服务器，服务器运行在4200端口上，每次启动时自动打开浏览器
      contentBase: path.join(__dirname, "dist"),
      open: true,
      port: 4200,
      hot: true, // 启用模块热更新
      hotOnly: true // 模块热更新启动失败时，重新刷新浏览器
    },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'images/', // 图片输出的路径
              limit: 10 * 1024
            }
          }
        },
        {
          test: /\.(ts|tsx)?$/,
          use: {
            loader: 'ts-loader'
          }
        },
        {
          test: /\.js|jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options : {
              plugins: [
                [
                  'react-css-modules',
                  {
                    generateScopedName: '[local]-[hash:base64:10]',
                    autoResolveMultipleImports : true,
                    filetypes: {
                      '.scss': {
                        syntax: 'postcss-scss'
                      }
                    }
                  }
                ]
              ]
            }
          }
        },
        {
          test: /\.(eot|woff2?|ttf|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: '[name]-[hash:5].min.[ext]',
                limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
                publicPath: 'fonts/',
                outputPath: 'fonts/'
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [ { 
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
              reloadAll: true
            }
          }, 'css-loader'],
        },
        {
          test: /\.(sass|scss)$/,
          use: ['style-loader', {
            loader: 'css-loader',
            options: {
              // module: true,
              modules: {
                localIdentName: '[local]-[hash:base64:10]'
              }
              // localIdentName: '[local]-[hash:base64:10]'
            }
          },'sass-loader' ,
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(__dirname, './static/style/base.scss')
            }
          },
           'postcss-loader'],
        }
      ]
    },

    performance: {
      hints: false
    },

    plugins : [
      new htmlWebpackPlugin({
        template: './index.html'
      }),
      new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css'
      }),
      new BundleAnalyzerPlugin()
    ],
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    }
  }