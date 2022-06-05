import { DECREASE, INCREASE, REMOVE, CLEAR_CART } from "./actions";

function reducer(state, action) {
  if (action.type === DECREASE) {
    console.log("You have decreased the amount");
  }

  if (action.type === INCREASE) {
    console.log("You have increased the amount");
    const tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
        return cartItem;
      }
      return cartItem;
    });
    console.log(tempCart);
    return { ...state, cart: tempCart };
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => {
        return cartItem.id !== action.payload.id;
      }),
    };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  return state;
}

export default reducer;

//   ================Switch Statement===============
//   switch (action.type) {
//     case CLEAR_CART:
//       return { ...state, cart: [] };
//     default:
//       return state;
//   }
//   ===============================================
