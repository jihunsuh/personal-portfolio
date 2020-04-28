import React from 'react';

import './MainContent.css';

import BlogBar from './Components/BlogBar';

export default function MainContent() {
  return (
    <div id="MainContent">
      <div id="borderbox">
        <div id="contentBar">
          <div id="divBarBefore"></div>
          <div id="divBar">
            <span id="divBarTitle">Stack</span>
            <img src="./img/express.png" class="stack" alt="express"></img>
            <img src="./img/react.png" class="stack" alt="react"></img>
            <img src="./img/sequelize.png" class="stack" alt="sequelize"></img>
            <img
              src="https://www.mysql.com/common/logos/logo-mysql-170x115.png"
              class="stack"
              alt="mysql"
            />
          </div>
        </div>
        <div id="contentBar">
          <div id="divBarBefore"></div>
          <div id="divBar">
            <span class="divBarTitle">Blog</span>
            <BlogBar />
          </div>
        </div>
        <div id="contentBar">
          <div id="divBarBefore"></div>
          <div id="divBar">
            <span class="divBarTitle">Project</span>
            <img src="./img/so-bucket.png" alt="so-bucket" />
            <img src="./img/code-log.png" alt="code-log" />
          </div>
        </div>
      </div>
    </div>
  );
}
