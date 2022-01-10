import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './style.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
       input: '',
       list: []
    }
  }
  change = (e) => {
    this.setState({
        ...this.state,
        input: e.target.value
    }) 
}
  add = (task) => {
   let newTask = {
    task: task,
    id: Date.now(),
    completed: false,
   }
    this.setState({
      ...this.state,
      input: '',
      list: [...this.state.list, newTask]
      })
  }
  handleToggle = (toggled) => {
    this.setState({
      ...this.state,
      list: this.state.list.map(task => {
        if(task.id === toggled.id){
          return({
            ...task,
            completed: !task.completed,
          })
        } else {
          return task;
        }
      })
    })
  }
  handleClear = () => {
    this.setState({
      ...this.state,
      list: this.state.list.filter(task => {
        return !task.completed
      })
    })
  }
  clearAll = () => {
    this.setState({
      ...this.state,
      list: []
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm input={this.state.input} change={this.change} add={this.add}/>
        <TodoList toggle={this.handleToggle} list={this.state.list}/>
        <button onClick={this.handleClear}>Clear Complete</button>
        <button onClick={this.clearAll}>Clear all tasks</button>
      </div>
    );
  }
}

export default App;
