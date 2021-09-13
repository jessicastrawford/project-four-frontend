import React from 'react'
import { useHistory } from 'react-router'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'
import { Link } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react' 
import LoginToast from './LoginToast' 

function Login() {
  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
  })
  const [error, setError] = React.useState(false)

  const history = useHistory()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await loginUser(formData)
      // if (!loginUser) throw new Error
      setToken(res.data.token)
      history.push('/designs')
      console.log(res)
      LoginToast()
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }



  return (
    <ChakraProvider>
      <section className="login-section">
        <form>
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
            onClick={handleSubmit}>
        Log In
          </button>
          {error && 
        <>
          <p>Sorry, your username or password is inncorrect</p>
        </>
          }
          <p>Need an account? Sign up <Link to="/register" style={{ color: 'red' }}>here</Link></p>
        </form>
      </section>
    </ChakraProvider>
   
  )
}

export default Login

{/* <LoginToast
type="submit" 
className="login-button" 
onClick={handleSubmit}>
Log In
</LoginToast> */}