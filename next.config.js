
const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')
/* Without CSS Modules, with PostCSS */

module.exports = withCSS({
  cssModules: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  webpack: function (config) {
    return config;
  }
});

module.exports = withLess({
  cssModules: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  webpack: function (config) {
    return config;
  }
});