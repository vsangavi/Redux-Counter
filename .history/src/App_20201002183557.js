import React from "react";
import Counter from "./Counter";
import "./App.css";
import { createStore } from "redux";
function App() {
  const store = createStore();
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
