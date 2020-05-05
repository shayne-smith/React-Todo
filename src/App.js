import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

const todos = [
  {
    task: 'Buy Groceries',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos
    };
  };

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTask]
    });
  };

  toggleTask = taskId => {
    console.log('ss: index.js: App: toggleTask: taskId', taskId);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === taskId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })
  }

  clearCompleted = () => {
    console.log('ss: index.js: App: clearCompleted');
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      })
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>Shayne's MVP Todo List!!</h1>
          <h2>Todo List</h2>
          <TodoList 
            todos={this.state.todos} 
            toggleTask={this.toggleTask}
          />
          <TodoForm 
            addTask={this.addTask} 
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
