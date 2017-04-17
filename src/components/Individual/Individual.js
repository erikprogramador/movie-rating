import React from 'react'
import MovieInfo from '../Movie/MovieInfo'
import Comments from '../Comments/Comments'
import Latest from '../Movie/Latest'

const Individual = () => (
  <main class="container">
    <MovieInfo />
    <div className="container"><hr/></div>
      <div className="container">
      <div className="row">
        <Comments />
        <Latest />
      </div>
    </div>
  </main>
)

export default Individual
