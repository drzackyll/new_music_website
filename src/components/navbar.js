import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="one column offset-by-seven" style={{textAlign: "center"}}><Link to="/">home</Link></div>
        <div className="one column" style={{textAlign: "center"}}><Link to="/music">music</Link></div>
        <div className="one column" style={{textAlign: "center"}}><Link to="/photos">photos</Link></div>
        <div className="one column" style={{textAlign: "center"}}><Link to="/about">about</Link></div>
        <div className="one column" style={{textAlign: "center"}}><Link to="/contact">contact</Link></div>
      </div>
    </div>
  )
}

export default NavBar
