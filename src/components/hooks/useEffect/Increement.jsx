import React, { useEffect, useState } from 'react'

const Increement = () => {
  const [count,setCount] = useState(0);

  useEffect(()=>{
    console.log(`count: ${count}`);
  },[count])

  return (
    <>
      <h1>UseEffect Example 1</h1>
      <p>count: {count}</p>
      <button onClick={()=>setCount(count+1)}>Increement</button>
    </>
  )
}

export default Increement
