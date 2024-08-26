import axios from "axios"
import { useEffect, useState } from "react"
import GetAxioshDataChild from './GetAxiosDataByChild'

const GetData = () =>{


const[data, setData] = useState()


useEffect(()=>{

    axios({url:'https://dummyjson.com/products/',method:"post"}).then(data=>setData(data)).catch((err)=>console.log(err))

}, [])

return(
    <>

        <GetAxioshDataChild data={data}/>
    </>
)

}

export default GetData