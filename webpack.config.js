module.exports = {
    entry: ['./client/index.js'],
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    mode: 'development',
    context: __dirname,
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: "file-loader",
        }
      ]
    }
  }