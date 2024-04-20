import React, { useState } from "react";
import "./Navbar.css";

import logo2 from "../../Assets/icons/logo2.png";
import cart from "../../Assets/icons/cart.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo2} alt="" />
        <p>ShopER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop {menu === "shop" ? <hr /> : <></>}</Link>
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/mens">Men {menu === "men" ? <hr /> : <></>}</Link>
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/womens">Women {menu === "women" ? <hr /> : <></>}</Link>
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids {menu === "kids" ? <hr /> : <></>}</Link>
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button className="login">Login</button>
        </Link>

        <Link to="/cart">
          <img src={cart} alt="" />
        </Link>

        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
