import React from 'react';
import './About.css';

function About() {
  return (
    <div className="container-fluid about-container">
      <div className="row align-items-center bg-light p-5">
        {/* Left Side - Image */}
        <div className="col-md-6 text-center">
          <img
            src="https://demo.7iquid.com/basilico/sushi/wp-content/uploads/2024/10/img2-home1.jpg"
            alt="Restaurant"
            className="img-fluid about-image"
          />
        </div>

        {/* Right Side - Text */}
        <div className="col-md-6 about-text">
          <p className="fs-3 text-dark">About Restaurant</p>
          <h1 className="fw-bold about-title">
            Quintessence of Japanese Cuisine
          </h1>
          <p className="fs-5 text-dark">
  At Sushi Kei, we bring you the authentic flavors of Japan with a touch of Indian warmth.  
  "Kei" means joy and happiness, and we believe that every meal should be a delightful experience.  
  Prepared with the freshest ingredients, our dishes offer a perfect blend of taste and tradition.
</p>
<p className="fs-5 text-dark">
  Our sushi is a balance of flavors—mild tanginess from vinegar, natural sweetness of fresh seafood,  
  and the sharp spiciness of wasabi. Just like Indian cuisine balances spices to create rich flavors,  
  our sushi combines different elements to give you a truly unique experience.  
  Come, enjoy a taste of Japan in a way that feels just right for you!
</p>

          <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
  CLICK TO READ MORE
</a>

        </div>
      </div>
    </div>
  );
}

export default About;
