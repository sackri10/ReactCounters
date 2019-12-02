import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class Counter extends Component {


  constructor(props) {
    super(props);    
  }
  getClassNames() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
 
  render() {
    console.log(this.props);
    return (
      <div>
        <span className={this.getClassNames()}>{this.formatCount()}</span>
        <button
          onClick={()=> this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button className="btn btn-primary btn-sm m-2" onClick={()=>this.props.onDelete(this.props.counter.id)}> Delete</button>
      </div>
    );
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
