import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Navigation from './Navigation/Navigation'
import Home from './Home/Home'
import Individual from './Individual/Individual'
import Footer from './Navigation/Footer'
import RegisterLogin from './Auth/RegisterLogin'

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/individual" component={Individual} />
      <Route path="/login" component={RegisterLogin} />
      <Footer />
    </div>
  </Router>
)

export default App
