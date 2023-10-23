// Generated using webpack-cli https://github.com/webpack/webpack-cli

import { resolve } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import pathResolver from 'path';

const isProduction = process.env.NODE_ENV == 'production';


const { loader: _loader } = MiniCssExtractPlugin;
const stylesHandler = isProduction ? _loader : 'style-loader';
const __filename = fileURLToPath(import.meta.url);
const __dirname = pathResolver.dirname(__filename);



const config = {
    entry: './src/index.ts',
    output: {
        path: resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),

        new MiniCssExtractPlugin(),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, {
                    loader: 'css-loader',
                    options: {
                      modules: true
                    }
                  }, {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            module: true,
                          },
                    },
                  }, 'sass-loader'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

export default () => {
    if (isProduction) {
        config.mode = 'production';       
        config.plugins.push(new MiniCssExtractPlugin());
    } else {
        config.mode = 'development';
        config.devServer = {
            static: {
                directory: pathResolver.join(__dirname, 'dist'),
              },
            compress: true,
            port: 9000,
            open: true,
            https: false,
        };
    }    
    return config;
};
