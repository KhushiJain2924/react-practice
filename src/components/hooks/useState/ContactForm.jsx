import React, { useState } from 'react'
import './index.css'

const ContactForm = () => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");

 

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    const contactData = {
      username,
      password,
      message
    };
    console.log(contactData);
  }

  return (
    <>
      <div className='container'>
        <div className='card'>
          <h1>Contact Form</h1>
          <form onSubmit={handleFormSubmit}>
            <label>Username</label>
            <input type="text" name='username'required value={username}  onChange={(e)=>setUsername(e.target.value)}/>

            <label>Password</label>
            <input type='text' name='password'required value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <label>Message</label>
            <textarea type="text" name='message' rows="6" required value={message} onChange={(e)=>setMessage(e.target.value)}/>

            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactForm
