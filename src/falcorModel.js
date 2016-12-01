import {Model} from 'falcor'
import FalcorDataSource from 'falcor-http-datasource'

class PublishingAppDataSource extends FalcorDataSource {
  onBeforeRequest (config) {
  }
}

const falcorOptions = {
  source: new PublishingAppDataSource('/model.json'),
  errorSelector (path, error) {
    console.log('error')
  }
}

const model = new Model(falcorOptions)

export default model
