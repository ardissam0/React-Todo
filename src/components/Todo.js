import React from 'react';
import './Todo.css';

const Todo = props => {
    console.log(props);
//create onClick event to complete a task
    return (
        <div 
        className={`Todo${props.task.completed ? ' completed' : ''}`}
        onClick={() => props.toggleTask(props.task.id)}>
        <p>{props.task.task}</p>
        </div>
    );
};

export default Todo;