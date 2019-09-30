import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

const todoData = [
  {
    task:'Deploy portfolio website',
    id:'123',
    completed:false
  },
  {
    task:'Workout',
    id:'1234',
    completed:false
  },
  {
    task:'Grocery shop',
    id:'12345',
    completed:false
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      todoList: todoData
    }
  }

  addItem = taskName => {
    const newItem = {
      task: taskName,
      id:Date.now(),
      completed:false
    };
    this.setState({
      todoList: [...this.state.todoList, newItem]
    })
  }




  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoList={this.state.todoList} />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
