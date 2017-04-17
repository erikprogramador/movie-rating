import React, { Component } from 'react'

class AddComment extends Component {
  render () {
    return (
      <form action="">
        <div className="form-group">
          <textarea name="comment" id="comment" cols="30" rows="10" className="form-control"></textarea>
        </div>
        <div className="form-group">
          <button className="btn btn-success">Comment</button>
        </div>
      </form>
    )
  }
}

export default AddComment
