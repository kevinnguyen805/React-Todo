// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// receives your Todos array and iterates over the list generating a new <todo/> for each element
import React from 'react'
import Todo from './Todo'

const TodoList = props => {

     console.log(props.todoList)
     return(
          <div>
               <p>Hello I am the TodoList</p>
               <Todo todoList={props.todoList}/>
          </div>
     )
}

export default TodoList