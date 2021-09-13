import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleDesign, createAComment, getSingleUser, saveUnsaveDesign } from '../../lib/api'
import axios from 'axios'
import { isAuthenticated } from '../../lib/auth'
import ReactStars from 'react-star-rating-component'
import MeasurementTable from './MeasurementTable'

// import { TextArea } from '@chakra-ui/react'
import Moment from 'react-moment'
import 'moment-timezone'


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

  
  isAuthenticated()

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSingleDesign(designId)
        console.log('hello')
        setDesign(res.data)
        console.log(design)
        setProduct(res.data.product)
      } catch (err){
        console.log(err)
      }
    }
    getData()
  }, [designId])

  console.log(product)



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

  const handleSubmit = async (e, nextValue) => {
    e.preventDefault()
    setRating({ nextValue })
    await createAComment(designId, formData) 
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

  // const filteredDesigns = designs.filter(design => (
  //   design.product === design.product
  // ))
  // console.log(filteredDesigns)


  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleUser()
        setUser(data)
      } catch (err) {
        console.log(err)
      }
    } 
    getData()
  }, [])

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
      setIsSaved(true)
    } catch (err) {
      console.log(err)
    }
  }



  return (
    <section>
      <h1>I am the Design Show Page</h1>
      <div>
        {!isClicked && !isSaved ? <button onClick={handleSave}>Save</button> :
          <button onClick={handleSave}>Saved</button>}
      </div>    
      <p>{design.name}</p>
      <p>{design.description}</p>
      <p>{design.fabric}</p>
      <p>{design.colour}</p>
      <p>{design.print}</p>
      <p>{design.size}</p>
      <p>{design && design.addedBy.username}</p>
      <img src={design.image} alt={design.name} />
      <img src={design.designDrawing}/>
      <p>Comments...</p>
      <div>{design && design.comments.map(comment => (
        <div key={design.id}>
          <p>&quot;{comment.text}&quot;</p>
          <p>Added by {comment.owner.username}, <Moment fromNow >{comment.createdAt}</Moment></p>
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
          <img src={comment.owner.profileImage}/>
        </div>
      ))}</div>
      <form>
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
        {isAuthenticated ?  <button onClick={handleSubmit}>Submit</button> : <button>Log in to comment</button>}
        {/* <TextArea placeholder="Enter your comment here"/> */}
      </form>
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