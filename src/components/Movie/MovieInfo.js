import React, { Component } from 'react'
import Star from './Star'

class MovieInfo extends Component {
  render () {
    return (
      <section className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img src="https://unsplash.it/900/700" alt="Movie Title" className="img-rounded img-responsive" />
          </div>
          <div className="col-md-6 col-sm-12">
            <h2>
              Movie Title
              <br />
              <Star count={2} />
            </h2>
            <p><strong>Author:</strong> James Bond</p>
            <p><strong>Director:</strong> Will Smith</p>
            <p><strong>Categories:</strong> Action, Humor</p>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure provident quaerat ducimus animi! Quia in, sit! Fuga sint nobis, tenetur quod cum non cumque alias sed officiis quae illum quaerat impedit corporis doloremque architecto magnam. Quaerat id possimus, molestias nesciunt tempore cum, minima repudiandae vero hic veniam aliquid soluta voluptatibus consequatur consequuntur! Quisquam libero, nulla! Possimus officiis nobis nulla aliquam temporibus nostrum, dignissimos exercitationem, facere voluptate iure, labore doloribus cumque?</p>
            <p className="text-right"><button className="btn btn-primary">Watch the trailer</button></p>
          </div>
        </div>
      </section>
    )
  }
}

export default MovieInfo
