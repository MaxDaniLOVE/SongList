const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // for js files to use babel
        exclude: /node_modules/,
        loader: 'babel-loader' 
      },
      {
        test: /\.(png|gif|jpg|ico)$/, // for images
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name]-[sha1:hash:7].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/, // for fonts
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/, 
        use: [
          MiniCssExtractPlugin.loader , // for adding styles // works second
          'css-loader' , // for css files // works first
        ] 
      },
      {
        test: /\.s[ca]ss$/,  // loading sass/scss
        use: [
          MiniCssExtractPlugin.loader , // for adding styles // works second
          'css-loader' , // for css files // works first
          'sass-loader' , // for szcss files // works first
        ] 
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main-[hash].css'
    })
  ],
  devServer: {
    open: true
  }
};