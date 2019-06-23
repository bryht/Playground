import React from 'react';
import style from './Welcome.module.scss';
import logo from '../logo.svg';

import { Component } from 'react'
import WelcomeChoose from './WelcomeChoose';
import WelcomeName from './WelcomeName';

interface WelcomeState {
  page: string;
}
export class Welcome extends Component<{},WelcomeState> {

  constructor(props: any) {
    super(props)
    this.state = {
      page: "welcome"
    }
  }

  goChoose = () => {
    this.setState({
      ...this.state,
      page: 'choose'
    })
  }

  render() {
    return (
      <div className={style.body}>
        <header>
          <img src={logo} alt="logo" />
          <p>Dart Board</p>
        </header>
        {this.state.page === 'choose' ?
          <WelcomeChoose></WelcomeChoose> :
          <WelcomeName onClick={this.goChoose}></WelcomeName>
        }
      </div>
    )
  }
}

export default Welcome