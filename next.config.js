const withLess = require("next-with-less");

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  ...withLess({
    lessLoaderOptions: {
      /* ... */
      lessOptions: {
        /* ... */
        modifyVars: {
          "primary-color": "#FEDC47",
          "border-radius-base": "10px",
          /* ... */
        },
      },
    },
  }),
};

module.exports = nextConfig;
