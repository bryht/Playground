import React, { Component } from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styles from './PlayerList.module.scss';

interface PlayerItem {
    name: string;
}

export class PlayerList extends Component<{ players: Array<PlayerItem> }> {
    onDragEnd = () => {

    }
    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable" >
                    {
                        (provided) => {

                            return <ul className={styles.player_list}  {...provided.droppableProps}
                                ref={provided.innerRef}>
                                {
                                    this.props.players.map(item => {
                                        return <Draggable draggableId={item.name} key={item.name} index={0}>
                                            {
                                                (provided) => {

                                                    return <li ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}>
                                                        <div>
                                                            <span className={`material-icons ${styles.order}`}>swap_vertical_circle</span>
                                                            <span className={`material-icons ${styles.avatar}`}>account_circle</span>
                                                            <label>{item.name}</label>
                                                            <span className={`material-icons ${styles.state}`}>check_circle_outline</span>
                                                            <span className={`material-icons ${styles.control}`}>highlight_off </span>
                                                        </div>
                                                    </li>

                                                }
                                            }
                                        </Draggable>
                                    })
                                }
                                {provided.placeholder}
                            </ul>
                        }
                    }
                </Droppable>
            </DragDropContext>
        )
    }
}

export default PlayerList
