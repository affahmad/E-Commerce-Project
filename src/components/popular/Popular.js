import React, { useContext } from "react";
import "./Popular.css";
import ShopContext from "../../Context/ShopContext";
import Item from "../items/Item";
const Popular = () => {
  const allProducts = useContext(ShopContext);
  console.log(allProducts);
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {/* {allProducts.map((item, i) => {
          if (item.category === "women") {
            return console.log(item);;
          } else {
            return null;
          }
        })} */}
      </div>
    </div>
  );
};

export default Popular;
