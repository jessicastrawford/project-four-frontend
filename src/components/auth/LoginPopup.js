import React from 'react'

function LoginPopup(props) {
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-button" onClick={() => props.setTrigger(false)}>close</button>
        {props.children}
      </div>
    </div>
  ) : ''
}

export default LoginPopup