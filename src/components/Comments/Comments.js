import React, { Component } from 'react'

class Comments extends Component {
  render () {
    return (
      <section className="col-md-8 col-sm-12">
        <h3>Comments</h3>
        <div className="media">
          <div className="media-left">
            <a href="#">
              <img className="media-object" src="https://unsplash.it/100/100" alt="User Name" title="User Name" />
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">User Name</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam omnis perferendis nihil dolores blanditiis repudiandae numquam hic aliquid, quae tempora.</p>
          </div>
        </div>
        <hr />
        <h4>Comment</h4>
        <form action="">
          <div className="form-group">
            <textarea name="comment" id="comment" cols="30" rows="10" className="form-control"></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-success">Comment</button>
          </div>
        </form>
      </section>
    )
  }
}

export default Comments
