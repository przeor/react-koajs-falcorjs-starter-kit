import React from 'react'

const TwoFactorAuth = () => (
  <div className="container">
    <div className="row">
      <div className="col s12 m12">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Log in</span>
            <p>You are using two factor authentication. Enter the received code.</p>
            <div className="input-field col s12">
              <input id="2fa" type="text" />
              <label htmlFor="2fa">Authentication code</label>
            </div>
            <a className="waves-effect waves-light btn">Log in</a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default TwoFactorAuth
