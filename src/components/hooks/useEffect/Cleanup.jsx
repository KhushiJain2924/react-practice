import React, { useEffect, useState } from 'react'
import './index.css';

const Cleanup = () => {
  const [count,setCount] = useState(0);

  useEffect(()=>{
    const timer = setInterval(()=>{
      setCount((prev)=>prev+1);
    },1000)
    return () => clearInterval(timer);
  },[])

  return (
    <>
      <h1>Clean-up function</h1>
      <p>Count: {count}</p>
    </>
  )
}

export default Cleanup
