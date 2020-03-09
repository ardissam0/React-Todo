import React from 'react';

class TodoForm extends React.component {
    constructor() {
        super();
        this.state = {
            task: '',
        };
    };

handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
};

submitTask = event => {
    event.preventDefault();
    this.PaymentResponse.addTask(event, this.state.task);
};

render() {
    return (
        <form onSubmit={this.submitTask}>
        <input type='text' name='task' onChange={this.handleChanges} />
        <button>Add Task</button>
        </form>
    )
  }
}

export default TodoForm;