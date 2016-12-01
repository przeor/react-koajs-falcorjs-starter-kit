import {connect} from 'react-redux'
import QRPanel from '../../components/QRPanel'

const mapStateToProps = () => ({
  address: 'u3458iykjh58owep9ruh3434roisj',
  qrCode: 'https://assets.econsultancy.com/images/resized/0002/4236/qr_code-blog-third.png'
})

export default connect(mapStateToProps)(QRPanel)
