import React from "react";
import "./Footer.css";

import logo2 from "../../Assets/icons/logo2.png";
import fb from "../../Assets/icons/fb.png";
import yt from "../../Assets/icons/yt.png";
import insta from "../../Assets/icons/insta.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo2} alt="" />
        <p>ShopER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Office</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={fb} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={insta} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={yt} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
