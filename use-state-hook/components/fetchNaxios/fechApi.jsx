import { useEffect, useState } from "react"
import GetFetchDataChild from './GetFetchDataChild'

const getDataByFetch = ()=>{


    const [data, setData] = useState()

    const getData = async()=>{

        const resp = await fetch('https://dummyjson.com/products/', {method:"get"})
       setData(await resp.json())
    }

    useEffect(()=>{getData()},[])

    return(
    <>

        <GetFetchDataChild data={data}/>

    </>
    )
}

export default getDataByFetch;