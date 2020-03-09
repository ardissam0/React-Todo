import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const theTasks = [
  {
    task: 'Clean Basement',
    id: 125783948575,
    completed: false
  },
  {
    task: 'Cook Dinner',
    id: 125783988888,
    completed: false
  },
  {
    task: 'Do Laundry',
    id: 1257839476543,
    completed: false
  },
  {
    task: 'Hit The Gym',
    id: 1257839445670,
    completed: false
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor () {
    SourceBuffer();
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
      toDoTasks: [...this.state.theTasks, newTask]
    });
  };

  toggleTask = taskId => {

    this.setState({
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
  event.preventDefault();
  this.setState({
    theTasks: this.state.theTasks.filter(task => task.completed === false)
  });
};

  render() {
    return (
      <div>
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
      </div>
      <TodoList
      theTasks={this.state.theTasks}
      toggleTask={this.toggleTask}
      clearCompleted={this.clearCompleted}
      />
      </div>
    );
  }
}
export default App;
