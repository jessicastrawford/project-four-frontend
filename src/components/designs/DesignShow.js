import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleDesign, createAComment, getSingleUser, saveUnsaveDesign, profileView } from '../../lib/api'
import axios from 'axios'
import { isAuthenticated, getUserId } from '../../lib/auth'
import ReactStars from 'react-star-rating-component'
import MeasurementTable from './MeasurementTable'

import Moment from 'react-moment'
import 'moment-timezone'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import PublishIcon from '@material-ui/icons/Publish'

function DesignShow() {

  const [design, setDesign] = React.useState('')
  const { designId } = useParams()
  const [formData, setFormData] = React.useState('')
  const [designs, setDesigns] = React.useState('')
  const [rating, setRating] = React.useState(1)
  const [product, setProduct] = React.useState('')
  const [user, setUser] = React.useState(null)
  const [isClicked, setIsClicked] = React.useState(false)
  const [isSaved, setIsSaved] = React.useState(false)
  const [comments, setComments] = React.useState('')

  
  isAuthenticated()

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSingleDesign(designId)
        setDesign(res.data)
        const { data } = await getSingleUser()
        setUser(data)
        setProduct(res.data.product)
        const found = data.savedDesigns.map(savedDesign => {
          return savedDesign.id
        })
        if (found?.includes(Number(designId))) {
          setIsSaved(true)
        }
        if (res.data.comments) {
          setComments(res.data.comments)
        }
        console.log('comments',comments)
      
      } catch (err){
        console.log(err)
      }
    }
    getData()
  }, [designId])


  const handleChange = (e) => {
    try {
      e.preventDefault()
      setFormData({ ...formData, [e.target.name]: e.target.value })
    } catch (err) {
      console.log(err)
    }
  }
  console.log(formData.text)

  React.useEffect(()=> {
    const getData = async () => {
      try {
        const res = await axios.get('/api/designs')
        setDesigns(res.data)
        console.log(res.data)
      } catch (err) {
        console.log(err)
      } 
    }
    getData()
  
  }, [])

  console.log('form', formData)

  const handleSubmit = async (e, nextValue) => {
    e.preventDefault()
    try {
      setRating({ nextValue })
      await createAComment(designId, formData) 
      const designWithAddedComment = await getSingleDesign(designId)
      console.log('resdata', designWithAddedComment.data)
      setDesign(designWithAddedComment.data)
      setFormData({ text: '' })
      // formData.rating = ''
      // formData.text = ''
    } catch (err) {
      console.log(err)
    }
  }

  const handleRating = (nextValue) => {
    setRating({ nextValue })
    console.log(nextValue)
    console.log(rating)
    setFormData({ ...formData, rating: rating.nextValue  })
  }


  console.log(design.product)

  const filteredDesigns = designs && designs.filter(design => {
    
    return design.product === product
  
  })
  console.log(filteredDesigns)

  // React.useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const { data } = await getSingleUser()
  //       setUser(data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   } 
  //   getData()
  // }, [])

  // const handleSave = async (e) => {
  //   e.preventDefault()
  //   console.log('clicked')
  //   setIsClicked(true)
  //   const savedIds = user.savedDesigns.map(save => {
  //     return save.userId
  //   })
  //   await editUser({ savedDesigns: [...savedIds, designId ] })
  // }

  const handleSave = async (e) => {
    e.preventDefault()
    console.log('clicked')
    try {
      await saveUnsaveDesign(designId)
      setIsClicked(true) 
      setIsSaved(!isSaved)
    } catch (err) {
      console.log(err)
    }
  }

  console.log(isSaved)

  const handleUnsave = async (e) => {
    e.preventDefault()
    try {
      setIsSaved(!isSaved)
      await saveUnsaveDesign(designId)
      setIsClicked(false) 
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section className="design-show-page">
      <div className="box-section">
        <div className="image-section">
          <img src={design.image} alt={design.name} />
        </div>
        <div className="information-section">
          <div className="top-row-icons">
            <div className="icons">
              <MoreHorizIcon />
              <PublishIcon className="upload-icon"/>
            </div>
            <div >
              {!isSaved ? <button onClick={handleSave} className="button">Save</button> :
                <button onClick={handleUnsave} className="button">Delete save</button>}
            </div>   
          </div>
          <div className="right-side">
            <div className="inside-paragraph">
              <h1>{design.name}</h1>
              <p className="description">{design.description} </p>
              <div className="design-info">
                <p>Fabric: {design.fabric}</p>
                <p>Colour: {design.colour}</p>
                {/* <p>{design.print}</p> */}
                <p>Size: {design.size}</p>
                <p>Season: {design.season}</p>
              </div>
            </div>
            <div className="added-by">
              <div className="profile">
                <img src={design && design.addedBy.profileImage} className="added-by-image"/>
                <div>
                  <p>Added by: </p> 
                  <p className="name">{design && design.addedBy.username}</p>
                </div>
              </div>
              <button className="follow-button">View Profile</button>
            </div>
          </div>
        </div>
      </div>
      <form>
        <p className="title-adding-comment">Add your comment and rating below</p>
        <div className="text-box">
          <div className="stars">
            <ReactStars
              count={5}
              size={20}
              half={false}
              name="rating"
              value={parseInt(rating.nextValue)}
              onStarHover={handleRating}
              starColor={'red'}
              fullIcon={<i className="fa fa-star"></i>}
              emptyIcon={<i className="far fa-star"></i>}
            />
          </div>
          <textarea
            className="comment-box"
            name="text"
            value={formData.text}
            onChange={handleChange}
            placeholder="Enter your comment here"
          />
          <div className="buttons">
            {isAuthenticated ?  <button onClick={handleSubmit} className="submit">Submit</button> : <button>Log in to comment</button>}
            {/* <TextArea placeholder="Enter your comment here"/> */}
            <button className="cancel">Cancel</button>
          </div>
        </div>
      </form>
      <div className="comment-section">
        {/* <h1 className="comment-header">Comments...</h1> */}
        <div className="comment-boxes">{design && design.comments.map(comment => (
          <div key={design.id} className="individual-comment-box">
            <div className="profile-comment">
              <img src={comment.owner.profileImage} className="profile-image"/>
              <p>Added by {comment.owner.username},<br/> <Moment fromNow >{comment.createdAt}</Moment></p>
            </div>
            <div className="ratings-and-text">
              <ReactStars 
                count={5}
                size={20}
                half={false}
                value={comment.rating}
                emptyIcon={<i className="far fa-star"></i>}s
                fullIcon={<i className="fa fa-star"></i>}
                edit={false}
                starColor={'red'}
              />
              <p>&quot;{comment.text}&quot;</p>
            </div>
          </div>
        ))}</div>
      </div>
      <img src={design.designDrawing}/>
      <div>
        <MeasurementTable design={design}/>
      </div>
      <div className="more-like-this-section">
        <h1>More {design.product}s...</h1>
        {designs && filteredDesigns.slice(0, 4).map(design => (
          <div key={design._id}>
            <img src={design.image} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default DesignShow