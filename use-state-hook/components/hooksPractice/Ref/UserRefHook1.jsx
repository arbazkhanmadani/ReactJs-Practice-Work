import { useState, useEffect, useRef } from "react";

//current => Is a predefined object in useRef returned by it.
function  TrackChanges() {

  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  // It runs as may times as count update = and count update as may times as we give input in input bar
  // bcz as many times the re rendering occur due to changes.
  useEffect(() => {
    count.current = count.current + 1;
    console.log("11")
  },[inputValue]);

  
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}


export default TrackChanges