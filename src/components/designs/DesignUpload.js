import React from 'react'
import ImageUploadField from '../auth/ImageUpload'
import { createADesign } from '../../lib/api'
import { useHistory } from 'react-router'


import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

function DesignUpload() {

  const history = useHistory()

  const [clicked, setClicked] = React.useState(false)
  const [error, setError] = React.useState(false)

  const [formData, setFormData] = React.useState({
    name: '',
    product: '',
    fabric: '',
    description: '',
    colour: '',
    size: '',
    print: false,
    image: '',
    designDrawing: '',
    season: '',
    centerBackLength: null,
    centerFrontLength: null,
    sleeveLength: null,
    hemLength: null,
    chest: null,
    waist: null,
    insideLegLength: null,
    outsideLegLength: null,
    addedBy: '',
  })

  console.log('formdata', formData)

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setFormData({ ...formData, [e.target.name]: value })
  }

  const handleClick = (e) => {
    console.log('clicked')
    e.preventDefault()
    setClicked(true)
  }

  const handleImageUpload = (imageUrl, name) => {
    setFormData({ ...formData, [name]: imageUrl })
  }

  const handleCancel = () => {
    history.push('/profile')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await createADesign(formData)
      console.log(res)
      history.push('/profile')
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  return (
    <section>
      <form className="form-upload">
        <h1>Upload your design</h1>
        <div className="name-field">
          <label className="label">Name of design*</label>
          <input 
            className="name-input"
            name="name"
            value={formData.name}
            // placeholder="Name"
            onChange={handleChange}
          />
        </div>
        <div className="description-field">
          <label className="label">Design description*</label>
          <textarea
            className="description-textarea"
            name="description"
            value={formData.description}
            // placeholder="Description"
            onChange={handleChange}
          />
        </div>
        <div className="fabric-field">
          <label className="label">Fabric*</label>
          <input 
            className="fabric-input"
            name="fabric"
            value={formData.fabric}
            // placeholder="Fabric"
            onChange={handleChange}
          />
        </div>
        <FormControl >
          <div className="season-dropdown">
            <label className="label">Select a season*</label>
            <Select
              name="season"
              onChange={handleChange}
              value={formData.season}
              className="season-input"
              disableUnderline
            >
              <MenuItem value="" disable></MenuItem>
              <MenuItem value="Autumn Winter 2020">Autumn Winter 2020</MenuItem>
              <MenuItem value="Spring Summer 2020">Spring Summer 2020</MenuItem>
              <MenuItem value="Autumn Winter 2021">Autumn Winter 2021</MenuItem>
              <MenuItem value="Spring Summer 2021">Spring Summer 2021</MenuItem>
            </Select>
          </div>
        </FormControl>
        <FormControl>
          <div className="product-dropdown">
            <label className="label">Select a product*</label>
            <Select
              name="product"
              onChange={handleChange}
              value={formData.product}
              className="product-input"
              disableUnderline
            >
              <MenuItem value="" disable></MenuItem>
              <MenuItem value="top">Tops</MenuItem>
              <MenuItem value="dress">Dresses</MenuItem>
              <MenuItem value="skirt">Skirts</MenuItem>
              <MenuItem value="trouser">Trousers</MenuItem>
              <MenuItem value="jacket">Jackets</MenuItem>
            </Select>
          </div>
        </FormControl>
        <FormControl>
          <div className="colour-dropdown">
            <label className="label">Select a colour*</label>
            <Select
              name="colour"
              onChange={handleChange}
              value={formData.colour}
              className="colour-input"
              disableUnderline
            >
              <MenuItem value="" disable></MenuItem>
              <MenuItem value="white">White</MenuItem>
              <MenuItem value="black">Black</MenuItem>
              <MenuItem value="red">Red</MenuItem>
              <MenuItem value="blue">Blue</MenuItem>
              <MenuItem value="yellow">Yellow</MenuItem>
              <MenuItem value="orange">Orange</MenuItem>
              <MenuItem value="pink">Pink</MenuItem>
              <MenuItem value="purple">Purple</MenuItem>
              <MenuItem value="green">Green</MenuItem>
              <MenuItem value="brown">Brown</MenuItem>
            </Select>
          </div>
        </FormControl>
        <FormControl>
          <div className="size-dropdown">
            <label className="label">Select a size*</label>
            <Select
              name="size"
              onChange={handleChange}
              value={Number(formData.size)}
              className="size-input"
              disableUnderline
            >
              <MenuItem value="" disable></MenuItem>
              <MenuItem value="6">6</MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="10">10</MenuItem>
              <MenuItem value="12">12</MenuItem>
              <MenuItem value="14">14</MenuItem>
              <MenuItem value="16">16</MenuItem>
              <MenuItem value="18">18</MenuItem>
              <MenuItem value="20">20</MenuItem>
            </Select>
          </div>
        </FormControl>
        <div className="print-checkbox">
          <label className="label">
            Print?*
            <input 
              type="checkbox"
              name="print"
              onChange={handleChange}
              checked={formData.print}
            />
          </label>
        </div>
        <div className="image-upload-field">
          <ImageUploadField 
            onChange={handleImageUpload}
            labelText="Upload design image*"
            name="image"
            value={formData.image}
          />
        </div>
        <div className="drawing-upload-field">
          <ImageUploadField 
            onChange={handleImageUpload}
            labelText="Upload design drawing (field not required)"
            name="designDrawing"
            value={formData.designDrawing}
          />
        </div>
        <div className="measurements-section">
          {!clicked ? <button onClick={handleClick} className="show-measurement-button">
            Would you like to add measurements?
          </button> : 
            <>
              <div className="cb-length">
                <label className="label">Center back length (cm)</label>
                <input 
                  placeholder="Measurement (cm)"
                  name="centerBackLength"
                  value={Number(formData.centerBackLength)}
                  onChange={handleChange}
                  className="measurement-field"
                />
              </div>
              <div className="cf-length"> 
                <label className="label">Center front length (cm)</label>
                <input 
                  placeholder="Measurement (cm)"
                  name="centerFrontLength"
                  value={Number(formData.centerFrontLength)}
                  onChange={handleChange}
                  className="measurement-field"
                />
              </div>
              <div className="sleeve-length">
                <label className="label">Sleeve length (cm)</label>
                <input 
                  placeholder="Measurement (cm)"
                  name="sleeveLength"
                  value={Number(formData.sleeveLength)}
                  onChange={handleChange}
                  className="measurement-field"
                />
              </div>
              <div className="hem-length">
                <label className="label">Hem length (cm)</label>
                <input 
                  placeholder="Measurement (cm)"
                  name="hemLength"
                  value={Number(formData.hemLength)}
                  onChange={handleChange}
                  className="measurement-field"
                />
              </div>
              <div className="chest">
                <label className="label">Chest (cm)</label>
                <input 
                  placeholder="Measurement (cm)"
                  name="chest"
                  value={Number(formData.chest)}
                  onChange={handleChange}
                  className="measurement-field"
                />
              </div>
              <div className="waist">
                <label className="label">Waist (cm)</label>
                <input 
                  placeholder="Measurement (cm)"
                  name="waist"
                  value={Number(formData.waist)}
                  onChange={handleChange}
                  className="measurement-field"
                />
              </div>
              <div className="il-length">
                <label className="label">Inside leg length (cm)</label>
                <input 
                  placeholder="Measurement (cm)"
                  name="insideLegLength"
                  value={Number(formData.insideLegLength)}
                  onChange={handleChange}
                  className="measurement-field"
                />
              </div>
              <div className="ol-length">
                <label className="label">Outside leg length (cm)</label>
                <input 
                  placeholder="Measurement (cm)"
                  name="outsideLegLength"
                  value={Number(formData.outsideLegLength)}
                  onChange={handleChange}
                  className="measurement-field"
                />
              </div>
            </>
          }
        </div>
        <div className="buttons">
          <button onClick={handleCancel} className="cancel-button">Cancel</button>
          <button onClick={handleSubmit} className="save-button">Save</button>
        </div>
      </form>  
    </section>

  )
}

export default DesignUpload