const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const EXAMPLE_PATH = path.join(ROOT_PATH, '/examples');

module.exports = {
    context: EXAMPLE_PATH,
    entry: 'index',
    output: {
        filename: 'bundle.js',
        path: path.join(ROOT_PATH, 'live')
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            EXAMPLE_PATH,
            path.join(ROOT_PATH, 'node_modules')
        ]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: path.resolve(ROOT_PATH, 'node_modules')
            },
            {
                test: /\.s?css/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React flexbox examples',
            template: 'index.ejs'
        })
    ]
};
