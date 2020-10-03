import React from "react";
import Counter from "./Counter";
import "./App.css";
import { createStore } from "redux";
function reducer(state)
const store = createStore();
function App() {
 
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
