/*
-> Children is a special props which is used to pass html elments in react component 
-> all the element is stored in in built "children" object prop.
-> We can also pas AttributeProp [props] with children prop.
*/

function ParentComponent({AttributeProp, children}){

    return (
        <div>
            <h1>{AttributeProp}</h1>
            {children}</div>
    )
}


export default ParentComponent