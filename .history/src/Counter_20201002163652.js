import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>
          <button onClick={incremen}>+</button>
        </div>
      </div>
    );
  }
}
export default Counter;
