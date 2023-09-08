import React from 'react'

function Hero() {
  return (
    <main>
        <div className='hero-page'>
            <h1 className='hero-text'>
                Bring the power of AI to your 
                conversations
            </h1>
            <h2 className='hero-h2'>Work faster,Smarter, and Better Together</h2>
            <p className='hero-text2'>Experience the power of AI language models with 
                omniGPT,our chat platform seamless communication 
                across multiple channels.
            </p>
            <p className='hero-last'>Try the omniGPT for frr,16-day trial,no credit card required</p>
            <button className='hero-btn'>Start your free trail</button>
        </div>
        
      <div className='hero-second'>
      
      <div className='first'>
          <div className='img-mask'>
              <img className='hero-img' src="./assets/mask-group1@2x.png"></img>
          </div>
          
          <div className='vector3'>
          <img src='./assets/vector3.svg'></img>
          </div>

      </div>

      <div className='second'>
        <div className='vector2'>
          <img src='./assets/vector2.svg'></img>
        </div>

        <div className='img-mask2'>
          <img src='./assets/mask-group3@2x.png'></img>
        </div>
      </div>

        <div className='third'>
          <div className='third-page'>
            <p>@OmniGPT Can you give us an update on the latest project status?</p>
          </div>
        </div>
        
        <div className='fourth'>
          <div className='img-mask3'>
            <img src='./assets/mask-group2@2x.png'></img>
          </div>

          <div className='blob'></div>
        </div>


    

       </div>
    </main>
  )
}

export default Hero