import React, {PropTypes} from 'react'
import {Card, CardTitle, CardText} from 'material-ui'
import {qrCode as qrCodeClass} from './QRPanel.scss'

const QRPanel = ({address, qrCode}) => (
  <div className="col-md-6 col-sm-12">
    <Card>
      <CardTitle title="Address to pay" />
      <CardText>{address}</CardText>
      <CardText>
        <img src={qrCode} className={qrCodeClass} />
      </CardText>
    </Card>
  </div>
)

QRPanel.propTypes = {
  address: PropTypes.string,
  qrCode: PropTypes.string
}

export default QRPanel
