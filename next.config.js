// next.config.js
const debug = process.env.NODE_ENV !== 'production'
const name = 'FE'

module.exports = {
  assetPrefix: !debug ? `/${name}/` : '',
}