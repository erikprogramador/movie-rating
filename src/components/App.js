import React, { Component } from 'react'
import Navigation from './Navigation/Navigation'
import Home from './Home/Home'
import Individual from './Individual/Individual'
import Footer from './Navigation/Footer'

const App = () => (
  <div>
    <Navigation />
    {/*<Home />*/}
    <Individual />
    <Footer />
  </div>
)

export default App
