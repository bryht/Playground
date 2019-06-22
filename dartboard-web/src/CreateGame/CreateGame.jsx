import React, { Component } from 'react';
import styles from './CreateGame.module.scss';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import RadioButton from '../Components/RadioButton/RadioButton';
import Slider from '../Components/Silder/Slider';
export class CreateGame extends Component {

    onDragEnd = result => {

    }

    render() {
        return (
            <div className={styles.body}>
                <h2>Room number:123</h2>
                <div className={styles.content}>
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <Droppable droppableId="droppable" >
                            {
                                (provided, snapshot) => {

                                    return <ul  {...provided.droppableProps}
                                        ref={provided.innerRef}>
                                        <Draggable draggableId="drag1" key="drag1" index={0}>
                                            {
                                                (provided, snapshot) => {

                                                    return <li ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}>
                                                        <div>
                                                            <order class="material-icons">swap_vertical_circle</order>
                                                            <avatar class="material-icons">account_circle</avatar>
                                                            <label>Ming</label>
                                                            <state class="material-icons">check_circle_outline</state>
                                                            <control class="material-icons">highlight_off </control>
                                                        </div>
                                                    </li>

                                                }
                                            }
                                        </Draggable>
                                        <Draggable draggableId="drag2" key="drag2" index={1}>
                                            {
                                                (provided, snapshot) => {

                                                    return <li ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}>
                                                        <div>
                                                            <order class="material-icons">swap_vertical_circle</order>
                                                            <avatar class="material-icons">account_circle</avatar>
                                                            <label>Ming</label>
                                                            <state class="material-icons">schedule</state>
                                                            <control class="material-icons"> highlight_off</control>
                                                        </div>
                                                    </li>
                                                }
                                            }
                                        </Draggable>
                                        {provided.placeholder}

                                    </ul>
                                }
                            }
                        </Droppable>
                    </DragDropContext>
                    <section>
                        <div>
                            <label>Game</label>
                            <div>
                                <RadioButton text='Single Out' checked></RadioButton>
                                <RadioButton text='Double Out'  ></RadioButton>
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
