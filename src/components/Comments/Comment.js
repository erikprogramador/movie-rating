import React, { Component } from 'react'

class Comment extends Component {
  render () {
    return (
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
    )
  }
}

export default Comment
