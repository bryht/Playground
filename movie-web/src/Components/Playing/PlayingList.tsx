import React, { Component } from 'react'
import styles from "./PlayingList.module.scss";

interface PlayerItem {
    Name: string;
    Avatar: string;
    Score: number;
    Total: number;
    Average: number;
    Left: number;
    IsPlaying: boolean;
}

export class PlayingList extends Component<{ children: Array<PlayerItem> }> {
    render() {
        return (
            <div className={styles.playing_list}>
                <ul>
                    {
                        this.props.children.map(item => {

                            return <li>
                                <div>
                                    <span className='material-icons'>looks_one</span>
                                    <span className={`material-icons ${styles.avatar}`}>account_circle</span>
                                    <div>
                                        <span className={styles.name}>{item.Name}</span>
                                        <div>
                                            <i className={`material-icons ${styles.average}`}>functions</i>
                                            <span className={styles.average}>{item.Average}</span>
                                            <i className={`material-icons ${styles.total}`}>insert_chart_outlined</i>
                                            <span className={styles.total}>{item.Total}</span>
                                        </div>

                                    </div>
                                    <span className={styles.left}>{item.Left}</span>
                                    {item.IsPlaying ? <span className={`material-icons ${styles.flag}`}>send</span> : null}
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
