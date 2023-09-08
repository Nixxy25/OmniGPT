import React from 'react'
import Header from './Components/Header'
import Hero from "./Components/Hero"
import Main  from './Components/Main'
import Carouselpage from './Components/Carouselpage'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {data, responsive} from './data'
import Footer from './Components/Footer'


function App() {

  const carousel = data.map(items =>{
    return(
      <Carouselpage
      key={items.id}
      items={items}
      />
    )
  })
  return (
    <div>
        <Header />
        <Hero />
        <Main/>

        <Carousel responsive={responsive} showDots={true} removeArrowOnDeviceType={["desktop","tablet", "mobile"]}>
          {carousel}
        </Carousel>
        <Footer/>

    </div>
  )
}

export default App