import './App.css'
import Button from '../components/hooksPractice/State/ParentComponent'
import Todo from '../components/hooksPractice/State/TwoWayBinding'
import ParentForm from '../components/forms/FormHandelingParent'
import Nav from '../components/routs/NavbarPage'
import GetDataByFetch from '../components/fetchNaxios/fechApi'
import GetDataByAxios from '../components/fetchNaxios/AxiosApi'
import Timer from '../components/hooksPractice/Effect/UseEffectHook'
import {StateProvider} from '../components/hooksPractice/Context/ContextProvider'
import UseContextParent from '../components/hooksPractice/Context/ContextParent'
import UseRef1  from '../components/hooksPractice/Ref/UserRefHook1'
import UserRef2 from '../components/hooksPractice/Ref/UseRefHook2'
import WithoutUseMemoHook from '../components/hooksPractice/Memo/WithoutUseMomo'

function App() {
  
    console.log("App")
    //<Button name='Arbaz Khan' />
    //<Todo/>
    //<ParentForm></ParentForm>
    // <Nav/>
    //<GetDataByAxios/>
    //<GetDataByFetch/>
     //<Timer /> 
     //<StateProvider/>
     //<UseContextParent/> 
     //<UseRef1></UseRef1>      
     //<UserRef2></UserRef2>   
    
     return(
        <>

         <WithoutUseMemoHook/>
         
        </>
    )
}

export default App
