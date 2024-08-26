import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";


/*
useEffect(() => {
    
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  
  }); //This will run infinitely.
 

  useEffect(() => {
    
    setTimeout(() => {
      setCount((count) => count + 1);
      
    }, 1000);
    setName(name+="c")
  },[count]);  // [count] -> run infinite on update of count else one.
 
  useEffect(() => {
    
    setTimeout(() => {
      setCount((count) => 1);
      
    }, 1000);
    setName(name+="c")
  },[count,name]);  // [] -> run only once for count bcz its not updated and infi ite for name cos its updatin.

 
  */


function Timer() {
  
  const [count, setCount] = useState(0);
  let [name, setName] = useState("");

  useEffect(() => {
    
    setTimeout(() => {
      setCount((count) => 1);
      
    }, 1000);
    setName(name+="c")
  },[count]);  // [] -> run only once for count.

  return(
    <>
      <h1>I've rendered {count} times!</h1>;
      <h1>Name : {name}</h1>
    </> 
  )
}

export default Timer