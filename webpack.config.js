module.exports = {
    entry: './renderer/jsx/app.jsx',
    output: {
      filename: './renderer/build/bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
      loaders: [
        {
          test: /\.jsx$/,
          loader: 'jsx-loader'
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
};
