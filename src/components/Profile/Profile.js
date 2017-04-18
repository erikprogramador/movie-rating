import React, { Component } from 'react'

class Profile extends Component {
  render () {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Erik Vanderlei</h1>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-12 text-center">
            <img src="http://unsplash.it/400/300" alt="Erik Vanderlei" className="img-rounded img-responsive" />
          </div>
          <div className="col-md-8 col-sm-12">
            <form>
              <div className="form-group">
                <label>Username:</label>
                <input type="text" placeholder="Username" className="form-control" />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" placeholder="Email" className="form-control" />
              </div>
              <div className="form-group">
                <label>Full Name:</label>
                <input type="text" placeholder="Full Name" className="form-control" />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" placeholder="Password" className="form-control" />
              </div>
              <div className="form-group">
                <label>Password Confirmation:</label>
                <input type="password" placeholder="Password Confirmation" className="form-control" />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-warning">Update Profile</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile

