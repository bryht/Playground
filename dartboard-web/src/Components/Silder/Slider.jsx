import React, { Component } from 'react'

export class Slider extends Component {
    render() {
        return (
            <div class="mdc-slider mdc-slider--discrete" tabindex="0" role="slider"
                aria-valuemin="301" data-step="50" aria-valuemax="901" aria-valuenow="301"
                aria-label="Select Value">
                <div class="mdc-slider__track-container">
                    <div class="mdc-slider__track"></div>
                </div>
                <div class="mdc-slider__thumb-container">
                    <div class="mdc-slider__pin">
                        <span class="mdc-slider__pin-value-marker"></span>
                    </div>
                    <svg class="mdc-slider__thumb" width="21" height="21">
                        <circle cx="10.5" cy="10.5" r="7.875"></circle>
                    </svg>
                    <div class="mdc-slider__focus-ring"></div>
                </div>
            </div>
        )
    }
}

export default Slider
