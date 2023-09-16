import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer";
import { useEffect } from "react";

const CartContext = createContext();

const getlocaldata = () => {
  let localdata = localStorage.getItem("myCart");
  if (localdata === null) {
    return [];
  } else {
    return JSON.parse(localdata);
  }
};

const initialState = {
  //   cart: [],
  cart: getlocaldata(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "clear" });
  };
  useEffect(() => {
    dispatch({ type: "total_amount" });
    dispatch({ type: "get_Total_Items" });
    localStorage.setItem("myCart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
