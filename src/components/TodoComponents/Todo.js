import React from 'react';

const Todo = props => {
     console.log(props.todoList)

     // console.log(props.toggleTask)

     return(
          <div>
          {
               props.todoList.map(item => {
                    return(
                         <div key={item.id} onClick={() => props.toggleTask(item.id)}>
                              <p>{item.task}</p>
                              <p>{item.completed}</p>
                         </div>
                    )
               })
          }
          </div>
     )
}
export default Todo