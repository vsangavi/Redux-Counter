import React, { Component } from "react";
import Counter from "./Counter";
import "./App.css";
import { createStore } from "redux";

const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
 switch(action.type){
   case "COUNT/INCREMENT":
     return state
 }
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
