import React from 'react'
import { profileView } from '../../lib/api'
import { getUserId } from '../../lib/auth'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

function ProfileShow() {

  const [profile, setProfile] = React.useState('')

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await profileView(getUserId())
        setProfile(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  console.log(profile.username)

  const history = useHistory()

  const handleClick = () => {
    history.push('/profile-edit')
  }

  const handleUpload = () => {
    history.push('/design-upload')
  }

  console.log(profile.savedDesigns)
  console.log(profile.addedDesigns)

  return (
    <section className="profile-show-section">
      <img src={profile.profileImage} alt="profile-image" className="profile-image"/>
      <button onClick={handleClick}>Edit</button>
      <p>{profile.firstName} {profile.lastName}</p>
      <p>{profile.username}</p>
      <div className="added-designs">
        <p>Your Designs</p>
        <button onClick={handleUpload}>Upload your designs</button>
        {profile && profile.addedDesigns.map(addedDesign => (
          <>
            <Link to={`/designs/${addedDesign.id}`}>
              <img key={addedDesign.name} src={addedDesign.image}/>
            </Link>
          </>
        ))}
      </div>
      <div className="saved-designs">
        <p>Saved Designs</p>
        {profile && profile.savedDesigns.map(savedDesign => (
          <>
            <Link to={`/designs/${savedDesign.id}`}> 
              <img key={savedDesign.name} src={savedDesign.image}/>
            </Link>
          </>
        ))}
      </div>
    </section>
    
  )
}

export default ProfileShow