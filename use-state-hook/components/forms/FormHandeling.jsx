import { useState } from "react";

/*
You can control the values of more than one input field by adding a name attribute to each element.
We will initialize our state with an empty object.

To access the fields in the event handler use the "event.target.name" and "event.target.value" syntax.

To update the state, use square brackets [bracket notation] around the property name.

If we use thise - {...values, name: value} instead of this - {...values, [name]: value} then the field will 
not be updated*/

const Form = ({SendFormDataToParent})=>{

    //useState({}) => {} return obj so that it will 
    const[inputs, setInputs] = useState({})

    //handeling Input Field=========================
    const handleChange = (event) => {
       
        const name = event.target.name;
        const value = event.target.value;

        //[name] = > if we wont use [name] then input cant be updated.
        setInputs(values =>(
                    {...values, [name]: value}
                )
        )
      }
     
    //handeling Form Submission=====================
    const handleFormData = (event)=>{
        event.preventDefault();
        console.log(inputs)

        //Sending Data to parent=>Bidirectional Binding...
        SendFormDataToParent(inputs)
        setInputs("");
    }

    return(
        <form onSubmit={handleFormData} >

            <input
                type="text" 
                name="username" 
                value={inputs.username || ""} 
                onChange={handleChange}
            />
            <input
                type="date"
                name="dt"
                placeholder="enter date..."
                value={inputs.dt || ""}
                onChange={handleChange}
                />
           
            <textarea 
                name="txtarea"
                value={inputs.txtarea || ""}
                onChange={handleChange}>
                    Enter the thoughs...
            </textarea>
            
            <input
                type="submit"
                value="submit"
            />
        </form>
    )
}

export default Form