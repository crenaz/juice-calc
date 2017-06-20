module.exports = {
    entry: ['./app/index.js'],
    output: {
        path: '/home/crenaz/Documents/Learning/es6/theFull-JS-es6-followAlong/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: './build',
        inline: true
    }
}