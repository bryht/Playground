import React, { Component } from 'react'

export class Slider extends Component<{}> {
    render() {
        return (
            <div className="mdc-slider mdc-slider--discrete" role="slider"
                aria-valuemin={301} data-step="50" aria-valuemax={901} aria-valuenow={301}
                aria-label="Select Value">
                <div className="mdc-slider__track-container">
                    <div className="mdc-slider__track"></div>
                </div>
                <div className="mdc-slider__thumb-container">
                    <div className="mdc-slider__pin">
                        <span className="mdc-slider__pin-value-marker"></span>
                    </div>
                    <svg className="mdc-slider__thumb" width="21" height="21">
                        <circle cx="10.5" cy="10.5" r="7.875"></circle>
                    </svg>
                    <div className="mdc-slider__focus-ring"></div>
                </div>
            </div>
        )
    }
}

export default Slider
