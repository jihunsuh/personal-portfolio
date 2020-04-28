import React from 'react';
import './SNSBar.css';

export default function SNSBar(props) {
  return (
    <div id="SNSBar">
      <div class="SNSbtn">
        <img src="./img/f_logo.png" alt="facebook" class="icon" />
        FaceBook
      </div>
      <div class="SNSbtn">
        <img src="./img/GitHub-Mark.png" alt="github" class="icon" />
        Github
      </div>
      <div class="SNSbtn">
        <img src="./img/Twitter_Logo.png" alt="github" class="icon" />
        Twitter
      </div>
    </div>
  );
}
