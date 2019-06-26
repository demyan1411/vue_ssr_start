const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'production',

    resolve: {
        extensions: ['.js', '.json', '.vue', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-plain-loader'
            },

            {
                test: /\.vue$/i,
                loader: 'vue-loader',
                options: {
                    transformAssetUrls: {
                        video: 'src',
                        source: 'src',
                        object: 'src',
                        embed: 'src'
                    },
                    productionMode: true
                }
            },
        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ]
};
