import React, { Component } from 'react'

class Latest extends Component {
  render () {
    return (
      <aside className="col-md-3 col-md-offset-1 col-sm-12">
        <h3>News</h3>
        <div className="row">
          <div className="thumbnail">
            <img src="https://unsplash.it/400/200" className="img-responsive" alt="Movie Title" />
            <div className="caption">
              <h3>Movie title</h3>
              <p><a href="#" role="button">Show More</a></p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="thumbnail">
            <img src="https://unsplash.it/400/200" className="img-responsive" alt="Movie Title" />
            <div className="caption">
              <h3>Movie title</h3>
              <p><a href="#" role="button">Show More</a></p>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}

export default Latest
