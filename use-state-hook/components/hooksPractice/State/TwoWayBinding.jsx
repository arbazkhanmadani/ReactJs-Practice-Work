import { useState } from 'react'
import TodoChild from './TowWayBindingChild'
import TodoItem  from './TodoChildItem'

function TodoParent(){


    const todoData = [
        {
           task:"no",
           date:"22/22/222"
         }
    ]
    
    const[todoItems, setTodoItems] =  useState(todoData)
    //task , Date => coming from parent....
    const addTodo = (task1,date1) =>{
        console.log(task1, " : ", date1)
        //setting data coming from child to this to send TodoChildItem component....
        let newTodoItems = [...todoItems, {task:task1, date:date1},]
        setTodoItems(newTodoItems)
       

    }; console.log(todoItems)

    return(

        <div>
            <TodoChild onTodo={addTodo}></TodoChild>
            <TodoItem items={todoItems}></TodoItem>
        </div>
    )

}

export default TodoParent