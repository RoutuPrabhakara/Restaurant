import React, { useEffect, useState } from 'react';
import menu from '../../Pages/menuData';

function RestaurantFoodMenuCard() {
    const [Food, SetFood] = useState([]);

    useEffect(() => {
        SetFood(menu.flatMap(category => category.items));
    }, []);

    return (
        <div className="container">
            <h2 className="text-center text-primary my-4">🍽️ Our Delicious Menu 🍽️</h2>
            <hr />
            <div className="row g-3"> {/* Added Bootstrap spacing */}
                {Food.map((item, index) => (
                    <div key={index} className=" col-sm-6 col-md-4 gap-20">
                        <div className="card h-100  w-100 p-3 text-center shadow-sm rounded border-2">
                            <h4 className="text-primary">{item.name}</h4>
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="img-fluid mx-auto d-block rounded" 
                                style={{ maxHeight: "150px", objectFit: "cover" }} 
                            />
                            <p className="mt-2 text-dark">{item.description}</p>
                            <p className="text-success fw-bold"> Price:${item.price.toFixed(2)}</p>
                            <a href="#" className='btn btn-primary'>Click more</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RestaurantFoodMenuCard;
