import { DECREASE, INCREASE, REMOVE, CLEAR_CART } from "./actions";

function reducer(state, action) {
  if (action.type === DECREASE) {
    console.log("You have decreased the amount");
  }

  if (action.type === INCREASE) {
    console.log("You have increased the amount");
  }

  if (action.type === REMOVE) {
    console.log("You have removed the item");
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
