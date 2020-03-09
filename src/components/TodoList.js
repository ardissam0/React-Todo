import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
    return (
        <div>
            {props.theTasks.map(task => (
                <Todo key={task.id} task={task} toggleTask={props.toggleTask} />
            ))}
            <button onClick={props.clearCompleted}>Clear</button>
        </div>
    );
};

export default TodoList;