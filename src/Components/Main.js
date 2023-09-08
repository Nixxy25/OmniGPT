import React from 'react'

function section() {
  return (
    <section>
      
      <div className='main-img'>
      <img className='main-img1' src='./assets/rectangle-13053@2x.png'></img>
      <img className='main-img2' src='./assets/appleiphone14promax2022medium-1@2x.png'></img>
      {/* <div className='main-img3'><img  src='./assets/whatsapp-1@2x.png'></img></div>
      <div className='main-img4'><img  src='./assets/facebook-messenger-logo-2020-1@2x.png'></img></div> */}
      </div>

      <div className='main-page'>
        <h1 className='main-text'>The <span>All-in-One</span> Solution for Conversational AI</h1>

        <div className='main-box'>
            <p>Seamless Collaboration</p>
            <h3>You can easily collaborate with friends and colleagues on projects, 
              whether it's for work or personal use.</h3>
        </div>

        <div className='main-sec'>
        <p className='main-tags'>Multi-Channel Support</p>
        <p className='main-tags'>AI-Powered Assistance</p>
        <p className='main-tags'>Easy to Use</p>
        </div>

        </div>
        </section>
  )
}

export default section