import React, { Component } from 'react'

class FeaturedList extends Component {
  render () {
    const { item } = this.props
    return (
      <div className="row" style={{ marginBottom: '1em' }}>
        <div className="col-md-3">
          <img src="https://unsplash.it/130/130" alt="Some movie" className="img-rounded" />
        </div>
        <div className="col-md-9">
          <h4>
            {item.title}
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
            <i className="fa fa-star-o"></i>
            <i className="fa fa-star-o"></i>
          </h4>
          <p>{item.description}</p>
          <p className="text-right">
            <a href="" className="btn btn-success">Show more</a>
          </p>
        </div>
      </div>
    )
  }
}

export default FeaturedList
