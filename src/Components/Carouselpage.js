import React from 'react'
function Carouselpage(props) {
  return ( 
    <div className='carousel'>
        <div className='card'>
          <p className='card-head'>{props.items.heading}</p>
          <p className='card-text'>{props.items.text}</p>

          <div className='card-bottom'>
          <img alt='card-img' className='card-img' src={`./assets/${props.items.img}`}></img>
          <p className='card-name'>{props.items.name}</p>
          </div>
        </div> 
    </div>
  )
}

export default Carouselpage