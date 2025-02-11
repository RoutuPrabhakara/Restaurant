import React from 'react'
import Header from './Components/Headers/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Menu from './Components/Menu/Menu'
import Reservation from './Components/Reservation/Reservation'
import Feedback from './Components/FeedBack/Feedback'
import Cart from './Components/Cart/Cart'
import Nodatafound from './Components/NoDataGFound/Nodatafound'
import RestaurantFoodMenuCard from './Components/ReataurantMenucard/RestaurantFoodMenuCard'
import ProductsDetails from './Components/ProdcutsDetails/ProductsDetails'


function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/Reservation' element={<Reservation/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Feedback' element={<Feedback/>}/>
        <Route path='/*' element={<Nodatafound/>}/>
        <Route path='/FoodMenuCard/:id' element={<ProductsDetails/>}/>



      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App