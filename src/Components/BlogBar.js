import React from 'react';
import './BlogBar.css';

export default function BlogBar(props) {
  return (
    <div id="BlogBar">
      <div class="Bbtn">
        <img src="./img/GitHub-Mark.png" alt="github" class="icon" />
        Github
      </div>
      <div class="Bbtn">
        <img src="./img/tistory-logo.svg" alt="tistory" class="icon" />
        Tistory
      </div>
      <div class="Bbtn">Velog</div>
    </div>
  );
}
