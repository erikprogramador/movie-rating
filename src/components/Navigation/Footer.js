import React from 'react'
import NavigationHeader from './NavigationHeader'
import NavigationLinks from './NavigationLinks'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <NavigationHeader />
        </div>
        <div className="col-md-10">
          <NavigationLinks dropUp={true} />
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
