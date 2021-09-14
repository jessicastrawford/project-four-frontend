import React from 'react'
import { profileView } from '../../lib/api'
import { getUserId, isOwner } from '../../lib/auth'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { deleteADesign } from '../../lib/api'

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

  // console.log('hello',profile.savedDesigns)
  // console.log('hi', profile.addedDesigns)

  const handleDeleteDesign = async (e) => {
    try {
      console.log('clicked for delete', e.target.value)
      await deleteADesign(e.target.value)
      const res = await profileView(getUserId())
      setProfile(res.data)
      
    } catch (err) {
      console.log(err)
    }
  }


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
            <button onClick={handleDeleteDesign} value={addedDesign.id}>Delete design</button>
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