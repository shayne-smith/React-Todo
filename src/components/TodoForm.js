import React from 'react'

class TodoForm extends React.Component {
    ///////////// CONSTRUCTOR /////////////////
    constructor() {
        super();
        this.state = {
            userInput: ''
        };
    }

    handleChanges = e => {
        // update state with each keystroke
        this.setState (
            {
                userInput: e.target.value
            },
            () => console.log(this.state.userInput)
        );
    };

    submitForm = e => {
        e.preventDefault();
        this.props.addTask(this.state.userInput);
        this.setState({ userInput: '' });
    };

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input
                    type='text'
                    name='task'
                    placeholder='Enter your task...'
                    onChange={this.handleChanges}
                    value={this.state.userInput}
                />
                <div className='btn-container'>
                    <button>Add Todo</button>
                    <button className='clear-btn' onClick={e => {this.props.clearCompleted()}}>Clear Completed</button>
                </div>
            </form>
        );
    }
}

export default TodoForm;