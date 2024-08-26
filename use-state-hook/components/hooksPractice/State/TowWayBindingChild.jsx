import { useState } from "react"


function TodoChild({onTodo}){
    
   

    const[task, setTask] = useState()
    const[date, setDate] = useState()


    const taskHandeler = (event)=>{
        let task = event.target.value
        console.log(task)
        
        setTask(task)
    }
    const dateHandeler = (event)=>{
        let date = event.target.value
        console.log(date)
        setDate(date)
    }
    


    const clickHandler = () =>{
        //coming from parent to get data....two way binding
        onTodo(task,date)
    }

    return(

        <center>
        <div>

            <input type="text" placeholder="enter task" onInput={taskHandeler}></input>
            <input type="date" placeholder="enter date" onInput={dateHandeler}></input>
            <button onClick={clickHandler}> add</button>
        </div>
        </center>
    )
}



export default TodoChild;