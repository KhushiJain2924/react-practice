import React, { useState } from 'react'
import './ShortCircuit.css'

const ShortCircuit = () => {
  const [login,setLogin] = useState(false);
  const [user,setUser] = useState("");

  const isClicked = {backgroundColor:login?" #008000":"#000000"};
  const isUser = {backgroundColor:user?" #008000":"#000000"}
  return (

    <>
      <h1>Welcome to the ShortCircuit Evaluation!</h1>

      {login && <p>You are logged in!</p>}

      {user?`Hello ${user}`:"Plz Login in!"}

      <div className='buttons-div'>
        <button onClick={()=>setLogin(!login)} style={isClicked}>Toggle Login state</button>
        <button onClick={()=>setUser("Khushi Jain")} style={isUser}>Set User</button>
        <button onClick={()=>setUser("")}>Clear User</button>
      </div>
    </>
  )
}

export default ShortCircuit
