import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class Counter extends Component {
  getClassNames() {
    let classes = "col badge  m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    console.log(this.props);
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getClassNames()}>{this.formatCount()}</span>
        </div>

        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="  btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className=" btn btn-secondary btn-sm m-2" disabled={this.props.counter.value ===0}
          >
            -
          </button>
          <button
            className=" btn btn-primary btn-sm m-2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            {" "}
            Delete
          </button>
        </div>
      </div>
    );
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
