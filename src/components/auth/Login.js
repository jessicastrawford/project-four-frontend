import React from 'react'
import { useHistory } from 'react-router'
import { loginUser } from '../../lib/api'
import { setToken, isAuthenticated } from '../../lib/auth'
import LoginPopup from '../auth/LoginPopup'


function Login() {
  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
  })
  const [error, setError] = React.useState(false)
  const history = useHistory()
  const [trigger, setTrigger] = React.useState(true)
  const [buttonPopup, setButtonPopup] = React.useState(false)
  const isLoggedIn = isAuthenticated()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // setTrigger(false)
    // console.log('trigger', trigger)
    // setButtonPopup(false)
    // console.log('buttonpopup', buttonPopup)
    try {
      const res = await loginUser(formData)
      // if (!loginUser) throw new Error
      setToken(res.data.token)
      setButtonPopup(false)
      setTrigger(false)
      console.log(trigger)
      history.push('/designs')

    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  const handleClick = () => {
    history.push('/sign-up')
    setButtonPopup(false)
  }


  return (

    <section className="login-section">
      {!isLoggedIn ? 
        <form className="login">
          <input
            className="login-input"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            className="login-input"
            placeholder="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          // onBlur={handleSubmit}
          />
          <button
            type="submit" 
            className="login-button" 
            // onClick={() => setTrigger(false)}
            onClick={handleSubmit}
          // trigger={buttonPopup} 
          // setTrigger={setButtonPopup}
          >
        Log In
          </button>
          {error && 
        <>
          <p style={{ color: 'red' }}>Sorry, your username or password is inncorrect</p>
        </>
          }
          <p>Need an account? Sign up <button onClick={handleClick}className="here-button">here</button></p>
        </form>
        : ''} 
      <LoginPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <Login />
      </LoginPopup>
    </section>
    

  )
}


export default Login

{/* <LoginToast
type="submit" 
className="login-button" 
onClick={handleSubmit}>
Log In
</LoginToast> */}