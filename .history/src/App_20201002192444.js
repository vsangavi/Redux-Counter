import React, { Component } from "react";
import Counter from "./Counter";
import "./App.css";
import { createStore } from "redux";

const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "COUNT/INCREMENT":
      return { count: state.count + 1 };
    case "COUNT/DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
const store = createStore(reducer);
store.dispatch
class App exte
nds Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
