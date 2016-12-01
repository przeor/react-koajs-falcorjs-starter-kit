import React, {PropTypes} from 'react'
import {Card, CardTitle, CardText} from 'material-ui'
const PaymentsPanel = ({payments}) => (
  <div className="col-sm-12 col-md-12">
    <Card>
      <CardTitle title="Payments" />
      <CardText>
        <table className="table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Txid</th>
              <th>Date</th>
              <th>Confirmations</th>
            </tr>
          </thead>
          <tbody>
          {
            payments.map(({type, amount, txid, date, confirmations}) => (
              <tr key={Date.now() + Math.random()}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{txid}</td>
                <td>{date}</td>
                <td>{confirmations}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </CardText>
    </Card>
  </div>
)

PaymentsPanel.propTypes = {
  payments: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.number,
    txid: PropTypes.string,
    date: PropTypes.number,
    confirmations: PropTypes.number
  }))
}

export default PaymentsPanel
