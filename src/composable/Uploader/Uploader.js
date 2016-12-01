import React, {Component} from 'react'
import axios from 'axios'

const createUploader = InnerComponent => {
  class Uploader extends Component {
    constructor (props, context) {
      super(props, context)
      this.state = {
        signedUrl: ''
      }
      this._upload = this._upload.bind(this)
    }
    _upload (file) {
      return new Promise(async (resolve, reject) => {
        console.log(file.type)
        const query = `/s3/sign?fileType=${file.type}&fileName=${file.name}`
        const {data: {signedUrl, publicUrl, fileName}} = await axios.get(query)
        try {
          await axios.put(signedUrl, file).catch(e => console.log(e))
        } catch (e) {
          console.log(e)
        }
        resolve(publicUrl, fileName)
      })
    }
    render () {
      return (
        <InnerComponent {...this.props} upload={this._upload} />
      )
    }
  }

  return Uploader
}

export default createUploader
