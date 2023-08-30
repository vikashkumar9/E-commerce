import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-image">
        <img src="download.jpg" height="80px" width="80px" alt="image" />
      </div>

      <ul className="header-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/product">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <img src="cart.png" alt="cart" height="20px" width="30px" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
