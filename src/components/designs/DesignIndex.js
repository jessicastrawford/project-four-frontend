import React from 'react'
import DesignIndexCard from './DesignIndexCard'

import { getAllDesigns } from '../../lib/api'
import SearchIcon from '@material-ui/icons/Search'

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Loading from '../common/Loading'

function DesignIndex() {

  const [designs, setDesigns] = React.useState('')
  const [searchValue, setSearchValue] = React.useState('')
  const [selectProductInput, setSelectProductInput] = React.useState('all')
  const [selectColourInput, setSelectColourInput] = React.useState('all')
  const [selectSizeInput, setSelectSizeInput] = React.useState('all')
  const [selectSeasonInput, setSelectSeasonInput] = React.useState('all')
  const [isError, setIsError] = React.useState(false)
  const isLoading = !designs && !isError
  
  React.useEffect(()=> {
    const getData = async () => {
      try {
        const res = await getAllDesigns()
        setDesigns(res.data)
        console.log(res.data)
      } catch (err) {
        console.log(err)
        setIsError(true)
      } 
    }
    getData()
  
  }, [])
  console.log(designs)

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }

  const handleProductFilter = (e) => {
    console.log('clicked', e.target.value)
    setSelectProductInput(e.target.value)
  }

  const handleColourFilter = (e) => {
    console.log('clicked', e.target.value)
    setSelectColourInput(e.target.value)
  }
  const handleSizeFilter = (e) => {
    console.log('clicked', e.target.value)
    setSelectSizeInput(e.target.value === 'all' ? e.target.value : Number(e.target.value)) 
  }
  const handleSeasonFilter = (e) => {
    console.log('clicked', e.target.value)
    setSelectSeasonInput(e.target.value)
  }

  const handleChange = () => {
    return designs.filter(design => {
      return (design.name.toLowerCase().includes(searchValue.toLocaleLowerCase()) && (selectProductInput === 'all' || design.product === selectProductInput) && (selectColourInput === 'all' || design.colour === selectColourInput) && (selectSizeInput === 'all' || design.size === selectSizeInput) && (selectSeasonInput === 'all' || design.season === selectSeasonInput)) 
    })
  }

  return (
    <section className="design-index-page">
      <div className="search-input-box">
        <SearchIcon className="search-icon"/>
        <input className="input" placeholder="Search" onChange={handleSearch}/>
      </div>
      <div className="filters">
        <div className="product-filter-form">
          <FormControl>
            <div className="product-filter">
              <InputLabel>Product</InputLabel>
              <Select onChange={handleProductFilter} className="product" disableUnderline >
                <MenuItem value="all" size="md" variant="outline">All</MenuItem>
                <MenuItem value="top" size="md" variant="outline">Tops</MenuItem>
                <MenuItem value="dress" size="md" variant="outline">Dresses</MenuItem>
                <MenuItem value="skirt" size="md" variant="outline">Skirts</MenuItem>
                <MenuItem value="trouser" size="md" variant="outline">Trousers</MenuItem>
                <MenuItem value="jacket" size="md" variant="outline">Jackets</MenuItem>
              </Select>
            </div>
          </FormControl>
        </div>
        <div className="colour-filter-form">
          <FormControl>
            <div className="colour-filter">
              <InputLabel>Colour</InputLabel>
              <Select onChange={handleColourFilter} className="colour" disableUnderline>
                <MenuItem value="all" size="md" variant="outline">All</MenuItem>
                <MenuItem value="black" size="md" variant="outline">Black</MenuItem>
                <MenuItem value="white" size="md" variant="outline">White</MenuItem>
                <MenuItem value="red" size="md" variant="outline">Red</MenuItem>
                <MenuItem value="blue" size="md" variant="outline">Blue</MenuItem>
                <MenuItem value="yellow" size="md" variant="outline">Yellow</MenuItem>
                <MenuItem value="orange" size="md" variant="outline">Orange</MenuItem>
                <MenuItem value="pink" size="md" variant="outline">Pink</MenuItem>
                <MenuItem value="purple" size="md" variant="outline">Purple</MenuItem>
                <MenuItem value="green" size="md" variant="outline">Green</MenuItem>
                <MenuItem value="brown" size="md" variant="outline">Brown</MenuItem>
              </Select>
            </div>
          </FormControl>
        </div>
        <div className="size-filter-form">
          <FormControl>
            <div className="size-filter">
              <InputLabel>Size</InputLabel>
              <Select onChange={handleSizeFilter} className="size" disableUnderline>
                <MenuItem value="all" size="md" variant="outline">All</MenuItem>
                <MenuItem value="6" size="md" variant="outline">6</MenuItem>
                <MenuItem value="8" size="md" variant="outline">8</MenuItem>
                <MenuItem value="10" size="md" variant="outline">10</MenuItem>
                <MenuItem value="12" size="md" variant="outline">12</MenuItem>
                <MenuItem value="14" size="md" variant="outline">14</MenuItem>
                <MenuItem value="16" size="md" variant="outline">16</MenuItem>
                <MenuItem value="18" size="md" variant="outline">18</MenuItem>
                <MenuItem value="20" size="md" variant="outline">20</MenuItem>
              </Select>
            </div>
          </FormControl>
        </div>
        <div className="season-filter-form">
          <FormControl>
            <div className="season-filter">
              <InputLabel>Season</InputLabel>
              <Select onChange={handleSeasonFilter} className="season" disableUnderline>
                <MenuItem value="all" size="md" variant="outline">All</MenuItem>
                <MenuItem value="Autumn Winter 2020" size="md" variant="outline">Autumn Winter 2020</MenuItem>
                <MenuItem value="Spring Summer 2020" size="md" variant="outline">Spring Summer 2020</MenuItem>
                <MenuItem value="Autumn Winter 2021" size="md" variant="outline">Autumn Winter 2021</MenuItem>
                <MenuItem value="Spring Summer 2021" size="md" variant="outline">Spring Summer 2021</MenuItem>
              </Select>
            </div>
          </FormControl>
        </div>
      </div>
      {isLoading && <Loading />}
      <div className="design-index-full">
        {
          designs && handleChange().map(design => (
            <DesignIndexCard key={design._id} design={design}/>
          ))
        }
      </div>
    </section>
  )
}



export default DesignIndex

