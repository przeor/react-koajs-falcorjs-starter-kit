import {connect} from 'react-redux'
import UserInfoPanel from '../../components/UserInfoPanel'

const mapStateToProps = () => ({
  user: {
    email: 'user@domain.com',
    doc: '10-08-2016',
    balance: 123.45678665,
    address: 'u3458iykjh58owep9ruh3434roisj'
  }
})

export default connect(mapStateToProps)(UserInfoPanel)
