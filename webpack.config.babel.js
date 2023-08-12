import { config } from './gulp/config';

export default {
  entry: config.webpack.entry,

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3.15 }],
            ],
          },
        },
      },
    ],
  },

  output: {
    filename: config.webpack.output,
  },
};
