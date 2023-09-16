import { useState } from "react";

import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import "./AddToCart.css";
import { Button } from "../button/Button";
import { useCartContext } from "../context/cart_context";
export const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  const { id, colors } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < 5 ? setAmount(amount + 1) : setAmount(5);
  };

  return (
    <>
      <div className="colors">
        <p>
          Color:
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>

      {/* add to cart  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <NavLink to="/cart" onClick={() => addToCart(id, color, amount, product)}>
        <Button className="btn">Add To Cart</Button>
      </NavLink>
    </>
  );
};
export default AddToCart;
