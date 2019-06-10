import React, { Component } from 'react';
import styles from './CreateGame.module.scss';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
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
                                                            <avator class="material-icons">account_circle</avator>
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
                                                            <avator class="material-icons">account_circle</avator>
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
                                <div class="mdc-form-field">
                                    <div class="mdc-radio">
                                        <input class="mdc-radio__native-control" type="radio" id="radio-1" name="radios" checked />
                                        <div class="mdc-radio__background">
                                            <div class="mdc-radio__outer-circle"></div>
                                            <div class="mdc-radio__inner-circle"></div>
                                        </div>
                                    </div>
                                    <label for="radio-1">Single Out</label>
                                </div>
                                <div class="mdc-form-field">
                                    <div class="mdc-radio">
                                        <input class="mdc-radio__native-control" type="radio" id="radio-1" name="radios" checked />
                                        <div class="mdc-radio__background">
                                            <div class="mdc-radio__outer-circle"></div>
                                            <div class="mdc-radio__inner-circle"></div>
                                        </div>
                                    </div>
                                    <label for="radio-1">Double Out</label>
                                </div>
                                <div class="mdc-form-field">
                                    <div class="mdc-radio">
                                        <input class="mdc-radio__native-control" type="radio" id="radio-1" name="radios" checked />
                                        <div class="mdc-radio__background">
                                            <div class="mdc-radio__outer-circle"></div>
                                            <div class="mdc-radio__inner-circle"></div>
                                        </div>
                                    </div>
                                    <label for="radio-1">---</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label>Points</label>
                            <div>
                                <div class="mdc-slider mdc-slider--discrete" tabindex="0" role="slider"
                                    aria-valuemin="301" data-step="50" aria-valuemax="901" aria-valuenow="301"
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
