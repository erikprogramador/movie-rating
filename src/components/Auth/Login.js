import React, { Component } from 'react'

class Login extends Component {
  render () {
    return (
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" className="form-control" id="username" placeholder="Username" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" id="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
    )
  }
}

export default Login
