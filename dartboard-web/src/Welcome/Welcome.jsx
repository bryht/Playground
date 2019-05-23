import React from 'react';
import logo from '../logo.svg';
import './Welcome.css';

function Welcome() {
  return (
    <div className="body">
      <header>
        <img src={logo} className="logo" alt="logo" />
        <p>
          Dart Board
        </p>
      </header>
      <div>
        <label htmlFor="room">Your Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="room">Your Code</label>
        <input type="text" name="code" id="code" />
      </div>
      <div>
        <button type="submit">Goooo</button>
      </div>
    </div>
  );
}

export default Welcome;
