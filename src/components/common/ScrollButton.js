import React from 'react'
import { FaArrowCircleDown } from 'react-icons/fa'

function ScrollButton() {
  const [visible, setVisible] = React.useState(true)

  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop 
    if (scrolled > 0){ 
      setVisible(false) 
    } else if (scrolled <= 0){ 
      setVisible(true) 
    } 
  }
    
  const scrollToBottom = () =>{ 
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', toggleVisible)


  return (
    <button className="homepage-scroll-button">
      <FaArrowCircleDown onClick={scrollToBottom} />
    </button>
  )
}

export default ScrollButton