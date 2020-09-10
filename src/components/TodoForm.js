import React from 'react';


//create ability to add a task
class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: '',
        };
    }

handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
};

submitTask = event => {
    event.preventDefault();
    this.props.addTask(event, this.state.task);
};

render() {
    return (
        <form onSubmit={this.submitTask}>
        <input type='text' name='task' onChange={this.handleChanges} />
        <button style = {{fontWeight: 'bold',}}>Add Task</button>
        </form>
    );
  }
}

export default TodoForm;