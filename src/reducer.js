import { DECREASE, INCREASE, CLEAR_CART } from "./actions";

function reducer(state, action) {
  if (action.type === DECREASE) {
    return { ...state, count: state.count - 1 };
  }

  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  return state;

  //   ================Switch Statement===============
  //   switch (action.type) {
  //     case CLEAR_CART:
  //       return { ...state, cart: [] };
  //     default:
  //       return state;
  //   }
  //   ===============================================
}

export default reducer;
