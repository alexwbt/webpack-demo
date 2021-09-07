
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: false,
    mode: "development",
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build"),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            title: "Webpack Demo"
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                type: 'asset/resource'
            }
        ]
    }
};
