
const cssModulesQuery = {
  modules: true,
  importLoaders: 1,
  localIdentName: '[name]-[local]-[hash:base64:5]'
};

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test:/\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test:/\.ts?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /^.((?!cssmodule).)*\.css$/,
        loaders: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader'
      },
      {
        test: /^.((?!cssmodule).)*\.styl$/,
        loaders: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'stylus-loader' },
        ]
      },
      {
        test: /\.cssmodule\.css$/,
        loaders: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            query: cssModulesQuery
          }
        ]
      },
      {
        test: /\.cssmodule\.(sass|scss)$/,
        loaders: [
          { loader: 'style-loader' },
          { loader: 'css-loader', query: cssModulesQuery },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.cssmodule\.less$/,
        loaders: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            query: cssModulesQuery
          },
          { loader: 'less-loader' }
        ]
      },
      {
        test: /\.cssmodule\.styl$/,
        loaders: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            query: cssModulesQuery
          },
          { loader: 'stylus-loader' }
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
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8080
  }
};
