const path = require('path');
// Lo mismo pero convertido a javascript ES6
// import path from 'path';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    eojs: './src/js/eo-scripts.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: './js/[name].min.js'
  },
  // --
  module: {
    rules: [
      //-- loading css, scss, sass
      {
        test: /\.(c|sc|sa)ss$/,
        use: [
          {
            loader: 'style-loader' // inject CSS to page
          },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS modules
          },
          {
            // requiere Bootstrap compile
            loader: 'postcss-loader', // a tool for transforming styles with JS plugins
            options: {
              config: {
                path: './webpack/'
              }
            }
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS, using Node Sass by default
          }
        ]
      },
      //-- loading images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './files/images/',
              useRelativePath: true
            }
          },
          // minifying and optimizing images
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
      //-- loading fonts
      // (Source: <https://survivejs.com/webpack/loading/fonts/>)
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './files/fonts/',
              useRelativePath: true
            }
          }
        ]
      },
      //-- handlebars template
      // (Source: <https://github.com/pcardune/handlebars-loader>)
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }
    ]
  },
  plugins: [
    // simplifies creation of HTML files to serve your webpack bundles
    // Options: <https://github.com/jantimon/html-webpack-plugin#options>
    new HtmlWebpackPlugin({
      title: 'Mi sitio web - Index',
      template: './src/views/index.hbs',
      menu1: 'active',
      menu2: '',
      menu3: ''
    }),
    new HtmlWebpackPlugin({
      title: 'Mi sitio web - Item1',
      filename: 'item1.html',
      template: './src/views/item1.hbs',
      menu1: '',
      menu2: 'active',
      menu3: ''
    }),
    new HtmlWebpackPlugin({
      title: 'Mi sitio web - Item2',
      filename: 'item2.html',
      template: './src/views/item2.hbs',
      menu1: '',
      menu2: '',
      menu3: 'active'
    }),
    // clean folder production proyect
    new CleanWebpackPlugin(),
    // extract css
    new MiniCssExtractPlugin({
      filename: './styles/style.min.css'
    })
  ]
};