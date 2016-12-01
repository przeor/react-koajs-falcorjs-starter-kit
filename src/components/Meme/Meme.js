import React, {PropTypes} from 'react'
import {Card, CardTitle, CardMedia} from 'material-ui'
import {meme, memeImage} from './Meme.scss'

const Meme = ({title, subTitle, image}) => (
  <div className={meme}>
    <Card>
      <CardTitle title={title} subtitle={subTitle} />
      <CardMedia>
        <img src={image || 'http://placehold.it/350?text=No+image+selected'} className={memeImage} />
      </CardMedia>
    </Card>
  </div>
)

Meme.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  image: PropTypes.string
}

export default Meme
