import React, { Component } from 'react'
import styles from "./PlayingList.module.scss";

interface PlayerItem {
    Name: string;
    // Avatar: string;
    // Score: number;
    // Total: number;
    // Average: number;
    // Left: number;
    // IsPlaying: boolean;
}

export class PlayingList extends Component<{ children: Array<PlayerItem> }> {
    render() {
        return (
            <div className={styles.playinglist}>
                <ul>
                    {
                        this.props.children.map(item => {

                            return <li>
                                <div>
                                    <label>{item.Name}</label>
                                    <span className={`material-icons ${styles.avatar}`}>check_circle_outline</span>
                                    <span className={`material-icons ${styles.flag}`}>highlight_off </span>
                                </div>
                            </li>

                        })
                    }
                </ul>
            </div>
        )
    }
}

export default PlayingList
