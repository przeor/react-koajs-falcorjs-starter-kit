import React from 'react'
import {Card, CardTitle, CardText} from 'material-ui'

const UserInfoPanel = ({user: {email, doc, balance, address}}) => (
  <div className="col-md-6 col-sm-12">
    <Card>
      <CardTitle title="User" />
      <CardText>
        <table className="table">
          <tbody>
            <tr>
              <th>Email</th>
              <td>{email}</td>
            </tr>
            <tr>
              <th>Created</th>
              <td>{doc}</td>
            </tr>
            <tr>
              <th>Balance</th>
              <td>{balance}</td>
            </tr>
            <tr>
              <th>Payment Address</th>
              <td>{address}</td>
            </tr>
          </tbody>
        </table>
      </CardText>
    </Card>
  </div>
)

export default UserInfoPanel
