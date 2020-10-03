import React from "react";
import Counter from "./Counter";
import "./App.css";
import { createStore } from "redux";
function reducer(state, action) {
  console.log("reducer", state, action);
  return state;
}
const store = createStore(reducer);
function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
