import React, { Component } from 'react'
import Star from '../Movie/Star'

class FeaturedMaster extends Component {
  render () {
    const { item } = this.props
    return (
      <div className="thumbnail">
        <img src="https://unsplash.it/800/400" alt="First movie" />
        <div className="caption">
          <h3>
            {item.title}
            <Star count={2} />
          </h3>
          <p>{item.description}</p>
          <p className="text-right"><a href="#" className="btn btn-success" role="button">Show more</a></p>
        </div>
      </div>
    )
  }
}

export default FeaturedMaster
