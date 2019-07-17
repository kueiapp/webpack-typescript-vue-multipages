var path = require('path');
// vue-loader 14+ needs the plugin
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// webpack
var webpack = require('webpack');
// create 37 favicons for devices
let FaviconsWebpackPlugin = require('favicons-webpack-plugin')
// handle html files and multiple pages
const HtmlWebpackPlugin = require('html-webpack-plugin')
// compress files
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// clear distination folder when building
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// load .evn file
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: { // chunk name and path
    page1: './src/page1/page1.ts',
    page2: './src/page2/page2.ts',
    vendors: './src/vendors.ts'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      // to find tsconfig.json
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        use:{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]',
            outputPath: 'assets'         
          } 
        }
      },
      {
        test: /.css$/,
        use: [
          'vue-style-loader',
          // 'style-loader', // replaces with vue-style-loader
          'css-loader'
        ]
      },
      {
        test: /\.s[c|a]ss$/,
        use: [
          'vue-style-loader', // 4. inject style in .vue file into DOM
          // 'style-loader', // replaces with vue-style-loader
          'css-loader',   // 2. turn css into commonjs
          'sass-loader',   // 1. turn sass into css
        ]
      }
    ]
  },
  plugins: [
    // make sure to include the Vue plugin in version 14+ 
    new VueLoaderPlugin(),
    // generate favicon and manifest.json
    new FaviconsWebpackPlugin('./src/logo.png'),
    // generate a html file replaced with Gulp
    new HtmlWebpackPlugin(
    {  
      title: 'Home page',
      filename: 'page1.html',          // copy dest. of export dir
      template: 'src/page1/page1.html',      // source
      favicon: './src/logo.png',
      'meta': {  // export <meta>
        "viewport": "width=device-width,minimum-scale=1,initial-scale=1,maximum-scale=1",
        'keywords': "Kuei App,Tripla Fun,Tripla,旅行,導覽,WatchColour,Watch,Watch,Google for Education, Certified Trainer",
        'theme-color': '#4285f4',
        "description": "gTrainer,Kuei,Kuei App Studio is focused on fun and useful app development.",
        "author": "Kuei App",
        "language": "English",
        "google-site-verification": "bK_iYvbL-t8LA45pTiiGXMkFOazbZdu5kIS9RM_wXqQ"
      },
      base: 'https://kueiapp.com',
      chunks:['page1','vendors']
    }),
    new HtmlWebpackPlugin({  
      title: 'Training page',
      filename: 'page2.html',          // copy dest. of export dir
      template: 'src/page2/page2.html',      // source
      favicon: './src/logo.png',
      template: './src/page2/page2.html',
      'meta': {  // export <meta>
        "viewport": "width=device-width,minimum-scale=1,initial-scale=1,maximum-scale=1",
        'keywords': "Kuei App,Tripla Fun,Tripla,旅行,導覽,WatchColour,Watch,Watch,Google for Education, Certified Trainer",
        'theme-color': '#4285f4',
        "description": "gTrainer,Kuei,Kuei App Studio is focused on fun and useful app development.",
        "author": "Kuei App",
        "language": "English",
        "google-site-verification": "bK_iYvbL-t8LA45pTiiGXMkFOazbZdu5kIS9RM_wXqQ"
      },
      base: 'https://kueiapp.com',
      chunks:['page2','vendors']      // load chunks(modules) from setting 'entry'
    }),
    // clear build dir
    new CleanWebpackPlugin(),
    // load .env file
    new Dotenv(),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],  // using import without extension
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  // @command: webpack --mode production
  // compress files in production mode
  module.exports.devtool = '#source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // compress .js files
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),    
  ]);
}
