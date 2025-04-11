import { useState } from "react"

export const LiftingState = () =>{
  const [name,setName] = useState("");
  return(
  <>
  <InputState name={name} setName={setName}/>
  <DisplayState name={name}/>
  </>
)}

const InputState= ({name,setName})=>{
  
  return(
  <>
  <input type="text" placeholder="Enter your Name: " value={name} onChange={(e)=>setName(e.target.value)}/>
  </>
)}

const DisplayState = ({name}) =>{
  return(
    <>
    <p>My name is: {name} </p>
    </>
  )
}