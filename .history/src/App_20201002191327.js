import React, { Component } from "react";
import Counter from "./Counter";
import "./App.css";
import { createStore } from "redux";

const initialState = {
  count: 0,
};

function reducer(state=in, action) {
  console.log("reducer", state, action);
  return state;
}
const store = createStore(reducer);
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
