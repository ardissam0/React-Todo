import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import styled from 'styled-components';
import './components/Todo.css';


const TaskStyles= styled.div`
  margin-left: 28%;
  margin-right: 28%;
  background-color: darkslategrey;
  width: 40%;
  padding: 30px;
  margin-top: 5%;
`;

const theTasks = [
  {
    task: 'Cook',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Laundry',
    id: 1528817072048,
    completed: false
  },
  {
    task: 'Workout',
    id: 1528817000912,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor () {
    super();
    this.state = {
      theTasks
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTask = (event, task) => {
    event.preventDefault();

    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      theTasks: [...this.state.theTasks, newTask]
    });
  };

  toggleTask = taskId => {

    this.setState({
    //map over tasks
      theTasks: this.state.theTasks.map(task => {
  
      if (taskId === task.id) {
        return {
          ...task,
          completed: !task.completed
        };
      }

      return task;
    })
  });
};

clearCompleted = event => {
  //function to clear completed tasks
  event.preventDefault();
  this.setState({
    theTasks: this.state.theTasks.filter(task => task.completed === false)
  });
};

  render() {
    return (
      <TaskStyles>
      <div>
      <div className='top'>
        <h2 style = {{textAlign: 'center'}}>Todo List</h2>
        <TodoForm addTask={this.addTask} />
      </div>
      <TodoList
      theTasks={this.state.theTasks}
      toggleTask={this.toggleTask}
      clearCompleted={this.clearCompleted}
      />
      </div>
      </TaskStyles>
    );
  }
}
export default App;
