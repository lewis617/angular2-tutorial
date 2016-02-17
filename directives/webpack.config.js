module.exports = {
  entry: "./src/app",
  output: {
    path: __dirname + "/dist", publicPath: 'dist/', filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [
      {test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/},
        // support for .html as raw text
      { test: /\.html$/,  loader: 'raw-loader' }
    ]
  }
};