import React, { Component } from 'react'
import LatestItem from './LatestItem'

class Latest extends Component {
  render () {
    return (
      <aside className="col-md-3 col-md-offset-1 col-sm-12">
        <h3>News</h3>
        <LatestItem />
        <LatestItem />
      </aside>
    )
  }
}

export default Latest
