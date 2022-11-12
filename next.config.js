const nextTranslate = require("next-translate");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  ...nextTranslate({
    webpack: (config) => {
      return config;
    }
  }),
}

module.exports = nextConfig
