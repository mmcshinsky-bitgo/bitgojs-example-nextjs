/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        // this is only required if using bitgo instead of just the sdk-api
        "@hashgraph/sdk": path.resolve(
          "./node_modules/@hashgraph/sdk/src/browser.js"
        ),
        "superagent-proxy": false,
      },
      fallback: {
        ...config.resolve.fallback,
        constants: false,
        crypto: require.resolve("crypto-browserify"),
        dns: false,
        fs: false,
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        http2: require.resolve("stream-http"),
        net: false,
        os: false,
        path: false,
        stream: require.resolve("stream-browserify"),
        tls: false,
        url: require.resolve("url/"),
        vm: false,
        zlib: false,
      },
    };
    config.externals = [...config.externals, "superagent-proxy"];
    config.plugins = [
      ...config.plugins,
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
        process: "process/browser",
      }),
    ];
    return config;
  },
  env: {
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    NETWORK: process.env.NETWORK,
  }
};

module.exports = nextConfig;
