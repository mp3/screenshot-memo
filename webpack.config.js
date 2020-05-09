const webpack = require('webpack')
const path = require('path')

module.exports = [
  {
    entry: "./src/main.ts",
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js'
    },
    target: 'electron-main',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        }
      ],
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".json"],
    },
  },
  {
    entry: "./src/renderer/renderer.ts",
    output: {
      path: path.resolve(__dirname, 'dist/renderer'),
      filename: 'renderer.js'
    },
    target: 'electron-renderer',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        }
      ],
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".json"],
    },
  }
]