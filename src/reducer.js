import { DECREASE, INCREASE, REMOVE, CLEAR_CART } from "./actions";

function reducer(state, action) {
  if (action.type === DECREASE) {
    let tempCart = [];

    if (action.payload.amount === 1) {
      tempCart = state.cart.filter((cartItem) => {
        return cartItem.id !== action.payload.id;
      });
    } else {
      tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });
    }
    return { ...state, cart: tempCart };
  }

  if (action.type === INCREASE) {
    const tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
        return cartItem;
      }
      return cartItem;
    });
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
