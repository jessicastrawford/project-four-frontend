import React from 'react'
import ImageUploadField from '../auth/ImageUpload'
import { getSingleUser } from '../../lib/api'

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log('changing')
  }
  console.log(formData)

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

  const handleImageUpload = (imageUrl, name) => {
    setFormData({ ...formData, [name]: imageUrl })
  }
  return (
    <section className="update-profile-section">
      <div className="profile-section-title">
        <h3>Public profile</h3>
        <p>People visiting your profile will see the following info</p>
      </div>
      <div className="profile-image-change">
        <img src={user?.profileImage} />
        <div className="image-change-button">
          <ImageUploadField 
            onChange={handleImageUpload}
            labelText="Change"
            name="profileImage"
            value={formData.profileImage}
          />
        </div>
      </div>
      <div>
        <h5>First Name</h5>
        <input 
          placeholder={user?.firstName}
          name="firstName"
          value={user?.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <h5>Last Name</h5>
        <input 
          placeholder={user?.lastName}
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <h5>Username</h5>
        <input 
          placeholder={user?.username}
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <h5>Email address</h5>
        <input 
          placeholder={user?.email}
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <h5>Job title</h5>
        <input 
          placeholder={user?.jobTitle}
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
        />
      </div>
      <div>
        <h5>Company</h5>
        <input 
          placeholder={user?.company}
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>
      {/* <button type="submit" className="profile-change-button" onClick={handleSubmit}>Change</button> */}
    </section>
  )
}
export default ProfileEdit