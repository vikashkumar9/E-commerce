const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    // console.log(
    //   "🚀 ~ file: cartReducer.js ~ line 4 ~ cartReducer ~ product",
    //   product
    // );
    let cartProduct;
    let existingProduct = state.cart.find(
      (curItem) => curItem.id === id + color
    );

    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.amount + amount;

          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image,
        price: product.price,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }
  if (action.type === "get_Total_Items") {
    let filterItems = state.cart.reduce((initial, curElem) => {
      let { amount } = curElem;
      initial = initial + amount;
      return initial;
    }, 0);
    return {
      ...state,
      total_item: filterItems,
    };
  }
  if (action.type === "total_amount") {
    let filterAmount = state.cart.reduce((initial, curElem) => {
      let { price, amount } = curElem;
      initial = initial + price * amount;
      return initial;
    }, 0);
    return {
      ...state,
      total_amount: filterAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "clear") {
    return {
      ...state,

      cart: [],
    };
  }
  return state;
};

export default cartReducer;
