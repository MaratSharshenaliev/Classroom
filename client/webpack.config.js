const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: ['@babel/polyfill', path.resolve(__dirname, 'src/index.jsx')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        open: true
    },
    stats: "only-error",
    performance: {
        hints: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'public/index.html'),
            filename: "index.html"
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(css|scss|sass)$/,
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
            },
            {
                test: /\.(pdf|jpeg|jpg|png|svg)$/,
                use: ["file-loader"]
            }
        ]
    }
}