import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { useCartContext } from "../context/cart_context";
import { useAuth0 } from "@auth0/auth0-react";
export const Header = () => {
  const { total_item } = useCartContext();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className="header">
      <div className="header-image">
        {isAuthenticated ? (
          <img src={user.picture} height="80px" width="80px" alt="images"></img>
        ) : (
          <img src="download.jpg" height="80px" width="80px" alt="images" />
        )}
      </div>

      <ul className="header-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li className="user_Name">
          {isAuthenticated && <h4> {user.name}</h4>}
        </li>
        <li>
          {isAuthenticated ? (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          ) : (
            <button onClick={() => loginWithRedirect()}>Log In</button>
          )}
        </li>
        <li>
          <div className="cart-portion">
            <Link to="/cart">
              <div>
                <img src="cart.png" alt="cart" height="20px" width="30px" />
              </div>
            </Link>
            <div>
              <div className="cart-Items">{total_item}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Header;
