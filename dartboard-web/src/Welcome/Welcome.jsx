import React from 'react';
import './Welcome.scss';
import logo from '../logo.svg';
import { Component } from 'react'
import WelcomeChoose from '../WelcomeChoose/WelcomeChoose';
import WelcomeName from '../WelcomeName/WelcomeName';

export class Welcome extends Component {

  constructor(props) {
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
      <div class="body">
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