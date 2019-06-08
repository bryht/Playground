import React, { Component } from 'react';
import styles from './CreateGame.module.scss';

export class CreateGame extends Component {
    render() {
        return (
            <div className={styles.body}>
                <h2>Room number:123</h2>
                <div className={styles.content}>
                    <ul>
                        <li>
                            <div>
                                <order class="material-icons">swap_vertical_circle</order>
                                <avator class="material-icons">account_circle</avator>
                                <label>Ming</label>
                                <state class="material-icons">check_circle_outline</state>
                                <control class="material-icons">highlight_off </control>
                            </div>
                        </li>
                        <li>
                            <div>
                                <order class="material-icons">swap_vertical_circle</order>
                                <avator class="material-icons">account_circle</avator>
                                <label>Ming</label>
                                <state class="material-icons">schedule</state>
                                <control class="material-icons"> highlight_off</control>
                            </div>
                        </li>
                    </ul>
                    <section>
                        <div>
                            <label>Game</label>
                            <ul>
                                <li>
                                    <input type="radio" />
                                </li>
                            </ul>
                        </div>
                        <div>
                            <label>Points</label>
                            <div class="mdc-slider mdc-slider--discrete" tabindex="0" role="slider"
                                aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"
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
                        </div>
                    </section>
                </div>
                <div className={styles.control}>
                    <button>Start</button>
                </div>
            </div>
        )
    }
}

export default CreateGame
