import { NavLink } from 'react-router-dom'
import React from 'react'
import logo from '../../assets/design_feed_logo.png'

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div>  
          <NavLink to="/"><img src={logo} alt="logo" className="navbar-logo"/></NavLink>
        </div>
        <div className="buttons">
          <NavLink to="/about" className="about-button">About</NavLink>
          <NavLink to="log-in" className="login-button">Log in</NavLink>
          <NavLink to="sign-up" className="signup-button">Sign up</NavLink>
        </div>
      </div>
    </nav>

  )
}

export default Navbar