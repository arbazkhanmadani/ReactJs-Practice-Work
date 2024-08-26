import { useState } from 'react'
import Form from '../forms/FormHandeling'
import ShowFormData  from './ShowFormData'


const ParentForm = () =>{

      const[showData, setShowData] = useState()
    const FormData = (data)=>{

        console.log(data)
        setShowData(data)
    }

    return(
        
        <>
            <Form SendFormDataToParent={FormData}></Form>
            <ShowFormData ShowFormData={showData}></ShowFormData>
            
        </>
    )
}

export default ParentForm;