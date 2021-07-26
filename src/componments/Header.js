
import React from "react";
import logo from '../Logo_1.jpg';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    );
  }
}

export default Header;