import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {saveMeme} from '../../MemeView'
import MemeCreator from '../../../components/MemeCreator'

const mapStateToProps = state => ({
  state
})

const mapDispatchToProps = dispatch => ({
  saveMeme (meme) {
    dispatch(saveMeme(meme))
  },
  cancel () {
    dispatch(push('/'))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MemeCreator)
