const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const { container } = webpack;

module.exports = {
  entry: path.join(__dirname, "src", "index.jsx"),
  output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    aliasFields: ['browser']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
    }),
    new container.ModuleFederationPlugin({
        name: 'shell_app',
        library: {
            type: 'var',
            name: 'shell_app'
        },
        filename: 'remoteEntry.js',
        remotes: {
          listApp: 'list_app'
        },
        shared: {
          "react": {
            eager: true,
          },
          "react-dom": {
            eager: true
          }
        }
    })
  ],
};