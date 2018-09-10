import * as React from 'react';
import './Header.css';
import logo from 'src/logo.svg';

class Header extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="title">Welcome to React</h1>
      </header>
    );
  }
}

export default Header;