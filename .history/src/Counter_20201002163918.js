import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    const Increment = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
     const Decrement = () => {
       this.setState({
         count: this.state.count - 1,
       });
     };
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
