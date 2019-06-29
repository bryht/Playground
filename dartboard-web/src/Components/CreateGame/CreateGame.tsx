import React, { Component } from 'react';
import styles from './CreateGame.module.scss';
import RadioButton from '../RadioButton/RadioButton';
import Slider from '../Slider/Slider';
import PlayerList from '../PlayerList/PlayerList';
export class CreateGame extends Component {

    onDragEnd = () => {

    }

    render() {
        return (
            <div className={styles.body}>
                <h2>Room number:123</h2>
                <div className={styles.content}>
                    <PlayerList players={[{ name: 'abc' },{name:'bcd'}]}></PlayerList>
                    <section>
                        <div>
                            <label>Game</label>
                            <div>
                                <RadioButton id='a' text='Single Out' checked></RadioButton>
                                <RadioButton id='b' text='Double Out' ></RadioButton>
                            </div>
                        </div>
                        <div>
                            <label>Points</label>
                            <div>
                                <Slider></Slider>
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
