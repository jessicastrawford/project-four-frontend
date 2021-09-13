import React from 'react'
import DesignIndexCard from './DesignIndexCard'
// import { Select } from '@chakra-ui/react'

import { InputGroup, InputLeftElement, Stack, Search2Icon }  from '@chakra-ui/react'
import { getAllDesigns } from '../../lib/api'
import { ChakraProvider } from '@chakra-ui/react'

function DesignIndex() {

  const [designs, setDesigns] = React.useState('')
  const [searchValue, setSearchValue] = React.useState('')
  const [selectProductInput, setSelectProductInput] = React.useState('all')
  const [selectColourInput, setSelectColourInput] = React.useState('all')
  const [selectSizeInput, setSelectSizeInput] = React.useState('all')
  const [selectSeasonInput, setSelectSeasonInput] = React.useState('all')
  
  React.useEffect(()=> {
    const getData = async () => {
      try {
        const res = await getAllDesigns()
        setDesigns(res.data)
        console.log(res.data)
      } catch (err) {
        console.log(err)
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
    setSelectSizeInput(Number(e.target.value)) 
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
    // <ChakraProvider>
    <section className="design-index-page">
      <div>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement 
              pointerEvents="none"
              props={<Search2Icon color="grey.300" />}
            />
            <input className="input" placeholder="Search" onChange={handleSearch}/>
          </InputGroup>
        </Stack>
      </div>
      <div className="product-filter">
        <select onChange={handleProductFilter}>
          <option value="all" size="md" variant="outline">All</option>
          <option value="top" size="md" variant="outline">Tops</option>
          <option value="dress" size="md" variant="outline">Dresses</option>
          <option value="skirt" size="md" variant="outline">Skirts</option>
          <option value="trouser" size="md" variant="outline">Trousers</option>
          <option value="jacket" size="md" variant="outline">Jackets</option>
        </select>
      </div>
      <div className="colour-filter">
        <select onChange={handleColourFilter}>
          <option value="all" size="md" variant="outline">All</option>
          <option value="black" size="md" variant="outline">Black</option>
          <option value="white" size="md" variant="outline">White</option>
          <option value="red" size="md" variant="outline">Red</option>
          <option value="blue" size="md" variant="outline">Blue</option>
          <option value="yellow" size="md" variant="outline">Yellow</option>
          <option value="orange" size="md" variant="outline">Orange</option>
          <option value="pink" size="md" variant="outline">Pink</option>
          <option value="purple" size="md" variant="outline">Purple</option>
          <option value="green" size="md" variant="outline">Green</option>
          <option value="brown" size="md" variant="outline">Brown</option>
        </select>
      </div>
      <div className="size-filter">
        <select onChange={handleSizeFilter}>
          <option value="all" size="md" variant="outline">All</option>
          <option value="6" size="md" variant="outline">6</option>
          <option value="8" size="md" variant="outline">8</option>
          <option value="10" size="md" variant="outline">10</option>
          <option value="12" size="md" variant="outline">12</option>
          <option value="14" size="md" variant="outline">14</option>
          <option value="16" size="md" variant="outline">16</option>
          <option value="18" size="md" variant="outline">18</option>
          <option value="20" size="md" variant="outline">20</option>
        </select>
      </div>
      <div className="season-filter">
        <select onChange={handleSeasonFilter}>
          <option value="all" size="md" variant="outline">All</option>
          <option value="Autumn Winter 2020" size="md" variant="outline">Autumn Winter 2020</option>
          <option value="Spring Summer 2020" size="md" variant="outline">Spring Summer 2020</option>
          <option value="Autumn Winter 2021" size="md" variant="outline">Autumn Winter 2021</option>
          <option value="Spring Summer 2021" size="md" variant="outline">Spring Summer 2021</option>
        </select>
      </div>
      <div className="design-index-full">
        {
          designs && handleChange().map(design => (
            <DesignIndexCard key={design._id} design={design}/>
          ))
        }
      </div>
    </section>
    // </ChakraProvider>
   
  )
}

{/* <div>
{designs.map(design) => (
  design.name
)}
</div> */}


export default DesignIndex

{/* <label className="label">Pick a product type </label>
<div className="select">
  <select name="category" onChange={handleCategoryFilter}>
    <option value="all">All</option>
    <option value="dress">Dress</option>
    <option value="top">Playsuit</option>
    <option value="jumper">Jumper</option>
    <option value="trouser">Trouser</option>
  </select>
</div>
// </div> */}

// const handleCategoryFilter = (e) => {
//   setSelectInput(e.target.value)
// }

// const handleChange = () => {
//   return designs.filter(design => {
//     return selectInput === 'all' || design.product === selectInput
//   })
// }


{/* <section className="design-index-page">
  <div>
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftElement 
          pointerEvents="none"
          children={<Search2Icon color="grey.300" />}
        />
        <input className="input" placeholder="Search" onChange={handleSearch}/>
      </InputGroup>
    </Stack>
  </div>
  <div className="design-index-full">
    {
      designs && handleChange().map(design => (
        <DesignIndexCard key={design._id} design={design}/>
      ))
    }
  </div>
</section>  */}