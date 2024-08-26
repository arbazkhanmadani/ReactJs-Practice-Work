import { useContext } from "react"
import {GetContext,StateProvider} from './ContextProvider'


const Child = ()=> {

    const userData = useContext(GetContext)

    return(
        <>
            <h1>name : {userData.name}</h1>
            <h1>age : {userData.age}</h1>
        </>
    )

}

export default Child