/* eslint-disabled */

const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const withSourceMaps = require("@zeit/next-source-maps");
const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const nextConfig = {
  poweredByHeader: false,
  webpack: (config, { webpack, isServer, dev }) => {
    if (!isServer && !dev) {
      config.optimization.splitChunks.cacheGroups.commons.minChunks = 2;
    }

    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsConfigPathsPlugin());
    } else {
      config.resolve.plugins = [new TsConfigPathsPlugin()];
    }

    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
          loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]",
        },
      },
    });

    return config;
  },
  serverRuntimeConfig: {},
  env: {},
};

// next.config.js
module.exports = withPlugins([optimizedImages, withSourceMaps], nextConfig);
