import React from 'react'
import { useHistory } from 'react-router'
import { loginUser } from '../../lib/api'
import { setToken, isAuthenticated } from '../../lib/auth'
import { Link } from 'react-router-dom'
import LoginPopup from '../auth/LoginPopup'


function Login() {
  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
  })
  const [error, setError] = React.useState(false)
  const history = useHistory()
  const isLoggedIn = isAuthenticated()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await loginUser(formData)
      setToken(res.data.token)
      history.push('/designs')

    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  const handleClick = () => {
    history.push('/sign-up')
  }


  return (

    <section className="login-section notpopup">
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
          />
          <button
            type="submit" 
            className="login-button" 
            onClick={handleSubmit}
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
    </section>
    

  )
}


export default Login