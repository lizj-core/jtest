
const path = require('path');
const webpack = require('webpack')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    "css-loader",       // 先style-loader再css-loader
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(png|gif|jpg|jpeg)$/,
                use:'file-loader'
            }
        ]
    },
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true,    // 设置启动的时候自动打开浏览器
    }
};