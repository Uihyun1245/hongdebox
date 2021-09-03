const debug = process.env.NODE_ENV !== 'production'
const name = 'FE'

module.exports = {
  'process.env.BACKEND_URL': !debug ? `/${name}` : '',
}