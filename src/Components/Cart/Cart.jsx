import React, { useEffect, useState } from 'react'
import './Cart.css'
import menu from '../../Pages/menuData'
import './Cart.css'
function Cart() {
  const [allCartData,setAllCartData]=useState([])

  useEffect(()=>{
    setAllCartData(JSON.parse(localStorage.getItem('cartData')) || [])
  })

  const deleteCartItem =(currentIndex)=>{
    setAllCartData(allCartData.splice(currentIndex, 1))
    localStorage.setItem('cartData',JSON.stringify(allCartData))
  }
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {
            allCartData.length === 0?(
              <div className="card m-5">
                <div className="col-md-6 m-auto">
                  <img src="https://assets-v2.lottiefiles.com/a/0e30b444-117c-11ee-9b0d-0fd3804d46cd/BkQxD7wtnZ.gif" alt="logo" className='w-100' />
                  <h3 className="fs-5 p-1 text-uppercase">No data found</h3>
                  <a href="/" className='btn btn-success w-50'>Shop now</a>
                </div>
              </div>
            ):(
             <div className="div">
               <div className="d-flex align-items-center justify-content-between mt-3">
                <h3>All Cart Data</h3>
                <a href="/Menu" className='btn btn-dark'>Shop More</a>
              </div>
              <hr />
              <table>
                <tr>
                  <th>SI No</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Actions</th>
                  </tr>
              {
                allCartData.map((item,index)=>(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td><img src={item.image} alt={item.name} /></td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>
                                       
                       <div className="d-flex gap-3">
                        <a href={`/FoodMenuCard/${item.id}`} className="btn btn-success btn-sm"><i className='bi bi-pen'></i></a>

                        <button className="btn btn-danger btn-sm" onClick={()=>deleteCartItem(index)}><i className='bi bi-trash'></i></button>
                        </div>
                        </td>
                  </tr>

                ))
              }
              </table>
             </div>

           
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Cart