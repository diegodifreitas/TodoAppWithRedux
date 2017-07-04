import React, { Component } from 'react'

import '../App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

import Menu from '../template/Menu'
import Routes from './Routes'


class App extends Component {
  render() {
    return (
      <div className="">
        <Menu />
        <div className='container'>
          <Routes />
        </div>
      </div>
    )
  }
}

export default App
