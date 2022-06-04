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
};

//reducer function
function reducer(state, action) {
  console.log({ state, action });
  return state;
}

const store = createStore(reducer, initialStore);

//getState - gets the current state
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
