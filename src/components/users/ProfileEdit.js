import React from 'react'
import { useHistory } from 'react-router-dom'

import ImageUploadField from '../auth/ImageUpload'
import { editUser, getSingleUser } from '../../lib/api'

function ProfileEdit() {

  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    profileImage: '',
    job_title: '',
    company: '',
    
  })
  
  const [user, setUser] = React.useState()
  const history = useHistory()
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSingleUser()
        setUser(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  console.log(user)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log('changing')
  }
  console.log(formData)



  const handleImageUpload = (imageUrl, name) => {
    setFormData({ ...formData, [name]: imageUrl })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await editUser(user?.id, formData)
      console.log(res)
      history.push('/profile')
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  console.log('finding', user?.id)

  const handleCancel = () => {
    history.push('/profile')
  }

  return (
    <section className="update-profile-section">
      <form className="update-form">
        <div className="profile-section-title">
          <h1>Public profile</h1>
          <p>People visiting your profile will see the following info</p>
        </div>
        <div className="profile-image-change">
          <div className="image-change">
            <img src={user?.profileImage} />
          </div>
          <div className="image-change-button">
            <ImageUploadField 
              onChange={handleImageUpload}
              labelText="Upload Image*"
              name="profileImage"
              value={formData.profileImage}
            />
          </div>
        </div>
        <div className="input">
          <label className="label">First name*</label>
          <input 
            placeholder={user?.firstName}
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="text-input"
          />
        </div>
        <div className="input">
          <label className="label">Last name*</label>
          <input 
            placeholder={user?.lastName}
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="text-input"
          />
        </div>
        <div className="input">
          <label className="label">Username*</label>
          <input 
            placeholder={user?.username}
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="text-input"
          />
        </div>
        <div className="input">
          <label className="label">Email address*</label>
          <input 
            placeholder={user?.email}
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="text-input"
          />
        </div>
        <div className="input">
          <label className="label">Job title</label>
          <input 
            placeholder={user?.jobTitle}
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="text-input"
          />
        </div>
        <div className="input">
          <label className="label">Company</label>
          <input 
            placeholder={user?.company}
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="text-input"
          />
        </div>
        {error && 
        <>
          <p className="error-message">Please fill in the above required fields*</p>
        </>
        }
        <div className="buttons">
          <button onClick={handleCancel} className="cancel-button">Cancel</button>
          <button onClick={handleSubmit} className="save-button">Save</button>
        </div>
      </form>
    </section>
  )
}
export default ProfileEdit