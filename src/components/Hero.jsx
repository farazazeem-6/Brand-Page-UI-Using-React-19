import React from "react";


function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Show Now</button>
          <button className="category">Category</button>
        </div>
        <p className="ptag">Also Available On</p>
        <div className="hero-icon">
          <img src="../public/flipkart.png" alt="" />
          <img src="../public/amazon.png" alt="" />
        </div>
      </div>
      <div className="hero-img">
        <img src="../public/shoe_image.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
