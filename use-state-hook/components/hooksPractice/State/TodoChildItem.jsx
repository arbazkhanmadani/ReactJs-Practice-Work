function TodoItem({task,date}){

       // console.log(items[0].task ||items[1].task +"===============")

  
    return(

        <center>

            <>  
                <p>{task}</p>
                <p>{date}</p>
                <button>Delete</button>
            </>

        </center>
    )
}

export default TodoItem