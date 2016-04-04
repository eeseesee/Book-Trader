import React, { Component } from 'react'

import TopImage from '../dummies/home-image'
import Services from '../dummies/services'

class HomePage extends Component  {

  render() {
    return (
      <div className="home-page">
        <TopImage />
        <Services />
      </div>
    )
  }
}

export default HomePage
