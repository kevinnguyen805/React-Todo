import React from 'react';

const Todo = props => {
     console.log(props.todoList)

     // console.log(props.toggleTask)

     const completion = (item) => {
          if(item.completed === true){
               return 'completed';
          }
          else{
               return 'uncompleted'
          }
     }

     return(
          <div>
          {
               props.todoList.map(item => {
                    return(
                         <div 
                         className={completion}
                          key={item.id} onClick={() => props.toggleTask(item.id)}>
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