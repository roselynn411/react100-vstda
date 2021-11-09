import React, { Component } from 'react';
import Header from './Header';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class ViewTodos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            nextId: 0,
            colors: {
                1: "alert alert-success",
                2: "alert alert-warning",
                3: "alert alert-danger"
            },
        }
        this.addTodo = this.addTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.submitEdit = this.submitEdit.bind(this);
        this.toggleCompleted = this.toggleCompleted.bind(this);
    }

    addTodo(description, priority) {
        let newTodo = {
            id: this.state.nextId,
            description,
            priority,
            completed: false,
            edit: false,
            color: this.state.colors[priority]
        }
        let updateId = this.state.nextId + 1;
        this.setState({ nextId: updateId });
        this.state.todos.push(newTodo);
        console.log(this.state.todos);
    }

    editTodo(id) {
        let todosTemp = [...this.state.todos];
        let todo = todosTemp.find(item => item.id == id);
        todo.edit = !todo.edit;
        this.setState({ todos: todosTemp });

    }

    submitEdit(updatedDescription, updatedPriority, id) {
        let todosTemp = [...this.state.todos];
        let todo = todosTemp.find(item => item.id == id);
        todo.description = updatedDescription;
        todo.priority = updatedPriority;
        todo.color = this.state.colors[updatedPriority];
        todo.edit = false;
        this.setState({ todos: todosTemp });
    }


    deleteTodo(id) {
        let newTodos = this.state.todos.filter(item => item.id != id);
        this.setState({ todos: newTodos });
    }

    toggleCompleted(id) {
        let todosTemp = [...this.state.todos];
        let todo = todosTemp.find(item => item.id == id);
        todo.completed = !todo.completed; 
        this.setState({ todos: todosTemp });

    }



    render() {
        return (
            <div className='container'>
                <Header />
                <div className='row'>
                    <AddTodo
                        addTodo={this.addTodo}/>
                    <div className='col-md-8'>
                        <div className='panel panel-default'>
                            <div className='panel-heading'> View Todos</div>
                            <div className="panel-body">
                                <TodoList
                                    toggleCompleted={this.toggleCompleted}
                                    todos={this.state.todos}
                                    editTodo={this.editTodo}
                                    deleteTodo={this.deleteTodo}
                                    submitEdit={this.submitEdit}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewTodos;