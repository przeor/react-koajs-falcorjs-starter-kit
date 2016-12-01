export {default as MemeCreatorContainer} from './containers/MemeCreatorContainer.js'

export default (store) => ({
  path: 'creator',
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const MemeCreatorContainer = require('./containers/MemeCreatorContainer').default
      /*  Return getComponent   */
      cb(null, MemeCreatorContainer)

    /* Webpack named bundle   */
    }, 'memeCreator')
  }
})
