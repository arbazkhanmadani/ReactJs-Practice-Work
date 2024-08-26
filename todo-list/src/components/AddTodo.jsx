function AddTodo(){

    let data = {
        age:22,
        name : "arbaz"
    }
    //EventListener in React....................
    //We can directly pass params in EventHandeler, We have to use arrow funvtion in it.
    // like this-> onClick={ ()=> {clickHandeler(data) } }
    const clickHandeler = (event, prm)=>{
        console.log("clicked")
        console.log(prm.age+" "+prm.name)
        console.log(event.target)
    }

    return ( 
         <div className='row'>
            <div className='col-md-4 pb-3'>
                <input type='text' placeholder='enter todo here'></input>
            </div>

            <div className='col-md-4 pb-3'>
                <input type='date' placeholder='enter date here'></input>
            </div>

            <div className='col-md-4 pb-3'>
                <button className='btn btn-success' onClick={(event)=>{clickHandeler(event,data)}}>add</button>
            </div>
    </div>
    
    )
}

export default AddTodo