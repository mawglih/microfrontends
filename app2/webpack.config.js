const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    devServer: {
        port: 8082,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'app2',
            filename: 'remoteEntry.js',
            exposes: {
                './App2Index': './src/bootstrap',
            },
            shared: [ 'faker'],
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ],
};