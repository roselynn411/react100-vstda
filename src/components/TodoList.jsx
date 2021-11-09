import React from "react";
import TodoItem from './TodoItem'


const TodoList= props => {
    console.log(props);
    return (
        <div className='card'>
            <div className='card-body'>
                {
                    props.todos.map(todo => {
                        console.log(todo.id);
                        return (
                            <TodoItem
                               editTodo={props.editTodo}
                                submitEdit={props.submitEdit}
                                deleteTodo={props.deleteTodo}
                                toggleCompleted={props.toggleCompleted}
                                id={todo.id}
                                key={todo.id}
                                description={todo.description}
                                priority={todo.priority}
                                completed={todo.completed}
                                edit={todo.edit}
                                color={todo.color}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default TodoList;