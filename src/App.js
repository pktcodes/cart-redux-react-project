import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { legacy_createStore as createStore } from "redux";

//initial store
const initialStore = {
  count: 50,
  name: "praveen",
};

//reducer function
function reducer(state, action) {
  console.log({ state, action });

  if (action.type === "DECREASE") {
    return { ...state, count: state.count - 1 };
  }

  if (action.type === "INCREASE") {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === "RESET") {
    return { ...state, count: 0 };
  }

  if (action.type === "CHANGE_NAME") {
    return { ...state, name: "PK" };
  }
  return state;
}

const store = createStore(reducer, initialStore);

//getState - gets the current state
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "CHANGE_NAME" });
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "RESET" });

console.log(store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
