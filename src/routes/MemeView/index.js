export {saveMeme} from './modules/memeView.js'
import { injectReducer } from '../../store/reducers'

export default (store) => ({
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const MemeViewContainer = require('./containers/MemeViewContainer').default
      const reducer = require('./modules/memeView').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'memes', reducer })

      /*  Return getComponent   */
      cb(null, MemeViewContainer)

    /* Webpack named bundle   */
    }, 'memeView')
  }
})
