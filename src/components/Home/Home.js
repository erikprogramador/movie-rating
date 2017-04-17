import React, { Component } from 'react'
import Featured from './Featured'
import News from './News'
import Newsletter from './Newsletter'

class Home extends Component {
  render () {
    return (
      <div>
        <Featured />
        <div className="container"><hr /></div>
        <News />
        <Newsletter />
      </div>
    )
  }
}

export default Home
