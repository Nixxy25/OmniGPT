import React from 'react'

function Footer() {
  return (
    <div>
    <div className='footer-top'>
                <p>Join the OmniGPT community <span> and transform the way you collaborate!</span></p>
                <button>Get Started Now</button>
            </div>

        <div className='footer-below'>
            
            <div className='footer'>
            <p>OmniGPT</p>

            <div >
            <p className='lorem'>Lorem Ipsum</p>
            <p className='lorem'>Lorem Ipsum</p>
            <p className='lorem'>Lorem Ipsum</p>
            <p className='lorem'>Lorem Ipsum</p>
            <p className='lorem'>Lorem Ipsum</p>
            </div>

            <div>
            <p className='lorem-uni'>LOREM IPSUM DOLAR</p>
            <p className='lorem'>Lorem Ipsum</p>
            <p className='lorem'>Lorem Ipsum</p>
            <p className='lorem'>Lorem Ipsum</p>
            </div>

            <div>
            <p className='lorem'>Join our newsletter</p>
            <input className='footer-email' type='email' name='email' value="Your Email"></input>
            </div>

            </div>
        </div>
        </div>
  )
}

export default  Footer