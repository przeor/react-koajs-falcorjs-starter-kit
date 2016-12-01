import {connect} from 'react-redux'
import PaymentsPanel from '../../components/PaymentsPanel'

const mapStateToProps = () => {
  const payments = []
  for (let i = 0; i < 20; i++) {
    payments.push({
      type: 'Bitcoin',
      amount: Math.random() * 10,
      txid: 'uiwl47o3yiuhekrgifd8oyiuhj54ueytr8',
      date: Date.now(),
      confirmations: 2
    })

  }
  return {payments}
}

export default connect(mapStateToProps)(PaymentsPanel)
