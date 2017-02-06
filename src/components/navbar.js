import React from 'react'
import { Link } from 'react-router'
// import { browserHistory } from 'react-router'

const NavBar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="one column offset-by-eight"><Link to="/music"><img src={require("../../public/images/musiclyrics.png")} className="nav-bar-resize" alt="Music"/></Link></div>
        <div className="one column"><Link to="/photos"><img src={require("../../public/images/pics.png")} className="nav-bar-resize" alt="Pics"/></Link></div>
        <div className="one column"><Link to="/about"><img src={require("../../public/images/about.png")} className="nav-bar-resize" alt="About"/></Link></div>
        <div className="one column"><Link to="/contact"><img src={require("../../public/images/contact.png")} className="nav-bar-resize" alt="Contact"/></Link></div>
      </div>
    </div>
  )
}

export default NavBar
