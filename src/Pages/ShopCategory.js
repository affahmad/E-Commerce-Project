import React, { useContext } from "react";
import "./ShopCategory.css";
import  ShopContext  from "../Context/ShopContext";
import Item from "../components/items/Item";
import dropDown from "../Assets/styles/dropDown.png";
const ShopCategory = (props) => {
  const {allProducts} =useContext(ShopContext)
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src="" alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropDown} alt="" />
        </div>
      </div>
      <div className="shopcategory-producs">
        {allProducts.map((item, i) => {
          if (props.category === item.category) {
            return <Item {...item} key={i} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
