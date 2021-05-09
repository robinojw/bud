const path = require('path');
const webpack = require('webpack');
const ClosureCompilerPlugin = require('closure-webpack-plugin');

module.exports = {
  future: {
    webpack5: true,
  },
  context: __dirname,
  entry: './entrypoint.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new ClosureCompilerPlugin({
        mode: 'STANDARD',
        childCompilations: true
      }, {
        externs: [path.resolve(__dirname, 'dist', 'externs.js')],
        languageOut: 'ECMASCRIPT5',
        compilation_level: 'ADVANCED'
      })
    ],
    usedExports: true,
    splitChunks: {
      minSize: 0
    },
    concatenateModules: true
  }
}
