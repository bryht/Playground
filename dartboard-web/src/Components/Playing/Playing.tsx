import React, { Component } from 'react'
import styles from "./Playing.module.scss";
import PlayingList from "./PlayingList";
import  axios from "axios";
export class Playing extends Component {
    async render() {

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
                    <div>
                        <button>Double</button>
                        <button>Triple</button>
                    </div>
                    <div>

                        <div><button>1</button></div>
                        <div><button>2</button></div>
                        <div><button>3</button></div>
                        <div><button>4</button></div>
                        <div><button>5</button></div>
                        <div><button>6</button></div>
                        <div><button>7</button></div>
                        <div><button>8</button></div>
                        <div><button>9</button></div>
                        <div><button>10</button></div>
                        <div><button>11</button></div>
                        <div><button>12</button></div>
                        <div><button>13</button></div>
                        <div><button>14</button></div>
                        <div><button>15</button></div>
                        <div><button>16</button></div>
                        <div><button>17</button></div>
                        <div><button>18</button></div>
                        <div><button>19</button></div>
                        <div><button>20</button></div>
                        <div><button>Bull</button></div>
                    </div>
                    <div>
                        <div><button>Miss</button></div>
                        <div><button>Undo</button></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Playing
