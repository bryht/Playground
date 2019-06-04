import React, { Component } from 'react'
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
                                <i class="material-icons">face</i>

                                <order>1</order>
                                <label>Ming</label>
                                <state>Waiting</state>
                                <control>
                                    cancel
                                </control>
                            </div>
                        </li>
                        <li>111</li>
                    </ul>
                </div>
                <div className={styles.control}>
                    <button> abc   </button>
                </div>
            </div>
        )
    }
}

export default CreateGame
