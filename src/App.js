import React, { Component } from 'react';

import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <MainContent />
        {/* <Footer /> */}
      </div>
    );
  }
}
