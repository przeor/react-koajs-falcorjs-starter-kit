// Node configuration
const env = require('node-env-file')
const path = require('path')
env(path.join(__dirname, '/.env'))

// Koa related imports
import Koa from 'koa'
import convert from 'koa-convert'
import historyApiFallback from 'koa-connect-history-api-fallback'
import serve from 'koa-static'
import mount from 'koa-mount'
import proxy from 'koa-proxy'
import bodyparser from 'koa-bodyparser'

// Routers & route definitions
import s3router from './s3-koa-router'
import falcorRouter from 'falcor-koa-router'
import falcorRoutes from './falcorRoutes'

// Webpack related imports
import webpack from 'webpack'
import webpackConfig from '../build/webpack.config'
import webpackDevMiddleware from './middleware/webpack-dev'
import webpackHMRMiddleware from './middleware/webpack-hmr'

// App configuration
import _debug from 'debug'
import config from '../config'
const debug = _debug('app:server')
const paths = config.utils_paths
const app = new Koa()

// Enable koa-proxy if it has been enabled in the config.
if (config.proxy && config.proxy.enabled) {
  app.use(convert(proxy(config.proxy.options)))
}

app.use(bodyparser())

app.use(mount('/model.json', falcorRouter.routes(falcorRoutes)))

app.use(s3router({
  bucket: process.env.AWS_BUCKET_NAME,
  region: process.env.AWS_REGION_NAME,
  signatureVersion: 'v4',
  headers: {'Access-Control-Allow-Origin': '*'},
  ACL: 'public-read'
}).routes())

// This rewrites all routes requests to the root /index.html file
// (ignoring file requests). If you want to implement isomorphic
// rendering, you'll want to remove this middleware.
app.use(convert(historyApiFallback({
  verbose: false
})))

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (config.env === 'development') {
  const compiler = webpack(webpackConfig)

  // Enable webpack-dev and webpack-hot middleware
  const { publicPath } = webpackConfig.output

  app.use(webpackDevMiddleware(compiler, publicPath))
  app.use(webpackHMRMiddleware(compiler))

  // Serve static assets from ~/src/static since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(serve(paths.client('static')))
} else {
  debug(
    'Server is being run outside of live development mode, meaning it will ' +
    'only serve the compiled application bundle in ~/dist. Generally you ' +
    'do not need an application server for this and can instead use a web ' +
    'server such as nginx to serve your static files. See the "deployment" ' +
    'section in the README for more information on deployment strategies.'
  )

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(serve(paths.dist()))
}

export default app
