import React from 'react';
import './HoverBar.css';

export default function HoverBar(props) {
  return (
    <div id="HoverBar">
      <div class="button">
        <img src="./img/GitHub-Mark.png" alt="github" class="icon" />
        Github
      </div>
      <div class="button">
        <img src="./img/tistory-logo.svg" alt="tistory" class="icon" />
        Tistory
      </div>
      <div class="button">Velog</div>
    </div>
  );
}
