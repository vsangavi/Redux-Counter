import React from "react";
import Counter from "./Counter";
import "./App.css";
import { createStore } from "redux";
function reducer(state,action){
  console.log()
}
const store = createStore();
function App() {
 
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
