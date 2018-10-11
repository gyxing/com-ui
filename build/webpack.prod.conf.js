const webpack = require('webpack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //for webpack 4
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //for webpack 4
const pkg = require('../package.json');
const path = require('path');
const webpackBaseConfig = require('./webpack.base.conf.js');
const merge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin') //for vue-loader 15

module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: "",
        filename: "g-com-ui.js",
        library: 'gcomui-vue',
        libraryTarget: 'umd',
    },
    performance: {
        hints : false
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                // use: ['vue-style-loader', 'css-loader', 'less-loader'],
                // use: ExtractTextPlugin.extract({ fallback: "style-loader", use: [{ loader: "css-loader" }, { loader: "less-loader" },], }),
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'], // : , 
            },
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        loaders: { css: 'vue-style-loader!css-loader', less: 'vue-style-loader!css-loader!less-loader' },
                        // postLoaders: { html: 'babel-loader' }
                    }
                },
                ]
            },]
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_debugger: true,
                        drop_console: true
                    },
                    sourceMap: false
                }
            })
        ]
    },
    plugins: [
        new VueLoaderPlugin(), //for vue-loader 15
        new webpack.DefinePlugin({ PRODUCTION: "'true'" }),
        new MiniCssExtractPlugin({ filename: 'g-com-ui.css' }),
        new webpack.BannerPlugin(pkg.name + ' v' + pkg.version + ' by chuchur (c) ' + new Date().getFullYear() + ' Licensed ' + pkg.license),
        // 允许错误不打断程序
        // new webpack.NoErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({ minimize: true })
    ],

})