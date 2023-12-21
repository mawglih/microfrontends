const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'app1',
            filename: 'remoteEntry.js',
            exposes: {
                './App1Index': './src/bootstrap',
            },
            shared: [ 'faker' ],
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ],
};