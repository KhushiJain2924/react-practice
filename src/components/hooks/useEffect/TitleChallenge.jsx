import React, { use, useEffect, useState } from 'react'
import './index.css'

const TitleChallenge = () => {
  const [count, setCount]= useState(0);
  const [name,setName] = useState("");
  useEffect(()=>{
    console.log(name)
  },[name])

  useEffect(()=>{
    document.title = `count: ${count}`;
  },[count])
  return (
    <>
    <title>count: {count}</title>
      <div className='container effect-container'>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increement</button><br></br>
        <p>Name: {name}</p>
        <input type='text' placeholder='Enter your name' name='name' value={name} onChange={(e)=>setName(e.target.value)} />
      </div>
    </>
  )
}

export default TitleChallenge
