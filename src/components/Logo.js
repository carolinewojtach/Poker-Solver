import React, { Component } from "react";
import logo from "../images/logo.png";

class Logo extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
    );
  }
}
export default Logo;
