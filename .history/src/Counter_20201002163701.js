import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>
          <button onClick={increment}>+</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
    );
  }
}
export default Counter;
