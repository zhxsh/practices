var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        app: "./app.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js"
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}