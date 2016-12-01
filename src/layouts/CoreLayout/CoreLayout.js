import React from 'react'
import {connect} from 'react-redux'
import {getModals} from '../../modules/ui'
import Header from '../../containers/Header'
import LogInModal from '../../components/LogInModal'
import '../../styles/core.scss'

const mapStateToProps = state => ({
  modals: getModals(state, ['logInModal'])
})

export const CoreLayout = ({ children, modals }) => (
  <div>
    <Header />
    <LogInModal open={modals.logInModal} />
    <div>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default connect(mapStateToProps)(CoreLayout)
