function ConditionRender(){

    let numbers = [1,2,3,4,5,6,7,8,9]

    //Way 1 - if else
    //if(numbers.length===0) return <h1>No data found</h1>

    //way 2 - ternary operator......
    /*<div>
            {numbers.length!=0 ? <h3>{numbers}</h3> : <h1>No data found</h1>}
                ONLY FOR ONE CONDITION.
        </div>
    */
   
        //way 3 - Logical Oprator.......
    /*<> 
        {numbers.length===0 && <h1>No data found</h1>}
        <h1>{numbers}</h1>    
    </>*/

    return (
    
    <> 
        {numbers.length===0 && <h1>No data found</h1>}
        <h1>{numbers}</h1>    
    
    </>
    )
}

export default ConditionRender