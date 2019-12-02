import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {

  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.handleDelete}
            counter={counter}
            onIncrement={this.props.onIncrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
