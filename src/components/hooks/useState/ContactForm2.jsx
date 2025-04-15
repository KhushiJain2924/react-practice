import React, { useState } from 'react'
import './index.css'

const ContactForm2 = () => {

  const [userData,setUserData] = useState({
    username:"",
    password:"",
    message:""
  });

  const handleInput = (e)=>{
    const {name,value} = e.target;

    setUserData((prev)=>({...prev,[name]:value}));
  }

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    console.log(userData);
  }


  return (
    <div>
      <div className='container'>
        <div className='card'>
          <h1>Contact Form</h1>
          <form onSubmit={handleFormSubmit}>
            <label>Username</label>
            <input type="text" name='username'required value={userData.username}  onChange={(e)=>handleInput(e)}/>

            <label>Password</label>
            <input type='text' name='password'required value={userData.password} onChange={(e)=>handleInput(e)}/>

            <label>Message</label>
            <textarea type="text" name='message' rows="6" required value={userData.message} onChange={(e)=>handleInput(e)}/>

            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm2
