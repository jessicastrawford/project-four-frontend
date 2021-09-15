import { NavLink } from 'react-router-dom'
import React from 'react'
import logo from '../../assets/design_feed_logo.png'
import { isAuthenticated, logout } from '../../lib/auth'
import { useHistory, useLocation } from 'react-router'
import LoginPopup from '../auth/LoginPopup'
import Login from '../auth/Login'

function Navbar() {

  useLocation()
  const isLoggedIn = isAuthenticated()
  const history = useHistory()
  const [buttonPopup, setButtonPopup] = React.useState(false)

  const handleLogout = () => {
    logout()
    setButtonPopup(false)
    history.push('/')
    console.log('clicked')

  }



  return (
    <nav>
      <div className="navbar">
        <div className="logo-title">  
          <NavLink to="/"><img src={logo} alt="logo" className="navbar-logo"/></NavLink>
          {/* <NavLink to="/">Design Feed</NavLink> */}
          {!isLoggedIn && 
          <NavLink to="/" className="title">Design Feed</NavLink>
          }
        </div>
        <div className="buttons">
          <NavLink to="/about" className="about-button">About</NavLink>
          {!isLoggedIn ? 
            <> 
              <button onClick={() => setButtonPopup(true)} className="login-button">Log in</button>
              {/* <LoginPopup trigger={true}>
                <Login />
              </LoginPopup> */}
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
      <LoginPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <Login />
      </LoginPopup>
    </nav>

  )
}

export default Navbar