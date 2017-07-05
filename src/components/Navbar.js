import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <nav className="">
      <div className="container-fluid">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">zack adams</a>
          </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <div style={{textAlign: "center"}} className="nav navbar-nav navbar-right">
            <Link to="/">home</Link> |
            <Link to="/music">music</Link> |
            <Link to="/photos">photos</Link> |
            <Link to="/about">about</Link> |
            <Link to="/contact">contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
