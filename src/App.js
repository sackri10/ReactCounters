import React, { Component } from "react";
import "./App.css";
import Counters from "./Components/Counters";
import Navbar from "./Components/Navbar";
class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 0
      },
      {
        id: 2,
        value: 1
      },
      {
        id: 3,
        value: 1
      },
      {
        id: 4,
        value: 0
      }
    ]
  };

  resetCounters = () => {
    const countersObj = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({
      counters: countersObj
    });
  };
  incrementCounter = counter => {
    const countersAll = [...this.state.counters];
    const index = countersAll.indexOf(counter);
    countersAll[index].value++;
    this.setState(countersAll);
  };
  decrementCounter = counter => {
    const countersAll = [...this.state.counters];
    const index = countersAll.indexOf(counter);
    countersAll[index].value--;
    this.setState(countersAll);
  };
  handleDelete = counterid => {
    const counterFiltered = this.state.counters.filter(
      counter => counter.id !== counterid
    );
    this.setState({
      counters: counterFiltered
    });
  };
  getItemsValue = () => {
    return this.state.counters.filter(counter => counter.value !== 0).length;
  };
  render() {
    return (
      <React.Fragment>
        <Navbar itemsCount={this.getItemsValue()} />
        <div className="container">
          <Counters
            onReset={this.resetCounters}
            onIncrement={this.incrementCounter}
            handleDelete={this.handleDelete}
            onDecrement={this.decrementCounter}
            counters={this.state.counters}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
