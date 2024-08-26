/*Css Mudularization =>
Mandatory -> Exmple => SameNameAsJSXFileInWhicUse.moduls.css = PropsChildComItem.module.css 
Import    -> 1. styles object is created by React so import by this name only.
import styles from '../css/PropsChildComItem.module.css'
-> it change class and id into random name suffix => item-color_ejhd3j.
*/
import styles from '../css/PropsChildCompItem.module.css'

/*
-> props is a one way Downward[parent-Child] data passing machanism in the form of key=value
-> It convert data into object.
-> As it is an Obj so we can do Desturing. =  FoodItems = ({i1, i2, ......in})
Note : Passing key name = Accepting Prop Argumnet.
-> This are immutable = we cant change having recieved [only Readeble].
*/ 

const FoodItems = (props)=>{

    // <p style={{color:'green',fontSize:'50px'}}>{props.items}</p>
    return (
       
        <p className={styles['item-color']}>{props.items}</p>
    )
}

export default FoodItems