import React, { Component } from 'react'

class Register extends Component {
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
          <label>Password Confirmation:</label>
          <input type="password" className="form-control" id="confirmation" placeholder="Password Confirmation" />
        </div>
        <div>
          <a>Read the terms before make the sign in</a>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" id="terms" /> Accept the terms
          </label>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">Register</button>
        </div>
      </form>
    )
  }
}

export default Register
