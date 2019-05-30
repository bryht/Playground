import React from 'react';
import './Welcome.scss';
import WelcomeBody from '../WelcomeBody/WelcomeBody';

import { Component } from 'react'

export class Welcome extends Component {

  render() {
    return (
      <WelcomeBody footer={
        <a type="submit" href="/choose" class="mdc-button mdc-button--raised"> Go go go</a>
      }>
        <div class="mdc-text-field">
          <input type="text" class="mdc-text-field__input" />
          <label class="mdc-floating-label">Your Name</label>
          <div class="mdc-line-ripple"></div>
        </div>
      </WelcomeBody>
    )
  }
}

export default Welcome