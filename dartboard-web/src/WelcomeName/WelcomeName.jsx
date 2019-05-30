import React, { Component } from 'react'
import './WelcomeName.scss';
export class WelcomeName extends Component {

    render() {
        return (
            <div>
                <div>
                    <div class="mdc-text-field">
                        <input type="text" class="mdc-text-field__input" />
                        <label class="mdc-floating-label">Your Name</label>
                        <div class="mdc-line-ripple"></div>
                    </div>
                </div>
                <div>
                    <button type="submit" onClick={this.props.onClick} class="mdc-button mdc-button--raised"> Go go go</button>
                </div>
            </div>
        )
    }
}

export default WelcomeName
