import React, { Component } from 'react'
import styles from "./Playing.module.scss";
import PlayingList from "./PlayingList";

export class Playing extends Component {
    render() {
        return (
            <div className={styles.body}>
                <h2>Room number:123</h2>
                <div className={styles.content}>
                    <PlayingList>
                        {
                            [{
                                Name: 'abc',
                                Avatar: 'abc',
                                Average: 12,
                                Score: 40,
                                Left: 12,
                                Total: 301,
                                IsPlaying: true
                            }, {
                                Name: 'bcd',
                                Avatar: 'bcd',
                                Average: 12,
                                Score: 40,
                                Left: 12,
                                Total: 301,
                                IsPlaying: false
                            }]
                        }
                    </PlayingList>
                </div>
                <div className={styles.control}>
                    <a className='button' href='./playing'>Start</a>
                </div>
            </div>
        )
    }
}

export default Playing
