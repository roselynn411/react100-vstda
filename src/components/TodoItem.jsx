import React from 'react';
import EditTodo from './EditTodo';

const TodoItem = props => {
    let thisTodo;
    if (props.edit) {
        thisTodo = (
            <div>
                <EditTodo
                    description={props.description}
                    priority={props.priority}
                    id={props.id}
                    submitEdit={props.submitEdit}
                />
            </div>
        )
    } else {
        thisTodo = (
            <li className={`list-group-item-${props.color}`}>
                <input
                    type='checkbox'
                    className='completed-todo update-todo-completed'
                    checked={props.completed}
                    onClick={() => props.toggleCompleted(props.id)}
                ></input>
                <text>{props.description}</text>
                <button
                    style={{ height: '24px' }}
                    className='edit-todo btn btn-info pull-right'
                    onClick={() => props.editTodo(props.id)} >
                    <i className='fa fa-edit' style={{ height: '100%' }}></i>
                </button>
                <button
                    style={{ height: '24px' }}
                    className='delete-todo btn btn-danger pull-right'
                    onClick={() => props.deleteTodo(props.id)} >
                    <i className='fa fa-trash' style={{ height: '100%' }}></i>
                </button>
            </li>
        )
    }

    return thisTodo;
}


export default TodoItem;
