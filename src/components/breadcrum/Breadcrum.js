import React from "react";
import "./Breadcrum.css";
import rightArrow from"../../Assets/styles/rightArrow.png"
const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={rightArrow} alt="" /> SHOP <img src={rightArrow} alt="" />{" "}
      {product.id} <img src={rightArrow} alt="" />
      {product.name}
    </div>
  );
};

export default Breadcrum;
