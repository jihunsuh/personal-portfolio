import React, { Component } from 'react';

import HoverBar from './HoverBar';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <div id="w60"></div>
        <div id="w40">
          <div id="h60">
            <HoverBar />
          </div>
          <div id="h40"></div>
        </div>
      </div>
    );
  }
}
