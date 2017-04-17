import React, { Component } from 'react'

class Newsletter extends Component {
  render () {
    return (
      <section className="section newsletter">
        <div className="overlay">
          <div className="container text-center">
            <h2>Get the notification!</h2>
            <p>When we have new movies, or new reviews, you will receive a notification on your email!</p>
            <form className="col-sm-12 col-md-6 col-md-offset-3">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="You E-mail here" />
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="button">Subscribe</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Newsletter
