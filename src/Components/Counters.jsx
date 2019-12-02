import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 1 },
      { id: 4, value: 0 }
    ]
  };

  resetCounters = () => {
    const countersObj = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: countersObj });
  };
  incrementCounter = counter => {
      const countersAll=[...this.state.counters];
      const index=countersAll.indexOf(counter);
      countersAll[index].value++;
      this.setState(countersAll);     
      
  };
  handleDelete = counterid => {
    const counterFiltered = this.state.counters.filter(
      counter => counter.id !== counterid
    );
    this.setState({ counters: counterFiltered });
  };
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.resetCounters}
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
                onIncrement={this.incrementCounter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
