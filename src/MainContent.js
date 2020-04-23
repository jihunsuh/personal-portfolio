import React from 'react';

import './MainContent.css';

import HoverBar from './Components/HoverBar';
import Project from './Project';

export default function MainContent() {
  return (
    <div id="MainContent">
      <div id="borderbox">
        <div id="text">
          <div id="testBefore"></div>
          <div id="test">
            <span id="title">Stack</span>
            <img src="./img/express.png" class="stack"></img>
            <img src="./img/react.png" class="stack"></img>
            <img src="./img/sequelize.png" class="stack"></img>
            <img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" class="stack" />
          </div>
        </div>
        <div id="text">
          <div id="testBefore"></div>
          <div id="test">
            <span class="title">Blog</span>
            <HoverBar />
          </div>
        </div>
        <div id="text">
          <div id="testBefore"></div>
          <div id="test">
            <span class="title">Project</span>
            <img src="./img/so-bucket.png" />
            <img src="./img/code-log.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
