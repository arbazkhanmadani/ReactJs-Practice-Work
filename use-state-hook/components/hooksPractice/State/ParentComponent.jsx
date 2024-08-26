import { useState } from "react";

function Button(props){


    const data = {
        age:22
    }

    let count = 0;
    const[name, setName] = useState("name")

    const clickHandle = (event,dataRec) =>{
        count++;
        console.log(event.target)
        setName(props.name)
        console.log(count)
    }

    return(
        <>

            <input type="text" placeholder="enter your name..." value={name}></input>
            <button onClick={(event)=>{clickHandle(event,data)}}>Click</button>   
        
        
        </>
    )


}

export default Button;