import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    const increment = () => {};
    return (
      <div>
        <h1>Counter</h1>
        <div>
          <button onClick={}>+</button>
          <button onClick={}>+</button>
        </div>
      </div>
    );
  }
}
export default Counter;
