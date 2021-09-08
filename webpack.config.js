

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = ({ production }) => {
    return {
        mode: production ? "production" : "development",
        devtool: !production && "source-map",
        entry: {
            main: "./src/index.js"
        },
        output: {
            filename: "[name].[contenthash].js",
            path: path.resolve(__dirname, "build"),
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html"
            }),
            new MiniCssExtractPlugin({
                filename: "[name].[contenthash].css"
            })
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"]
                },
                {
                    test: /\.(s?css)$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
                },
                {
                    test: /\.html$/,
                    use: ["html-loader"]
                },
                {
                    test: /\.(svg|png|jpg|gif)$/,
                    type: 'asset/resource'
                }
            ]
        },
        optimization: production && {
            minimizer: [
                new OptimizeCssAssetsPlugin(),
                new TerserPlugin()
            ]
        },
        devServer: {
            hot: true
        }
    };
};
