/* eslint-disable */
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')
const resolve = require('resolve')

const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  cssModules: true,

  webpack (config, options) {
    const { dir, isServer } = options

    config.externals = []

    if (isServer) {
      config.externals.push((context, request, callback) => {
        resolve(request, { basedir: dir, preserveSymlinks: true }, (err, res) => {
          if (err) {
            return callback()
          }

          // Next.js by default adds every module from node_modules to
          // externals on the server build. This brings some undesirable
          // behaviors because we can't use modules that require CSS files like
          // `former-kit-skin-pagarme`.
          //
          // The lines below blacklist webpack itself (that cannot be put on
          // externals) and `former-kit-skin-pagarme`.
          if (
            res.match(/node_modules[/\\].*\.js/)
            && !res.match(/node_modules[/\\]webpack/)
            && !res.match(/node_modules[/\\]rc-banner-anim/)
          ) {
            return callback(null, `commonjs ${request}`)
          }

          callback()
        })
      })
    }

    return config
  },
})

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, './static/less/edit.less'),
    'utf8'
  )
)

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables // make your antd custom effective
  },

})
