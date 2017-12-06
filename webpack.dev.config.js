const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
    entry: ['babel-polyfill',path.resolve(__dirname, './src/index.js')],//打包入口文件
    output: {
        filename: 'bundle.js', //文件名
        path: path.resolve(__dirname, 'dist'), //输出路劲
        publicPath: "/"
    },//打包输出文件
    devServer: {
        historyApiFallback:{
            index:''
        },
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader?modules,localIdentName=\"[name]-[local]-[hash:base64:6]\"",
            }),
            // loaders: [
            //     'style-loader',
            //     "css-loader?modules,localIdentName=\"[name]-[local]-[hash:base64:6]\"",
            // ],
            exclude: /node_modules/
        },{
            test: /\.less$/,
            include: path.resolve(__dirname, 'src/stylesheets/index.js'),
            use: ["style-loader", 'css-loader', "postcss-loader", "less-loader"]
        },//加载less
            {
                test: /\.css$/,
                loader:'style-loader!css-loader'
            },
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
                            }],
                        ]
                    }
                }
            },//加载js/jsx
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
        extensions: ['.js', '.json', '.jsx', '.less']
    },
    //devtool: 'eval-source-map',
    //devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        }),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        // }),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),//模块热替换
        new ExtractTextPlugin('style.css', { allChunks: true }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new ProgressBarPlugin(),//打包进度条
        //new BundleAnalyzerPlugin()
    ],
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    },
    target: 'web'
};
