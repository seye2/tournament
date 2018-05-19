/* global __dirname */

const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin=require('optimize-css-assets-webpack-plugin');

const dir_html = path.resolve(__dirname, 'html');
const dir_build = path.resolve(__dirname, 'build');

const extractSass = new ExtractTextPlugin({
    filename: "[name].css"
});


module.exports = {
    entry:[
        "./js/app.js",
        "./scss/tournament.scss"
    ],
    output: {
        path: dir_build,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js?$/,
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },

    plugins: [
        extractSass
    ],
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
    devServer: {
        contentBase: dir_html,
        inline:true,
        port:8080,
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    }
};
