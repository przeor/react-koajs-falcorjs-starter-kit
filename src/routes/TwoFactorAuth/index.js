export default store => ({
  path: '2fa',
  getComponent (nextState, cb) {
    require.ensure([], require => {
      const TwoFactorAuth = require('./components/TwoFactorAuth').default
      cb(null, TwoFactorAuth)
    }, '2fa')
  }
})
