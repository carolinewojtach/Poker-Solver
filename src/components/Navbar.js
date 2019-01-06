import React, { Component } from "react";

import Logo from "./Logo";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-expand navbar-dark fixed-top bg-dark">
          <Logo />
          <span className="navbar-brand mb-0 h1">Pokcer Solver</span>
        </div>
      </div>
    );
  }
}
export default Navbar;
