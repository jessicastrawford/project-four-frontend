import React from 'react'
import ImageUploadField from '../auth/ImageUpload'
import { createADesign } from '../../lib/api'

function DesignUpload() {

  const [clicked, setClicked] = React.useState(false)

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
    // season: '',
    centerBackLength: '',
    centerFrontLength: '',
    sleeveLength: '',
    hemLength: '',
    chest: '',
    waist: '',
    insideLegLength: '',
    outsideLegLength: '',
  })

  const handleClick = (e) => {
    console.log('clicked')
    e.preventDefault()
    setClicked(true)
    
  }

  return (
    <section>
      <form>
        <h1>Upload your design</h1>
        <div className="name-field">
          <label className="label">Name of design</label>
          <input 
            className="name-input"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
          />
        </div>
        <div className="image-upload-field">
          <ImageUploadField 
            onChange={handleImageUpload}
            labelText="Upload design image"
            name="image"
            value={formData.image}
          />
        </div>
        <div className="drawing-upload-field">
          <ImageUploadField 
            onChange={handleImageUpload}
            labelText="Upload design drawing"
            name="designDrawing"
            value={formData.designDrawing}
          />
        </div>
        <div className="description-field">
          <label className="label">Design description</label>
          <textarea
            className="description-textarea"
            name="description"
            value={formData.description}
            placeholder="Description"
            onChange={handleChange}
          />
        </div>
        <div className="fabric-field">
          <label className="label">Fabric</label>
          <input 
            className="fabric-input"
            name="fabric"
            value={formData.fabric}
            placeholder="Fabric"
            onChange={handleChange}
          />
        </div>
        <div className="product-dropdown">
          <label>Select a product</label>
          <select
            name="product"
            onChange={handleChange}
            value={formData.product}
          >
            <option value="" disable></option>
            <option value="top">Tops</option>
            <option value="dress">Dresses</option>
            <option value="skirt">Skirts</option>
            <option value="trouser">Trousers</option>
            <option value="jacket">Jackets</option>
          </select>
        </div>
        <div className="colour-dropdown">
          <label>Select a colour</label>
          <select
            name="colour"
            onChange={handleChange}
            value={formData.colour}
          >
            <option value="" disable></option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
            <option value="pink">Pink</option>
            <option value="purple">Purple</option>
            <option value="green">Green</option>
            <option value="brown">Brown</option>
          </select>
        </div>
        <div className="sie-dropdown">
          <label>Select a size</label>
          <select
            name="size"
            onChange={handleChange}
            value={formData.size}
          >
            <option value="" disable></option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16">16</option>
            <option value="18">18</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className="print-checkbox">
          <label>
            Print?
            <input 
              type="checkbox"
              name="print"
              onChange={handleChange}
              checked={formData.print}
            />
          </label>
        </div>
        <div className="measurements-section">
          {clicked ? <button onClick={handleClick}>
            Would you like to add measurements?
          </button> : 
            <>
              <div>
                <label className="label">Center back length (cm)</label>
                <input 
                  placeholder="Measurement (cm)"
                  name="centerBackLength"
                  value={formData.centerBackLength}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="label">Center front length (cm)</label>
                <input 
                  placeholder="Measurement (cm)"
                  name="centerFrontLength"
                  value={formData.centerFrontLength}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="label">Sleeve length (cm)</label>
                <input 
                  placeholder="Measurement (cm)"
                  name="sleeveLength"
                  value={formData.sleeveLength}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="label">Hem length (cm)</label>
                <input 
                  placeholder="Measurement (cm)"
                  name="hemLength"
                  value={formData.hemLength}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="label">Chest (cm)</label>
                <input 
                  placeholder="Measurement (cm)"
                  name="chest"
                  value={formData.chest}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="label">Waist (cm)</label>
                <input 
                  placeholder="Measurement (cm)"
                  name="waist"
                  value={formData.waist}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="label">Inside leg length (cm)</label>
                <input 
                  placeholder="Measurement (cm)"
                  name="insideLegLength"
                  value={formData.insideLegLength}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="label">Outside leg length (cm)</label>
                <input 
                  placeholder="Measurement (cm)"
                  name="outsideLegLength"
                  value={formData.outsideLegLength}
                  onChange={handleChange}
                />
              </div>
            </>
          }
        </div>
      </form>  
    </section>

  )
}

export default DesignUpload