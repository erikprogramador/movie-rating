import React, { Component } from 'react'
import Panel from '../Display/Panel'
import Login from './Login'
import Register from './Register'

class RegisterLogin extends Component {
  render () {
    return (
      <main className="container">
        <div className="col-md-6 col-sm-12">
          <Panel title="Login">
            <Login />
          </Panel>
        </div>
        <div className="col-md-6 col-sm-12">
          <Panel title="Register">
            <Register />
          </Panel>
        </div>
      </main>
    )
  }
}

export default RegisterLogin
