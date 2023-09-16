import React from "react";

import "./cart.css";
import { useCartContext } from "../context/cart_context";
import { FaTrash } from "react-icons/fa";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";
export const Cart = () => {
  const { cart, removeItem, clearCart, total_amount, shipping_fee } =
    useCartContext(); // Invoke the function to get cart data
  console.log(cart);

  return (
    <div className="cart-container">
      <div className="cart-headiing">
        <p>ITEMS</p>
        <p>PRICE</p>
        <p>QUANTITY</p>
        <p>SUBTOTAL</p>
        <p>REMOVE</p>
      </div>

      <div>
        {cart.map((item) => (
          <div key={item.id} className="cart-data">
            <div className="cart-image-data">
              <div>
                <img
                  src={item.image}
                  height="70px"
                  width="70px"
                  alt="images"
                  className="cart-image"
                />
              </div>
              <div>
                <p className="item-name">{item.name}</p>
                <p className="cart-name-color">
                  <div> color:</div>

                  <div
                    style={{ background: item.color }}
                    className="cart-color"
                  ></div>
                </p>
              </div>
            </div>
            <div>
              {Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 2,
              }).format(item.price / 100)}
            </div>
            <div className="cart-quantity">{item.amount}</div>
            <div>
              {" "}
              {Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 2,
              }).format((item.price * item.amount) / 100)}
            </div>
            <div>
              {" "}
              <FaTrash onClick={() => removeItem(item.id)} />
            </div>
          </div>
        ))}
      </div>
      <div className="two-cart-btn">
        <div>
          <Button>
            <Link to="/products">Continue Shopping...</Link>
          </Button>
        </div>
        <div>
          <button style={{ color: "red" }} onClick={clearCart}>
            CLEAR CART
          </button>
        </div>
      </div>
      <div className="total_Cart_amount">
        <p>
          SubTotal:{" "}
          {Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2,
          }).format(total_amount / 100)}
        </p>
        <p>
          Shipping:{" "}
          {Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2,
          }).format(shipping_fee / 100)}
        </p>
        <hr></hr>
        <p>
          Totall:
          {Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2,
          }).format((total_amount + shipping_fee) / 100)}
        </p>
      </div>
    </div>
  );
};

export default Cart;
