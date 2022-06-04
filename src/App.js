import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { legacy_createStore as createStore } from "redux";
import { DECREASE, INCREASE } from "./actions";
import reducer from "./reducer";

//initial store
const initialStore = {
  count: 0,
  name: "praveen",
};

const store = createStore(reducer, initialStore);

//getState - gets the current state
store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });

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
