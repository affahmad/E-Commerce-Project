import React from "react";
import "./Hero.css";

import handIcon from "../../Assets/styles/handIcon.png"
import rightArrow from "../../Assets/styles/rightArrow.png"
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={handIcon} alt="" />
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={rightArrow} alt="" />
        </div>
      </div>
      {/* <div className="hero-right"><img src="" alt="" /></div> */}
    </div>
  );
};

export default Hero;
