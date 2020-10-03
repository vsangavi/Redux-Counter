import React from "react";
import Counter from "./Counter";
import "./App.css";
import { createStore } from "redux";
function reducer(state, action) {
  console.log("reducer", state, action);
  return state;
}
const store = createStore(reducer);
class App extends Comment {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
