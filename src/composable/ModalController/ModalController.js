import {connect} from 'react-redux'
import {modalOpen, modalClose} from '../../modules/ui'

const createModalController = (InnerComponent, modalId, action) => {
  const mapDispatchToProps = dispatch => ({
    action () {
      switch (action) {
        case 'open':
          dispatch(modalOpen(modalId))
          break
        case 'close':
          dispatch(modalClose(modalId))
          break
        default:
          console.log('Wrong action type: ', action)
      }
    }
  })

  return connect(null, mapDispatchToProps)(InnerComponent)
}

export default createModalController
