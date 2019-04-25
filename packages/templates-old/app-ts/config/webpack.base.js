const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    entry: [
        path.join(__dirname, '..', 'src/index.tsx')
    ],

    devServer: {
        port: 3000
    },
    
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            '@': path.resolve(__dirname, '..', 'src'),
            'omi': 'omio'
        }
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                include: path.resolve(__dirname, '..', 'src'),
            }

            , {
                test: /[\\|\/]_[\S]*\.(css|less)$/,
                use: [
                    'to-string-loader',
                    'css-loader',
                    'less-loader'
                ]
            }

            , {
                test: /\.(css|less)?$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ],
                exclude: /[\\|\/]_[\S]*\.(css|less)$/
            }

            , {
                test: /\.(png|jpeg|jpg|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'images/[name].[hash].[ext]',
                            publicPath: '/'
                        }
                    }
                ]
            }
            , {
                test: /\.(eot|ttf|woff|woff2)\w*/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts'
                        }
                    }
                ]
            }
            , {
                test: /\.(mp4|webm)$/,
                use: 'file-loader?name=videos/[name].[ext]'
            }
            , {
                test: /\.ico$/i,
                loader: 'file?name=[name].[ext]'
            }
        ],
    },

    externals: {

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'src/index.html'),
            inject: true,
        })
        , new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],

}

