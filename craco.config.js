const CircularDependencyPlugin = require("circular-dependency-plugin");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");
const CracoAntDesignPlugin = require("craco-antd");
const WebpackBar = require("webpackbar");
const webpack = require("webpack");

const isProduction = process.env.NODE_ENV === "production";
const path = require("path");

const extraWebpackPlugins =
  process.env.NODE_ENV === !isProduction
    ? [
        new CircularDependencyPlugin({
          exclude: /node_modules/,
          failOnError: true,
          allowAsyncCycles: false,
          cwd: process.cwd(),
        }),
      ]
    : []; // prod plugins

module.exports = {
  webpack: {
    performance: {
      hints: true,
    },
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
    devServer: {
      historyApiFallback: true, // * to handle react-router-dom browserHistory
      inline: true,
      compress: true,
      open: false,
      port: 3000,
    },
    plugins: [new WebpackBar({ profile: true }), ...extraWebpackPlugins],
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          "@primary-color": "rgb(76,143,194)",
        },
        cssLoaderOptions: {
          modules: {
            localIdentName: isProduction
              ? "[hash:base64]"
              : "[path][name]_[local]",
            getLocalIdent: (context, localIdentName, localName, options) => {
              if (context.resourcePath.includes("node_modules")) {
                return localName;
              }
              return getCSSModuleLocalIdent(
                context,
                localIdentName,
                localName,
                options
              );
            },
          },
          localsConvention: "camelCase",
        },
      },
    },
  ],
};
