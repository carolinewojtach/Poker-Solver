import React, { Component } from "react";

import Logo from "./Logo";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand navbar-dark fixed-top">
        <Logo />
        <span className="navbar-brand mb-0 h1">Poker Solver</span>
      </div>
    );
  }
}
export default Navbar;
