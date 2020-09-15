import React from 'react'

const Footer = () => {
  return (
    <div className="position-absolute bg-g2" style={{height: 50, bottom: 0, width: '100%'}}>
      <div className="text-center py-3 small" style={{marginBottom: 0}}>Made with 
        <span role="img" aria-label="heart"> &#x1F9E1;</span> by dcbon 
        <span role="img" aria-label="heart"> &copy;</span> 2020
      </div>
    </div>
  )
}

export default Footer
