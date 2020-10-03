import React, { Component } from "react";

class Counter extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
  render() {
    const Increment = () => {
    //   this.setState({
    //     count: this.state.count + 1,
    //   });
    };
    const Decrement = () => {
    //   this.setState({
    //     count: this.state.count - 1,
    //   });
    };
    return (
      <div>
        <h1>Counter</h1>
        <div className="outerDiv">
          <button onClick={Increment}>+</button>
          <span>{this.props.count}</span>
          <button onClick={Decrement}>-</button>
        </div>
      </div>
    );
  }
}
export default Counter;
