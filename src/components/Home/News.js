import React, { Component } from 'react'
import NewsItem from './NewsItem'

class News extends Component {
  constructor (props) {
    super(props)
    this.state = {
      news: [
        { id: 1, title: 'some good title', description: 'Some nice description for this good movie' },
        { id: 2, title: 'some good title', description: 'Some nice description for this good movie' },
        { id: 3, title: 'some good title', description: 'Some nice description for this good movie' }
      ],
      launch: [
        { id: 4, title: 'some good title', description: 'Some nice description for this good movie' },
        { id: 5, title: 'some good title', description: 'Some nice description for this good movie' },
        { id: 6, title: 'some good title', description: 'Some nice description for this good movie' }
      ]
    }
  }
  render () {
    return (
      <section className="section info container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h2>News Week</h2>
            <ul className="list-group">
              {this.state.news.map(newItem => <NewsItem item={newItem} key={newItem.id} />)}
            </ul>
          </div>
          <div className="col-sm-12 col-md-6">
            <h2>Next Launch</h2>
            <ul className="list-group">
              {this.state.launch.map(launchItem => <NewsItem item={launchItem} key={launchItem.id} />)}
            </ul>
          </div>
        </div>
        <div className="text-center">
          <a href="" className="btn btn-success btn-lg">Checkout More news</a>
        </div>
      </section>
    )
  }
}

export default News
