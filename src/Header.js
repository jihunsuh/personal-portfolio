import React from 'react';
import HoverBar from './Components/ManyHoverBar';

import './Header.css';

export default function Header() {
  return (
    <div id="header">
      <div id="w40">
        <img src="./img/MyPicture.jpg" alt="picture" id="picture" />
      </div>
      <div id="w60">
        <div id="h60">
          <b>
            모르는 것을 찾아내고 자신의 생각을 코드로 구현하며 사는 개발자가 되기 위해 하루하루
            노력하고 있습니다.
          </b>
          <pre>
            Back-end
            <br />
            2018.12 ~ 2019.6 IT 국비지원교육 <br />
            2019.7 ~ 2019.8 CodeStates Pre <br />
            2019.9 ~ 2020.3 CodeStates Immersive <br />
            2020.3 ~ 2020.6 CSE
          </pre>
        </div>
        <div id="h40">
          <HoverBar />
        </div>
      </div>
    </div>
  );
}
