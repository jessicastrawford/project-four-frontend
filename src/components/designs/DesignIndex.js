import React from 'react'
import axios from 'axios'
import DesignIndexCard from './DesignIndexCard'

function DesignIndex() {

  const [designs, setDesigns] = React.useState('')
  
  React.useEffect(()=> {
    const getData = async () => {
      try {
        const res = await axios.get('/api/designs')
        setDesigns(res.data)
        console.log(res.data)
        console.log(designs)
      } catch (err) {
        console.log(err)
      } 
    }
    getData()
  
  }, [])
  console.log(designs)

  return (
    <div>
      <h1>Design Index Page</h1>
      <div className="design-index-full">
        {
          designs && designs.map(design => (
            <DesignIndexCard key={design._id} design={design}/>
          ))
        }
      </div>
    </div>
  )
}

{/* <div>
{designs.map(design) => (
  design.name
)}
</div> */}


export default DesignIndex