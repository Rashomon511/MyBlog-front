'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    entry: {
        client: path.resolve(__dirname, 'src/index'),
        vendor: ['babel-polyfill', 'react', 'react-dom', 'react-redux', 'react-router', 'redux', 'redux-persist','redux-saga','react-quill']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-0'],
                        plugins: ['add-module-exports', 'transform-object-assign',
                            ['import', {
                                'libraryName': 'antd',
                                'style': 'css'
                            }]
                        ]
                    }
                }
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader?modules,localIdentName=\"[name]-[local]-[hash:base64:6]\"!less-loader?sourceMap=true",
                }),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },//加载字体

        ],
        noParse: /node_modules\/quill\/dist/
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.less']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity,
        }), // 提取公共模块，然后将公共模块打包到 vendor.js。
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
            minify: {
                removeComments: true, // 去掉注释信息
                collapseWhitespace: true, // 合并空白符
                removeRedundantAttributes: true, // 去掉多余的属性，比如某些默认属性
                useShortDoctype: true, // 使用 <!DOCTYPE html>
                removeEmptyAttributes: true, // 去掉空白的属性，比如 id = " "
                removeStyleLinkTypeAttributes: true, // 去掉 style 和 link 标签的 type="text/css"
                keepClosingSlash: true, // 保持标签闭合
                minifyJS: true, // 压缩 JavaScript (使用 UglifyJS)
                minifyCSS: true, // 压缩 CSS (uses clean-css)
                minifyURLs: true, // 压缩 URLs (uses relateurl)
            },
            inject: true, // 制定资源存放位置
        }),
        new ExtractTextPlugin('style.css', { allChunks: true }),
        new webpack.optimize.OccurrenceOrderPlugin(true), // 排序输出
        //new webpack.optimize.DedupePlugin(), // 删除与NPM重复的数据，有效减小文件大小
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new ProgressBarPlugin(),
        // 离线缓存机制
        // new OfflinePlugin({
        //     excludes: ['.htaccess'],
        //
        //     caches: {
        //         main: [':rest:'],
        //         additional: ['*.chunk.js'],
        //     },
        //
        //     safeToUseOptionalCaches: true,
        //
        //     AppCache: {
        //         caches: ['main', 'additional'],
        //     },
        // }),
    ],
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    },
    target: 'web'
};