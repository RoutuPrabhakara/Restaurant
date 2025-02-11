import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import menu from '../../Pages/menuData';
import './Style.css'
function ProductsDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const [cartData,SetCartData]=useState([])
  
    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => {
      if (quantity > 1) setQuantity(quantity - 1);
    };
  
    useEffect(() => {
      setProduct(menu.flatMap(category => category.items).find((item) => item.id === Number(id)));
      SetCartData(JSON.parse(localStorage.getItem('cartData')) || [])
    }, [id]);

    const cartHandler =()=>{
      localStorage.setItem('cartData',JSON.stringify([...cartData,product]))
    }
  
    if (!product) return <div className="text-center mt-5"><h2></h2></div>;
  
    return (
      <div className="container-fluid p-3 p-md-5">
        <div className="row">
          {/* Image Section */}
          <div className="col-md-6 mb-3 ">
            <div className="p-3">
              <img
                src={product.image}
                alt={product.name}
                className="w-100"
                style={{ height: '400px', objectFit: 'contain' ,boxShadow:'0px 0px 10px #ccc',padding:'20px',borderRadius:"20px"}}
              />
            </div>
          </div>
  
          {/* Details Section */}
          <div className="col-md-6 shadow p-5 rounded-4">
            <h1 className="fs-2 fw-bold">{product.name}</h1>
            <div className="rating d-flex gap-2 align-items-center mt-3">
              <small>Rating 4.5</small>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-half text-warning"></i>
            </div>
            <p className="fs-6">{product.description}</p>
            <h1 className="fs-1 text-danger">Price:${product?.price?.toFixed(2) ?? 'N/A'}</h1>
  
            {/* Quantity Selection */}
            <label>Select Quantity</label><br />
            <div className="btn-group mt-2">
              <button className="btn-dark btn" onClick={decrementQuantity}>
                <i className="bi bi-dash"></i>
              </button>
              <button className="border border-1 border-dark btn px-4">{quantity}</button>
              <button className="btn-dark btn" onClick={incrementQuantity}>
                <i className="bi bi-plus-lg"></i>
              </button>
            </div>
  
            {/* Buttons */}
            <div className="d-flex gap-2 mt-3 cardsdata">
              <button className="btn btn-success  text-white w-100 p-3 rounded-1" onClick={ cartHandler}>
                <i className="bi bi-bag"></i> Add to Cart
              </button>
              <button className="btn btn-danger w-100 p-3 rounded-1">
                Buy Now <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProductsDetails