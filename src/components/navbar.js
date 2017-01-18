import React, { Component } from 'react'
import { Link } from 'react-router'
// import { browserHistory } from 'react-router'

class NavBar extends Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="nine columns">Nine Columns</div>
          <div className="one column"><Link to="/contact">Contact</Link></div>
          <div className="one column"><Link to="/music">Music</Link></div>
          <div className="one column"><Link to="/about">About</Link></div>
        </div>
      </div>
    )
  }
}

export default NavBar
