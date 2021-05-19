const path = require("path")

module.exports = {
    entry: "./src/app.js", // default entry point is ./src/index.js https://webpack.js.org/concepts/entry-points/
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode: "development", // it can be development or production
    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
            },
            // ONLY FOR CSS
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader'],
            // },
            {
                test: /\s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'), // the complete path to which it should serve.
        compress: true,
        port: 9000,
        filename: "bundle.js"
    },
}
