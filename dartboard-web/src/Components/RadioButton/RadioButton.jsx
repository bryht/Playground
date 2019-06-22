import React, { Component } from 'react'


export class RadioButton extends Component {

    render() {
        return (
            <div class="mdc-form-field">
                <div class="mdc-radio">
                    <input name="game" class="mdc-radio__native-control" type="radio" id={this.props.id} checked={this.props.checked} />
                    <div class="mdc-radio__background">
                        <div class="mdc-radio__outer-circle"></div>
                        <div class="mdc-radio__inner-circle"></div>
                    </div>
                </div>
                <label for={this.props.id}>{this.props.text}</label>
            </div>
        )
    }
}

export default RadioButton
