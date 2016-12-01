import React, {PropTypes} from 'react'
import {Map} from 'immutable'
import Meme from '../../../components/Meme'

const MemeView = ({memes}) => (
  <div className="container">
    {memes.map(meme => <Meme {...meme} />)}
  </div>
)

MemeView.propTypes = {
  memes: PropTypes.instanceOf(Map)
}

export default MemeView
