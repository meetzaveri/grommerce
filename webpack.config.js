const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'index.html'),
  filename: './index.html'
});
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

// console.log(
//   'process.env.NODE_PATH',
//   process.env.NODE_PATH,
//   path.join(__dirname, 'src/index.js', path.join(__dirname, 'index.html'))
// );

module.exports = {
  context: __dirname + '/src',
  entry: path.join(__dirname, './src/index.js'),
  output: {
    filename: 'app.js',
    path: __dirname + '/dist'
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    }),
    htmlWebpackPlugin
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
          // options: {
          //   presets: ['@babel/preset-react', '@babel/react', '@babel/es2015'],
          //   plugins: [
          //     '@babel/plugin-transform-react-jsx',
          //     ['@babel/plugin-proposal-decorators', { legacy: true }],
          //     ['@babel/plugin-proposal-class-properties', { loose: true }]
          //   ]
          // }
        },
        exclude: /node_modules/
      },

      {
        test: /\.(png|gif|jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)?/,
        use: ['url-loader?limit=100000']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/')
    },
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: 8080,
    hot: true
  },
  mode: 'development'
};
