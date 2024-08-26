import FoodItems from "./PropsChildCompItem"

const ParentProp = () =>{

    let fruits = ["mango","orange", "kiwi"]

    return(
        <FoodItems items={fruits}></FoodItems>  
       )
}

export default ParentProp