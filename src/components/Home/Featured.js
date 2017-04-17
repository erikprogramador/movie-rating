import React, { Component } from 'react'
import FeaturedList from './FeaturedList'
import FeaturedMaster from './FeaturedMaster'

class Featured extends Component {
  constructor (props) {
    super(props)
    this.state = {
      featureds: [
        { id: 2, title: 'Some title', description: 'some nice description' },
        { id: 3, title: 'Some title', description: 'some nice description' },
        { id: 4, title: 'Some title', description: 'some nice description' }
      ],
      master: { id: 1, title: 'Master Featured', description: 'some nice description to the featured' }
    }
  }

  render () {
    return (
      <section className="section container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <FeaturedMaster item={this.state.master} />
          </div>
          <div className="col-sm-12 col-md-6">
            {this.state.featureds.map(featured => <FeaturedList item={featured} key={featured.id} />)}
          </div>
        </div>
      </section>
    )
  }
}

export default Featured
