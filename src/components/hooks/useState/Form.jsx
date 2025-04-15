import React, { useState } from 'react'
import './index.css'

const Form = () => {
  const [user,setuser] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    phoneNumber:""
  });

  const handleInputChange = (e)=>{ 
    const {name,value} = e.target;

    setuser((prev) => ({...prev,[name]:value}));
  };

  const handleFormSubmit = (event)=>{
    event.preventDefault();
    console.log(user);
  }
  
  

  return (
    <>
    <form onSubmit={handleFormSubmit}>
      <div className='container'>
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <label><b>First Name</b></label><br/>

      <input type="text" placeholder='Enter your First Name' name='firstName' required value={user.firstName} onChange={handleInputChange}></input>

      <label><b>Last Name</b></label><br/>
      <input type="text" placeholder='Enter your Last Name' name='lastName' required value={user.lastName} onChange={handleInputChange}></input>

      <label><b>Email</b></label><br/>
      <input type="email" placeholder='Enter your Email' name='email' required value={user.email} onChange={handleInputChange}></input>

      <label><b>Password</b></label><br/>
      <input type="password" name='password'  placeholder='**********' required value={user.password} onChange={handleInputChange}></input>

      <label><b>Phone Number</b></label><br/>
      <input type="text" placeholder='Enter your Phone Number' name='phoneNumber' required value={user.phoneNumber} onChange={handleInputChange}></input>
      <p>By creating an account you agree to our <span style={{color:"rgb(13, 133, 185)"}}>Terms & Privacy</span></p>

      <button type='submit'>Sign Up</button>
      </div>
      </form>
    </>
  );
};

export default Form
