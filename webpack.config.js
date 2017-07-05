const path = require('path');
const webpack = require('webpack');

const SRC = path.resolve(__dirname, 'src');
const DIST = path.resolve(__dirname, 'dist');

const config = {
    entry: {
        scoped: SRC + '/scoped.js',
        nonscoped: SRC + '/nonscoped.js'
    },
    output: {
        path: DIST,
        filename: '[name].bundle.js'
    },

    resolve: {
        alias: {
            lodash: path.resolve(__dirname, 'lodash.js')
        }
    },

    module: {
        rules: [
            {
                test:/\.js$/,
                include: SRC,
                loader: "babel-loader",
                options: {
                    presets: ['react', 'es2015']
                }
            }

        ]
    }
};

module.exports = config;
