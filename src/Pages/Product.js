import React, { useContext } from "react";
import  ShopContext  from "../Context/ShopContext.js";
import { useParams } from "react-router";
import Breadcrum from "../components/breadcrum/Breadcrum";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay.js";

const Product = () => {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProducts.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum {...product} />
      <ProductDisplay {...product}/>
    </div>
  );
};

export default Product;
