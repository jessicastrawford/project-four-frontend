import React from 'react'
import { useParams } from 'react-router-dom'
import { showUserProfile } from '../../lib/api'
import { Link } from 'react-router-dom'


import CreateIcon from '@material-ui/icons/Create'
import PublishIcon from '@material-ui/icons/Publish'
import ShareIcon from '@material-ui/icons/Share'
import AddIcon from '@material-ui/icons/Add'

function OtherUsersProfileShow() {

  const user = useParams()
  console.log(user)
  const [profile, setProfile] = React.useState('')


  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await showUserProfile(user.userId)
        setProfile(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [user.userId])

  console.log(profile)

  return (
    <section className="profile-show-section">
      <div className="user-information">
        <img src={profile.profileImage} alt="profile-image" className="profile-image"/>
        <p className="name">{profile.firstName} {profile.lastName}</p>
        <p className="username">@{profile.username}</p>
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
          <p className="title-added">{profile.firstName}&apos;s added designs</p>
        </div>
        <div className="full-page-added">
          {profile && profile.addedDesigns.map(addedDesign => (
            <div className="added-design-grid" key={addedDesign.name}>
              <Link to={`/designs/${addedDesign.id}`}>
                <img src={addedDesign.image} className="added-images"/>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="saved-designs">
        <div className="saved-designs-section">
          <p className="saved-title">{profile.firstName}&apos;s saved designs</p>
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

export default OtherUsersProfileShow
