import React from "react";
import "./Slide.css";

function Slide() {
  return (
    <div className="banner">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {[...Array(9)].map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Carousel Inner */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://as1.ftcdn.net/v2/jpg/02/52/38/80/1000_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg" className="d-block w-100" alt="Fresh and Tasty Food" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fresh & Tasty</h5>
              <p>Experience the best food made with fresh ingredients.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640777.jpg&fm=jpg" className="d-block w-100" alt="Healthy Salad" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Healthy Choices</h5>
              <p>Enjoy our fresh and healthy salad options.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=" className="d-block w-100" alt="Spicy Dishes" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Spicy & Delicious</h5>
              <p>Try our hot and spicy dishes for an unforgettable taste.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://italianfoodforever.com/wp-content/uploads/2019/07/bursttomatopasta1-735x495.jpg" className="d-block w-100" alt="Pasta & Meatballs" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Italian Pasta</h5>
              <p>Authentic Italian pasta with rich flavors and spices.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://insanelygoodrecipes.com/wp-content/uploads/2021/02/Sweet-Homemade-Chocolate-Layered-Dessert-480x270.jpg" className="d-block w-100" alt="Delicious Desserts" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Sweet Desserts</h5>
              <p>End your meal with our delightful and sweet desserts.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTMkvfRvhY77J3n09zPvEglTCKy53_yFg8lw&s" className="d-block w-100" alt="Juicy Burgers" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Juicy Burgers</h5>
              <p>Enjoy our mouth-watering burgers with premium ingredients.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Sushi_platter.jpg" className="d-block w-100" alt="Fresh Sushi" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fresh Sushi</h5>
              <p>Delicate sushi rolls made with the freshest seafood.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://www.fifteenspatulas.com/wp-content/uploads/2015/07/Refreshing-Summer-Drinks-Fifteen-Spatulas-1.jpg" className="d-block w-100" alt="Refreshing Drinks" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Refreshing Drinks</h5>
              <p>Cool down with our freshly made juices and mocktails.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://www.soil2soulexpeditions.com/files/blog/main_image/53/Food.jpg" className="d-block w-100" alt="Traditional Cuisine" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Traditional Flavors</h5>
              <p>Explore the richness of traditional and cultural dishes.</p>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slide;
