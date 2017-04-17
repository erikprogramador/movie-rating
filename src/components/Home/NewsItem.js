import React, { Component } from 'react'

class NewsItem extends Component {
  render () {
    const { item } = this.props
    return (
      <li className="list-group-item">
        <a href="#">
          <div className="row">
            <div className="col-md-3">
              <img src="https://unsplash.it/130/130" alt="Some movie" className="img-rounded img-responsive" />
            </div>
            <div className="col-md-9">
              <h4 className="list-group-item-heading">{item.title}</h4>
              <p className="list-group-item-text">{item.description}</p>
            </div>
          </div>
        </a>
      </li>
    )
  }
}

export default NewsItem
