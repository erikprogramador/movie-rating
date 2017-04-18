import React, { Component } from 'react'

class Profile extends Component {
  render () {
    return (
      <div className="container">
        <div class="page-header">
          <h1>Erik Vanderlei</h1>
        </div>

        <div className="row">
          <div className="col-md-8 col-sm-12"></div>
          <div className="col-md-4 col-sm-12 text-center">
            <img src="http://unsplash.it/300/300" alt="Erik Vanderlei" class="img-rounded" />
          </div>
        </div>
      </div>
    )
  }
}

export default Profile

