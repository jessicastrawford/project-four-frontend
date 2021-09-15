import React from 'react'
import { isAuthenticated } from '../../lib/auth'
// import CancelIcon from '@material-ui/icons/Cancel'

function LoginPopup(props) {

  const isLoggedIn = isAuthenticated()

  return (props.trigger && !isLoggedIn) ? (
    <div className="popup"> 
      <div className="popup-inner">
        <button className="close-button" onClick={() => props.setTrigger(false)}>Close</button>
        {props.children}
      </div>
    </div>
  ) : ''
}

export default LoginPopup