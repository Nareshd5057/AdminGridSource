import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="mainHeader">
        <div className="logoSec">
          <a>&lt; ADMIN /&gt;</a>
        </div>

        <div className="userSec">
          <span>Naresh kumar D</span>
          <span className="fontSm">Admin</span>
        </div>
        <img className="profile" src={'./profile.png'} />
      </header>
    );
  }
}
