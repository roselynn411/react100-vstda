import React, { Component } from 'react';
class EditTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            description: this.props.description, 
            priority: this.props.priority, 
            completed: this.props.completed,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className='card'>
                <div className='card-body'>
                    <div className='form-group'>
                        <label htmlFor='description'>Description</label>
                        <textarea onChange={this.handleChange} className='update-todo-text' name='description' value={this.state.description}></textarea>
                        <label htmlFor='priority'>Priority</label>
                        <select
                            name='priority'
                            className='update-todo-priority'
                            onChange={this.handleChange}
                            value={this.state.priority}>
                            <option value='1'>Low Priority</option>
                            <option value='2'>Medium Priority</option>
                            <option value='3'>High Priorityy</option>
                        </select>
                        <button
                            className='update-todo btn btn-success pull-right'
                            name='button'
                            type='submit'
                            onClick={() => this.props.submitEdit(this.state.description, this.state.priority, this.props.id)}>Save
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditTodo;