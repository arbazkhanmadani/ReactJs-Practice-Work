function TodoItem2(){

    let todoName = 'Go to college'
    let toDoDate = '05/10/2024'

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

export default TodoItem2