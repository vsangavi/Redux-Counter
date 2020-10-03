import React, { Component } from "react";
import Counter from "./Counter";
import "./App.css";
import { createStore } from "redux";

const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  console.log("reducer", state, action);
 
}
const store = createStore(reducer);
store.dispatch({ type: "COUNT/INCREMENT" });
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
