import React, { Component } from 'react'

class LatestItem extends Component {
  render () {
    return (
      <div className="row">
        <div className="thumbnail">
          <img src="https://unsplash.it/400/200" className="img-responsive" alt="Movie Title" />
          <div className="caption">
            <h3>Movie title</h3>
            <p><a href="#" role="button">Show More</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestItem
