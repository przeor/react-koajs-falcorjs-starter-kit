export default (store) => ({
  path: 'dashboard',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Dashboard = require('./components/Dashboard').default
      /*  Return getComponent   */
      cb(null, Dashboard)

    /* Webpack named bundle   */
    }, 'dashboard')
  }
})
