// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// receives your Todos array and iterates over the list generating a new <todo/> for each element
import React from 'react'
import Todo from './Todo'

const TodoList = props => {

     // console.log(props.todoList)
     return(
          <div>
               <h1>Todo List</h1>
               <Todo todoList={props.todoList} toggleTask={props.toggleTask}/>
               <button onClick={props.clearFinished}>Clear finished tasks</button>
          </div>
     )
}

export default TodoList