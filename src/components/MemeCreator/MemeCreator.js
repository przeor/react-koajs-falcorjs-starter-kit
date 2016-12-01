import React, {Component, PropTypes} from 'react'
import {Link, browserHistory} from 'react-router'
import {Card, CardHeader, CardActions, RaisedButton, TextField} from 'material-ui'
import Meme from '../Meme'
import ImgUploader from './ImgUploader'
import {memePreview} from './MemeCreator.scss'

class MemeCreator extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      titleField: '',
      subTitleField: '',
      imgField: ''
    }
    this._onTitleChange = this._onTitleChange.bind(this)
    this._onSubTitleChange = this._onSubTitleChange.bind(this)
    this._onImgChange = this._onImgChange.bind(this)
    this._onImgUpload = this._onImgUpload.bind(this)
    this._saveMeme = this._saveMeme.bind(this)
  }

  _onTitleChange ({target: {value}}) {
    this.setState({titleField: value})
  }

  _onSubTitleChange ({target: {value}}) {
    this.setState({subTitleField: value})
  }

  _onImgChange ({target: {value}}) {
    this.setState({imgField: value})
  }

  _onImgUpload (url) {
    this.setState({imgField: url})
  }

  _saveMeme () {
    const {titleField, subTitleField, imgField} = this.refs
    const getValue = field => field.input.value
    this.props.saveMeme({
      title: getValue(titleField),
      subTitle: getValue(subTitleField),
      image: getValue(imgField)
    })
  }
  render () {
    const {titleField, subTitleField, imgField} = this.state
    return (
      <div className="container">
        <Card>
          <CardHeader title="Add your meme" />
          <div className="container">
            <div><TextField onChange={this._onTitleChange} ref="titleField" floatingLabelText="Title" /></div>
            <div><TextField onChange={this._onSubTitleChange} ref="subTitleField" floatingLabelText="Subtitle" /></div>
            <div><TextField onChange={this._onImgChange} ref="imgField" floatingLabelText="Image URL" /></div>
            <div>or...</div>
            <div><ImgUploader onChange={this._onImgUpload} /></div>
          </div>
          <div className="container">
            <Meme
              title={titleField || 'Enter title...'}
              subTitle={subTitleField || 'Enter subtitle'}
              image={imgField} />
          </div>
          <CardActions>
            <RaisedButton primary onClick={this._saveMeme} label="Save" />
            <RaisedButton secondary onClick={this.props.cancel} label="Cancel" />
          </CardActions>
        </Card>
      </div>
    )
  }
}

MemeCreator.propTypes = {
  saveMeme: PropTypes.func,
  cancel: PropTypes.func
}

export default MemeCreator
