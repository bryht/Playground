import React, { Component } from 'react'


export class RadioButton extends Component<{
    id: string;
    checked?: boolean;
    text: string;
}> {

    onChangeHandler = () => {

    }
    render() {
        return (
            <div className="mdc-form-field">
                <div className="mdc-radio">
                    <input name="game" className="mdc-radio__native-control" type="radio" id={this.props.id} checked={this.props.checked} onChange={this.onChangeHandler} />
                    <div className="mdc-radio__background">
                        <div className="mdc-radio__outer-circle"></div>
                        <div className="mdc-radio__inner-circle"></div>
                    </div>
                </div>
                <label>{this.props.text}</label>
            </div>
        )
    }
}

export default RadioButton
