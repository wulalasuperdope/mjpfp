const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: path.join(__dirname, './client/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'main.js',
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        hot: true,
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ]
    }
};