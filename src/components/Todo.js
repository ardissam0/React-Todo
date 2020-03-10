import React from 'react';
import styled from 'styled-components';
import './Todo.css';


const TaskStyles= styled.div`
  background-color: #9DA9CC;
  width: 180px;
  padding: 2%;
`;

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