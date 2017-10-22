const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: [path.resolve(__dirname, './src/index.js')],//打包入口文件
    output: {
        filename: 'bundle.js', //文件名
        path: path.resolve(__dirname, 'dist'), //输出路劲
        publicPath: "/"
    },//打包输出文件
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",//编译后用什么loader来提取css文件
                use: "css-loader"//指需要什么样的loader去编译文件,这里由于源文件是.css所以选择css-loader
            })
        },//加载css
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader",//将es6编译为es5
                    options: {
                        presets: ['es2015', 'react', 'stage-0'],
                        plugins: ['transform-object-assign', 'add-module-exports',
                            ['import', {
                                'libraryName': 'antd',
                                'style': 'css'
                            }]
                        ]
                    }
                }
            },//加载js/jsx
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }
                ]
            },//加载less
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
            },//加载图片
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },//加载字体
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),//生成一个新的html文件替换原有文件
        new webpack.HotModuleReplacementPlugin(),//模块热替换
        new ExtractTextPlugin("styles.css")//抽离css
    ],//插件
    target: 'web'
};
