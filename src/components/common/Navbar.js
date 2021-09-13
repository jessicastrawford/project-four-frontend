import { NavLink } from 'react-router-dom'
import React from 'react'
import logo from '../../assets/design_feed_logo.png'
import { isAuthenticated, logout } from '../../lib/auth'
import { useHistory, useLocation } from 'react-router'

function Navbar() {

  useLocation()
  const isLoggedIn = isAuthenticated()
  const history = useHistory()

  const handleLogout = () => {
    logout()
    history.push('/')
    console.log('clicked')
  }


  return (
    <nav>
      <div className="navbar">
        <div>  
          <NavLink to="/"><img src={logo} alt="logo" className="navbar-logo"/></NavLink>
        </div>
        <div className="buttons">
          <NavLink to="/about" className="about-button">About</NavLink>
          {!isLoggedIn ? 
            <> 
              <NavLink to="/log-in" className="login-button">Log in</NavLink>
              <NavLink to="/sign-up" className="signup-button">Sign up</NavLink>
            </>
            :
            <>
              <NavLink to="/profile" className="profile-button">Profile</NavLink>
              <NavLink to="/designs" className="designs-button">Designs</NavLink>
              <button onClick={handleLogout} className="logout-button">Log out</button>
            </>
          }
        </div>
      </div>
    </nav>

  )
}

export default Navbar