const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.config.js');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = merge(baseConfig, {
    entry: path.resolve(__dirname, '../entry-server.js'),

    output: {
        libraryTarget: 'commonjs2'
    },

    target: 'node',

    devtool: 'cheap-module-source-map',

    // https://webpack.js.org/configuration/externals/#function
    // https://github.com/liady/webpack-node-externals
    // Внешние зависимости приложения. Это значительно ускоряет процесс
    // сборки серверной части и уменьшает размер итогового файла сборки.
    externals: nodeExternals({
        // не выделяйте зависимости, которые должны обрабатываться Webpack.
        // здесь вы можете добавить больше типов файлов, например сырые *.vue файлы
        // нужно также указывать белый список зависимостей изменяющих `global` (например, полифиллы)
        // whitelist: /\.css$/
    }),

    // Этот плагин преобразует весь результат серверной сборки
    // в один JSON-файл. Имя по умолчанию будет
    // `vue-ssr-server-bundle.json`
    plugins: [
        new VueSSRServerPlugin()
    ]
});
