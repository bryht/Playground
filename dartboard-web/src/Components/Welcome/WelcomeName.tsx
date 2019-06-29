import React, { Component } from 'react'
export class WelcomeName extends Component<{ onClick: (event: React.MouseEvent<HTMLButtonElement>) => void }> {

    render() {
        return (
            <div>
                <div>
                    <div className="mdc-text-field">
                        <input type="text" className="mdc-text-field__input" />
                        <label className="mdc-floating-label">Your Name</label>
                        <div className="mdc-line-ripple"></div>
                    </div>
                </div>
                <div>
                    <button type="submit" onClick={this.props.onClick}> Go go go</button>
                </div>
            </div>
        )
    }
}

export default WelcomeName
