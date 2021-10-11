import React, { Component } from 'react';
import Header from './Pages/Header/Header';
import './App.css';
import Navigation from './Pages/Navigation/Navigation';
import Routers from './Routers';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <Routers />
      </div>
    );
  }
}
