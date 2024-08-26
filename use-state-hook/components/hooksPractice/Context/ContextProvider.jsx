//It provides the global states to all childs.
import { Children, createContext } from "react"

//Use to create Context.....
 const GetContext = createContext()

const StateProvider = ({ Children })=>{
    
    
    const userData = {
        name:"Arbaz",
        age:22
    }

    //<getContext.Provider value={data}/> => Context provider.
    return(
        <>
            <GetContext.Provider value={userData}>{Children}</GetContext.Provider>
        </>
    )
}

export {GetContext, StateProvider}