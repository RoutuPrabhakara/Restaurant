import React from 'react'
import './Creative.css'

function Creativemenu() {
  return (
    <div>
        <div className="container-fluid  flex-wrap">
            <div className="row ">
                <div className="col-md-6 bg-dark rounded mb-5">
                    <div className="cards d-flex gap-20 p-1">
                        <img src="https://img.freepik.com/premium-vector/chopsticks-line-icon-isolated-white-background_268104-8521.jpg?w=740" alt="logo" className='text-white bg-dark' />
                        <div className="right">
                            <h3 className='text-white text-uppercase pt-4'>Authentic Taste</h3>
                            <p className='text-white fs-5'>Our dishes adhere to the Japanese virtue of serving natural and healthy meals. Fresh and high-quality ingredients.</p>
                        </div>
                    </div>

                    <div className="cards d-flex p-1">
                        <img src="https://img.freepik.com/premium-vector/chopsticks-line-icon-isolated-white-background_268104-8521.jpg?w=740" alt="logo" className='text-white bg-dark' />
                        <div className="right">
                            <h3 className='text-white text-uppercase pt-4'>Premium Ingredients</h3>
                            <p className='text-white'>We use only fresh and high-quality ingredients for an authentic dining experience.</p>
                        </div>
                    </div>

                    <div className="cards d-flex p-1">
                        <img src="https://img.freepik.com/premium-vector/chopsticks-line-icon-isolated-white-background_268104-8521.jpg?w=740" alt="logo" className='text-white bg-dark' />
                        <div className="right">
                            <h3 className='text-white text-uppercase pt-4'>Creative Menu</h3>
                            <p className='text-white'>From sushi to broths and even desserts, all of our dishes are free of artificial sweeteners, spices, preservatives, and colorants.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-6 rights">
                  <div className="w-100 h-100">
                  <img src="https://img.freepik.com/free-photo/glass-creamy-dessert-with-cookie-pieces_140725-8533.jpg?t=st=1739168505~exp=1739172105~hmac=0314431da6e3f8d131e62e2aab96d9a2445e2ad811c55c4ace34abb44df6f4c5&w=360" 
                   alt="Dessert"  
                   className='w-50 h-25 imagesdata'/>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Creativemenu
