import React from "react";
import "./ProductDisplay.css";
import fiveStarRating from "../../Assets/styles/fiveStarRating.png";
const ProductDisplay = (props) => {
  const { image, name, old_price, new_price } = props;
  return (
    <div className="productdisplay">
      <div className="pd-left">
        <div className="pd-img-list">
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
        </div>
        <div className="pd-img">
          <img className="pd-main-img" src={image} alt="" />
        </div>
      </div>
      <div className="pd-right">
        <h1>{name}</h1>
        <div className="pd-right-star">
          <img src={fiveStarRating} alt="" />
          {/* <img src={starIcon} alt="" /> */}
          {/* <img src={starIcon} alt="" /> */}
          {/* <img src={starIcon} alt="" /> */}
          {/* <img src={starIcon} alt="" /> */}
          <p>{122}</p>
        </div>
        <div className="pd-right-prices">
          <div className="pd-right-price-old">${old_price}</div>
          <div className="pd-right-price-new">${new_price}</div>
        </div>
        <div className="pd-right-discription">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as a undershirt or outer
          garment.
        </div>
        <div className="pd-right-size">
          <h1>Select Size</h1>
          <div className="pd-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className="pd-right-category">
          <span>Category :</span>Women, T-Shirt, Crop Top
        </p>
        <p className="pd-right-category">
          <span>Tags :</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
