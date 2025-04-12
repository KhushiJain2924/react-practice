import React from 'react'
import { useState } from 'react';
import '../../App.css';

const UseState = () => {
  const [count,setCount] = useState(0);

  const handleIncrementButton = () =>{
    setCount(()=>{
     return count + 1;
    })
  }

  const handleDecrementButton = () =>{
    setCount(()=>{
     return  count - 1;
    })
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrementButton}>Increment</button>
      <button onClick={handleDecrementButton}>Decrement</button>
      <ChildComponent count = {count}/>
    </div>
  );
};

export default UseState

function ChildComponent({count}){
  console.log("Child Component: ")
  return(
    <>
    <h2>Child Component: {count}</h2>
    </>
  );
}


