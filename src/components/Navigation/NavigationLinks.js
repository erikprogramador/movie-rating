import React from 'react'
import { Link } from 'react-router-dom'

const NavigationLinks = (props) => (
  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul className="nav navbar-nav navbar-right">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/individual">Popular</Link></li>
      <li><Link to="/">News</Link></li>
      <li className={props.dropUp ? 'dropup' : 'dropdown'}>
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Categories <span className="caret"></span></a>
        <ul className="dropdown-menu">
          <li><Link to="/">Action</Link></li>
          <li><Link to="/">Humor</Link></li>
          <li role="separator" className="divider"></li>
          <li><Link to="/">Action</Link></li>
          <li><Link to="/">Humor</Link></li>
          <li role="separator" className="divider"></li>
          <li><Link to="/">Action</Link></li>
          <li><Link to="/">Humor</Link></li>
        </ul>
      </li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/login">Register</Link></li>
    </ul>
  </div>
)

export default NavigationLinks
