import React, { Component } from 'react';

import './HoverBar.css';

export default class HoverBar extends Component {
  render() {
    return (
      <div id="HoverBar">
        <div class="button">
          <img src="./img/f_logo.png" alt="facebook" class="icon" />
          FaceBook
        </div>
        <div class="button">
          <img src="./img/GitHub-Mark.png" alt="github" class="icon" />
          Github
        </div>
        <div class="button">
          <img src="./img/Twitter_Logo.png" alt="github" class="icon" />
          Twitter
        </div>
      </div>
    );
  }
}
