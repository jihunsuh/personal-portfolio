import React from 'react';
import './ManyHoverBar.css';

export default function HoverBar(props) {
  return (
    <div id="ManyHoverBar">
      <div class="Manybutton">
        <img src="./img/f_logo.png" alt="facebook" class="icon" />
        FaceBook
      </div>
      <div class="Manybutton">
        <img src="./img/GitHub-Mark.png" alt="github" class="icon" />
        Github
      </div>
      <div class="Manybutton">
        <img src="./img/Twitter_Logo.png" alt="github" class="icon" />
        Twitter
      </div>
    </div>
  );
}
