import React, {Component, PropTypes} from 'react'
import Uploader from '../../composable/Uploader'

class ImgUploader extends Component {
  constructor (props, context) {
    super(props, context)
    this._uploadFile = this._uploadFile.bind(this)
  }
  async _uploadFile () {
    const publicUrl = await this.props.upload(this.refs.file.files[0])
    this.props.onChange(publicUrl)
  }
  render () {
    return (
      <div>
        <input type="file" ref="file" onChange={this._uploadFile} />
      </div>
    )
  }
}

ImgUploader.propTypes = {
  upload: PropTypes.func,
  onChange: PropTypes.func
}

export default Uploader(ImgUploader)
