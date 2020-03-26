import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import styled from 'styled-components';
import './components/Todo.css';


const TaskStyles= styled.div`
  background-color: #9DA9CC;
  width: 40%;
  padding: 3%;
  margin-top: 2%;
  border: 5px solid #3C4D80;
`;

const theTasks = [
  {
    task: 'Clean Basement',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Cook Dinner',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Do Laundry',
    id: 1528817072048,
    completed: false
  },
  {
    task: 'Hit The Gym',
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
        <h2>Welcome to your Todo App!</h2>
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
