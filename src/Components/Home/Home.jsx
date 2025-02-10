import React from 'react'
import './Home.css'
import Slide from '../Carousel/Slide'
import About from '../About/About'
import Creativemenu from '../CreativeMenu/Creativemenu'
import RestaurantFoodMenuCard from '../ReataurantMenucard/RestaurantFoodMenuCard'

function Home() {
  return (
    <div>
     <Slide/>
     <About/>
     <Creativemenu/>
     <RestaurantFoodMenuCard/>
    </div>
  )
}

export default Home