import React from 'react'
import NavigationHeader from './NavigationHeader'
import NavigationLinks from './NavigationLinks'

const Navigation = () => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <NavigationHeader />

      <NavigationLinks dropUp={false} />
    </div>
  </nav>
)

export default Navigation
