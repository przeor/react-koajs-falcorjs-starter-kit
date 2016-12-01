import React, {Component} from 'react'
import {Dialog, TextField, RaisedButton} from 'material-ui'
import createModalController from '../../composable/ModalController'

const contentStyle = {
  width: '400px',
  marginRight: 'auto',
  marginLeft: 'auto'
}

const ModalCloseButton = createModalController(({action}) => (
  <RaisedButton onClick={action} label="Close" secondary />
), 'logInModal', 'close')

class LogInModal extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      open: false
    }

    this._openModal = this._openModal.bind(this)
    this._closeModal = this._closeModal.bind(this)

    this.dialogActions = [
      <RaisedButton label="Log in" primary />,
      <ModalCloseButton />
    ]
  }

  _openModal () {
    this.setState({open: true})
  }

  _closeModal () {
    this.setState({open: false})
  }

  render () {
    return (
      <Dialog
        actions={this.dialogActions}
        open={this.props.open}
        contentStyle={contentStyle}
        title="Log in">
        <div>
          <div><TextField floatingLabelText="Username/Email" /></div>
          <div><TextField floatingLabelText="Password" /></div>
        </div>
      </Dialog>
    )
  }
}

export default LogInModal
