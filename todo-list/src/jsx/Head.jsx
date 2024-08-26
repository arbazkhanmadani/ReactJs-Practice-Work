import AppName from '../components/AppName';
import AddTodo from '../components/AddTodo';
import TodoItem1 from '../components/TodoItem1';
import TodoItem2 from '../components/TodoItem2';
import ConditionRender from '../components/ConditionalRendering';
import ParentProp from '../components/PropParentCompItem'
import ParentComponent from '../components/PassingChildToParentComp';

import '../css/Head.css'

const HeadComponent = ()=>{

    return (
        <center className='todo-container'>
           <div className='container text-container'>
                <AppName/>
                <AddTodo/><hr/>
                <TodoItem1/>
                <TodoItem2/> 
                
               </div>

               <hr/>
               <div>
                    <ConditionRender/>
                    <ParentProp/>
                    <ParentComponent AttributeProp='This is general attribute prop prop'>
                        <h1>This is Passing child element in Parent Component</h1>
                        <p>Lorem Ispum ---------sdsfjdsfsgjvdifjdfiggjvifjeafiurgjvrigrj</p>
                    </ParentComponent>
               </div>
        </center>
    )
}

export default HeadComponent;