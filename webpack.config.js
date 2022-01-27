const {reolove} = require('path')
const HtmlWebpack = require('html-webpack-plugin')

modult.export = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname,'dist')
    },
    module: {
    	rules: []
    },
    mode: 'development',
    plugins: [
        new HtmlWebpack() 
    ],

    devServe: {
        port: 8088,
        compress: true,
        static: false,
        open: true 
    }
}