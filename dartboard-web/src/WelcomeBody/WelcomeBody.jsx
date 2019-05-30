import React, { Component } from 'react'
import logo from '../logo.svg';
import './WelcomeBody.scss';
export class WelcomeBody extends Component {

    render() {
        return (
            <div class="body">
                <header>
                    <img src={logo} alt="logo" />
                    <p>Dart Board</p>
                </header>
                <div>
                    {this.props.children}
                </div>
                <div>
                    {this.props.footer}
                </div>
            </div>
        )
    }
}

export default WelcomeBody
