import React, { Component } from "react";
import { connect } from "react-redux";
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
      this.props.dispatch({ type: "INCREMENT" });
    };
    const Decrement = () => {
      //   this.setState({
      //     count: this.state.count - 1,
      //   });
      this.props.dispatch({ type: "DECREMENT" });
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
let mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
export default connect(mapStateToProps)(Counter);
