const webpack = require("webpack");

module.exports = {
    module: {
        rules: [
            {
                test: /pdf.worker.min.js$/,
                use: { loader: 'worker-loader' },
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.CONVERT_API": JSON.stringify(process.env.CONVERT_API),
        }),
    ],
    devServer: {
        headers: {
            "Content-Type": "application/javascript", // Ensure JS MIME type
        },
    },
};