import React from 'react';
import logo from '../logo.svg';
import './Welcome.scss';

function Welcome() {
  return (
    <div class="body">
      <header>
        <img src={logo} className="logo" alt="logo" />
        <p>
          Dart Board
        </p>
      </header>
      <div>
        <div class="mdc-text-field">
          <input type="text"  class="mdc-text-field__input" />
          <label class="mdc-floating-label">Your Name</label>
          <div class="mdc-line-ripple"></div>
        </div>
      </div>
      <div>
        <button type="submit" class="mdc-button mdc-button--raised"> Go go go</button>
      </div>
    </div>
  );
}

export default Welcome;
