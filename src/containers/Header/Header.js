import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {modalOpen} from '../../modules/ui'
import Header from '../../components/Header'

const mapDispatchToProps = dispatch => ({
  modalOpen (modalId) {
    return () => dispatch(modalOpen(modalId))
  },
  goTo (route) {
    return () => dispatch(push(route))
  }
})

export default connect(null, mapDispatchToProps)(Header)
