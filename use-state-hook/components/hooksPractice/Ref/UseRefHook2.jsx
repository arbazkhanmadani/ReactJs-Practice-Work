import { useRef } from "react";

function AccessDOMElement() {

   /*
    Here with the help of useRef() => We are accesing input field directly withput useing useState
                                      And updating its state. "Kaam Asaan"
    ref =  giving referce of created useRef to input filed.
   */ 
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.style.backgroundColor = 'red'
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}


export default AccessDOMElement