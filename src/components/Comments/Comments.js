import React, { Component } from 'react'
import Comment from './Comment'
import AddComment from './AddComment'

class Comments extends Component {
  render () {
    return (
      <section className="col-md-8 col-sm-12">
        <h3>Comments</h3>
        <Comment />
        <hr />
        <h4>Comment</h4>
        <AddComment />
      </section>
    )
  }
}

export default Comments
