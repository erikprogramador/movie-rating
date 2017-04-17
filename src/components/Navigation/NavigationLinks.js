import React from 'react'

const NavigationLinks = (props) => (
  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul className="nav navbar-nav navbar-right">
      <li><a href="#">Home</a></li>
      <li><a href="#">Popular</a></li>
      <li><a href="#">News</a></li>
      <li className={props.dropUp ? 'dropup' : 'dropdown'}>
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Categories <span className="caret"></span></a>
        <ul className="dropdown-menu">
          <li><a href="#">Action</a></li>
          <li><a href="#">Humor</a></li>
          <li role="separator" className="divider"></li>
          <li><a href="#">Action</a></li>
          <li><a href="#">Humor</a></li>
          <li role="separator" className="divider"></li>
          <li><a href="#">Action</a></li>
          <li><a href="#">Humor</a></li>
        </ul>
      </li>
    </ul>
  </div>
)

export default NavigationLinks
