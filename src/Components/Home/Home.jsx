import React from 'react'
import './Home.css'
import Slide from '../Carousel/Slide'
import About from '../About/About'
import Creativemenu from '../CreativeMenu/Creativemenu'
import RestaurantFoodMenuCard from '../ReataurantMenucard/RestaurantFoodMenuCard'
import ProductsDetails from '../ProdcutsDetails/ProductsDetails'

function Home() {
  return (
    <div>
     <Slide/>
     <About/>
     <Creativemenu/>
     <RestaurantFoodMenuCard/>
     <ProductsDetails/>
    </div>
  )
}

export default Home