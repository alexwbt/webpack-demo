
const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.config');

module.exports = merge(common, {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    devServer: {
        allowedHosts: 'all',
    }
});
