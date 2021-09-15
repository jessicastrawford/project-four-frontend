import React from 'react'
import { useHistory } from 'react-router-dom'

import ImageUploadField from '../auth/ImageUpload'
import { registerUser, loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'
import { Link } from 'react-router-dom'



function Register() {

  const [error, setError] = React.useState(false)

  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    profileImage: '',
    jobTitle: '',
    company: '',
    
  })

  const history = useHistory()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await registerUser(formData)
      // history.push('/log-in')
      console.log(res)
      const { data } = await loginUser(formData)
      setToken(data.token)
      console.log(data.token)
      history.push('/designs')
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  // const handleLogIn = () => {
  //   history.push('/log-in')
  // }

  const handleImageUpload = (imageUrl, name) => {
    setFormData({ ...formData, [name]: imageUrl })
  }

  console.log(formData)
  return (
    <section className="register-page">
      <h1>Please sign up below</h1>
      <div>
        <input 
          placeholder="First name*"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="text-input"
          required
        />
      </div>
      <div>
        <input 
          placeholder="Last name*"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="text-input"
        />
      </div>
      <div>
        <input 
          placeholder="Username*"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="text-input"
        />
      </div>
      <div>
        <input 
          placeholder="Email address*"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="text-input"
        />
      </div>
      <div>
        <input 
          placeholder="Password*"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          className="text-input"
        />
      </div>
      <div>
        <input 
          placeholder="Password confirmation*"
          name="passwordConfirmation"
          type="password"
          value={formData.passwordConfirmation}
          onChange={handleChange}
          className="text-input"
        />
      </div>
      <div>
        <input 
          placeholder="Job title"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          className="text-input"
        />
      </div>
      <div>
        <input 
          placeholder="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="text-input"
        />   
      </div>
      <div className="image-upload">
        <ImageUploadField 
          onChange={handleImageUpload}
          labelText="Upload a profile picture*"
          name="profileImage"
          value={formData.profileImage}
        />
      </div>
      {error && 
        <>
          <p className="error-message">Please fill in the above required fields*</p>
        </>
      }
      <button type="submit" className="signup-button" onClick={handleSubmit}>Sign up</button>
      <p className="member">Already a member? <Link to="/log-in">Log in</Link></p>
      {/* <button type="submit" className="button login-button" onClick={handleLogIn}>Already have an account? Log in</button> */}
    </section>

  )
}

export default Register