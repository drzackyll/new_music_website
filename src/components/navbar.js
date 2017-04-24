import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-1 col-sm-offset-7" style={{textAlign: "center"}}><Link to="/">home</Link></div>
        <div className="col-sm-1" style={{textAlign: "center"}}><Link to="/music">music</Link></div>
        <div className="col-sm-1" style={{textAlign: "center"}}><Link to="/photos">photos</Link></div>
        <div className="col-sm-1" style={{textAlign: "center"}}><Link to="/about">about</Link></div>
        <div className="col-sm-1" style={{textAlign: "center"}}><Link to="/contact">contact</Link></div>
      </div>
    </div>
  )
}

export default NavBar
