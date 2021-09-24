import React from 'react'
import { profileView } from '../../lib/api'
import { getUserId } from '../../lib/auth'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { deleteADesign } from '../../lib/api'

import CreateIcon from '@material-ui/icons/Create'
import PublishIcon from '@material-ui/icons/Publish'
import ShareIcon from '@material-ui/icons/Share'
import AddIcon from '@material-ui/icons/Add'

function ProfileShow() {

  const [profile, setProfile] = React.useState('')
  // const [isClicked, setIsClicked] = React.useState(false)

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

  // console.log('hey', profile)

  const history = useHistory()

  const handleClick = () => {
    history.push('/profile-edit')
  }

  const handleUpload = () => {
    history.push('/design-upload')
  }

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
      <div className="user-information">
        <img src={profile.profileImage} alt="profile-image" className="profile-image"/>
        <p className="name">{profile.firstName} {profile.lastName}</p>
        <p className="username">@{profile.username}</p>
        {/* <p>26 followers - 11 following</p> */}
        <button onClick={handleClick} className="edit-button">Edit</button>
      </div>
      <div className="icons">
        <div>
          <CreateIcon />
          <PublishIcon className="publish-icon"/>
        </div>
        <div>
          <ShareIcon className="share-icon"/>
          <AddIcon />
        </div>
      </div>
      <div className="added-designs">
        <div className="add-designs-section">
          <p className="title-added">Your designs</p>
          <button onClick={handleUpload} className="upload-button">Upload a design</button>
        </div>
        <div className="full-page-added">
          {profile && profile.addedDesigns.map(addedDesign => (
            <div className="added-design-grid" key={addedDesign.name}>
              <Link to={`/designs/${addedDesign.id}`}>
                <img src={addedDesign.image} className="added-images"/>
              </Link>
              <button onClick={handleDeleteDesign} value={addedDesign.id}className="delete-button">Delete design</button>
            </div>
          ))}
        </div>
      </div>
      <div className="saved-designs">
        <div className="saved-designs-section">
          <p className="saved-title">Your saved designs</p>
          <div className="full-page-added-saved">
            {profile && profile.savedDesigns.map(savedDesign => (
              <div className="saved-design-grid" key={savedDesign.name}>
                <Link to={`/designs/${savedDesign.id}`}> 
                  <img src={savedDesign.image} className="saved-images"/>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default ProfileShow

// I have a handleFirstClick function which set isClikced to true... this didn't work though as it changed all the buttons to 'are you sure?' as it is inside the map function. Perhaps I could use a popup window for delete confirmation?

// {!isClicked ?  <button onClick={handleFirstClick} value={addedDesign.id}className="delete-button">Delete design</button>
// :
// <button onClick={handleDeleteDesign} value={addedDesign.id} className="delete-confirm-button">Are you sure?</button>
// }   