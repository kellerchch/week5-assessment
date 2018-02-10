import React, { Component } from 'react';

class toDoList extends Component {
    render() {
        return (
            <div>
                <ul className="listContainer">
                <h2>To Do List</h2>
                {
                    this.props.toDos.map((toDo) => {
                        return (
                            <li className="listText" key={toDo.id} onClick={ () => { this.props.selecttoDo(toDo) }}> { toDo.name } </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default toDoList;