const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = merge(baseConfig, {
    entry: path.resolve(__dirname, '../entry-client.js'),

    optimization: {
        minimize: false
    },

    plugins: [
        new VueSSRClientPlugin()
    ]
});
