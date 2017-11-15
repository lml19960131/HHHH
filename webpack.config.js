
const path = require('path');


module.exports = {
    entry: {
        index: path.join(__dirname, './src/index.js')
    },
    output: {
        path: path.join(__dirname, './static/js'),
        filename: '[name].build.js',
        publicPath: '/assets/'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                query: {
                    presets: ['vue', [
                        'env', {
                            targets: {
                                chrome: 52
                            }}
                    ]]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {

                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'

            },

            {

                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader?name=[name].[ext]"

            }

        ]
    }
};