import React, {PropTypes} from 'react'
import {Toolbar, ToolbarGroup, RaisedButton} from 'material-ui'

export const Header = ({modalOpen, goTo}) => (
  <Toolbar>
    <ToolbarGroup>
      <RaisedButton label="Home" onClick={goTo('/')} />
      <RaisedButton label="Add your meme" onClick={goTo('/creator')} />
      <RaisedButton label="Log in" onClick={modalOpen('logInModal')} />
    </ToolbarGroup>
  </Toolbar>
)

Header.propTypes = {
  modalOpen: PropTypes.func,
  goTo: PropTypes.func
}

export default Header
