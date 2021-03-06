const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('webpack-html-plugin');
const merge = require('webpack-merge');

module.exports = (env) => {
    const extractCSS = new ExtractTextPlugin('css/vendor.css');
    const isDevBuild = !(env && env.prod);
    const vendorConfig = {
        stats: { modules: false },
        resolve: { extensions: ['.js'] },
        module: {
            rules: [
                { test: /\.css(\?|$)/, use: extractCSS.extract({ use: isDevBuild ? 'css-loader' : 'css-loader?minimize' }) },
                { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, use: 'url-loader?limit=100000&name=css/[name].[ext]' }
            ]
        },
        entry: {
            vendor: [
                'core-js/es6',
                'core-js/es7/reflect',
                'zone.js',
                'zone.js/dist/zone',
                '@angular/animations',
                '@angular/common',
                '@angular/compiler',
                '@angular/core',
                '@angular/http',
                '@angular/forms',
                '@angular/platform-browser',
                '@angular/platform-browser-dynamic',
                '@angular/router',
                '@angular/platform-server',
                'bootstrap',
                'bootstrap/dist/css/bootstrap.css',
                'font-awesome/css/font-awesome.min.css',
                'event-source-polyfill',
                'jquery'
            ]
        },
        output: {
            path: path.join(__dirname, 'wwwroot'),
            publicPath: '/',
            filename: 'scripts/[name].js',
            library: '[name]_[hash]'
        },
        plugins: [
            extractCSS,
            new webpack.DllPlugin({
                path: path.join(__dirname, 'wwwroot', '[name]-manifest.json'),
                name: '[name]_[hash]'
            }),
              new HtmlWebpackPlugin({
                  filename: './index-vendor.html',
                  template: './ClientApp/index.html',
                  inject: 'body',
              }),
            // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
            new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }),
            // Workaround for https://github.com/angular/angular/issues/11580
            new webpack.ContextReplacementPlugin(/\@angular\b.*\b(bundles|linker)/, path.join(__dirname, './ClientApp')),
            // Workaround for https://github.com/stefanpenner/es6-promise/issues/100
            new webpack.IgnorePlugin(/^vertx$/)
        ].concat(isDevBuild ? [] : [
            new webpack.optimize.UglifyJsPlugin()
        ])
    };
    return [vendorConfig];
}
