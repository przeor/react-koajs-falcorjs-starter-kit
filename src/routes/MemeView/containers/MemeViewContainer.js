import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchMemes} from '../modules'
import PlainMemeView from '../components/MemeView'

const mapStateToProps = ({memes}) => ({memes})
const mapDispatchToProps = dispatch => ({
  fetchMemes () {
    dispatch(fetchMemes())
  }
})

class MemeView extends Component {
  componentWillMount () {
    this.props.fetchMemes()
  }
  render () {
    return <PlainMemeView {...this.props} />
  }
}

MemeView.propTypes = {
  fetchMemes: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(MemeView)
