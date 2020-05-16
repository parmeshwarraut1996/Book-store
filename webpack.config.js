var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: "style-loader"
                   },
                    {
                        loader: "css-loader",
                        // options: {
                        //     sourceMap: true,
                        //     modules: true,
                        //     localIdentName: "[local]___[hash:base64:5]"
                        // }
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
             {
                    test: /\.(jpg|png|gif|svg|pdf|ico)$/,
                    use: [
                      {
                        loader: "file-loader",
                        options: {
                          name: '[path][name]-[hash:8].[ext]'
                        },
                      },
                    ]
                  },
                   
        
            ]
        
          },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/assets', to: 'assets' }
        ]),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
    }

};