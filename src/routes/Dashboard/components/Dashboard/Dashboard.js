import React from 'react'
import QRPanelContainer from '../../containers/QRPanel'
import UserInfoPanelContainer from '../../containers/UserInfoPanel'
import PaymentsPanelContainer from '../../containers/PaymentsPanel'

const Dashboard = () => (
  <div className="container">
    <div className="row">
      <QRPanelContainer />
      <UserInfoPanelContainer />
    </div>.
    <div className="row">
      <PaymentsPanelContainer />
    </div>
  </div>
)

export default Dashboard
