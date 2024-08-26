function todoItem1(){


    let todoName = 'Buy milk'
    //We can pass onjects in jsx directly thats why converted into string.
    let toDoDate = new Date().toLocaleDateString()

    return(
    <div className='row'>
    <div className='col-md-4 pb-3'>
         {todoName}
      </div>

      <div className='col-md-4 pb-3'>
          {toDoDate}
      </div>

      <div className='col-md-4 pb-3'>
          <button className='btn btn-danger'>delete</button>
      </div>
   </div>
    )
}

export default todoItem1