import { resolve as _resolve } from 'path';

export const mode = 'production';
export const entry = './src/index.ts';
export const output = {
  filename: 'index.js',
  path: _resolve(__dirname, 'dist'),
  libraryTarget: 'umd',
  clean: true,
};
export const resolve = {
  modules: [__dirname, 'src', 'node_modules'],
  extensions: ['*', '.js', '.jsx', '.tsx', '.ts', '...'],
};
export const externals = {
  react: 'react',
};
export const module = {
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: require.resolve('babel-loader'),
    },
    {
      test: /\.s[ac]ss|css$/i,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        },
        { loader: 'sass-loader' },
      ],
    },
    {
      test: /\.png|svg|jpg|gif$/,
      use: ['file-loader'],
    },
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
  ],
};
