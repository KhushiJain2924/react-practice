import React, { useState } from 'react'
import './index.css'

const Login = () => {
  const [user,setUser] = useState({
      username: "",
      password:""
  });

  const handleInput = (e)=>{
    const {name,value} = e.target;
    setUser((prev)=>({...prev,[name]:value}))
  }

  const handleFormSubmit = (e) =>{
    e.preventDefault();

    console.log(user);
  }

  return (
    <>
      <div className='container'>
        <div className='card'>
            <h1>Login Form</h1>
            <form onSubmit={handleFormSubmit}>
            <label>Username</label>
            <input type="text" name='username' value={user.username} onChange={(e)=>handleInput(e)} required/>

            <label>Password</label>
            <input type='password' name='password' value={user.password} onChange={(e)=>handleInput(e)} required/>
            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
