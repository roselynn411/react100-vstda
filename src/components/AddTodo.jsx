import React, { Component } from 'react';
class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            priority: '0'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleClick(event) {
        event.preventDefault();
        this.props.addTodo(this.state.description, this.state.priority, this.props.id);
        this.setState({ description: '', priority: '0' }); 

    }

    render() {
        return (
            <div className='col-md-4'>
                <div className="panel panel-default">
                    <div className="panel-heading">Add New Todo</div>
                    <div className='panel-body text-left'>
                        <form onSubmit={this.onSubmit}>
                            <h4 className="card-text">I want to..</h4>
                            <textarea
                                name='description'
                                value={this.state.description}
                                onChange={this.handleChange}
                                className='create-todo-text'
                            ></textarea>
                            <h4 className="card-text">How much of a priority is this?</h4>
                            <select
                                value={this.state.priority}
                                name='priority'
                                className='create-todo-priority'
                                onChange={this.handleChange}>
                                <option selected disabled>Choose priority</option> 
                                <option value='1'>Low Priority</option>
                                <option value='2'>Medium Priority</option>
                                <option value='3'>High Priority</option>
                            </select>
                        </form>
                    </div>
                    <div className="panel-footer">
                        <button className='create-todo btn btn-success btn-block'
                            type='button'
                            onClick={this.handleClick}
                        >Add</button>
                    </div>
                </div>
            </div>
        );
    }
}




export default AddTodo;