import React, { Component } from "react";
class Navbar extends Component {
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
                {this.props.itemsCount}
        </a>
      </nav>
    );
  }
}

export default Navbar;
