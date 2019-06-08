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
                                <control  class="material-icons">highlight_off </control>
                            </div>
                        </li>
                        <li>
                            <div>
                                <order class="material-icons">swap_vertical_circle</order>
                                <avator class="material-icons">account_circle</avator>
                                <label>Ming</label>
                                <state  class="material-icons">schedule</state>
                                <control  class="material-icons"> highlight_off</control>
                            </div>
                        </li>
                         
                    </ul>
                </div>
                <div className={styles.control}>
                    <button> Start   </button>
                </div>
            </div>
        )
    }
}

export default CreateGame
