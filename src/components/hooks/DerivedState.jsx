import { useState } from "react"

export const UseStateProb =()=>{

  const [user,setUser] = useState([
    {name:"Khushi",age:24},
    {name:"Jashan",age:29},
    {name: "Alka",age:39},
    {name: "Satish",age:50},
  ]);
  const TotalUser = user.length;
  const AverageAge = user.reduce((accum,curElem)=>accum+curElem.age,0)/TotalUser;
  return(
  <>
  <h1>Users List</h1>
  <ul>
    {user.map((user)=>{
      return <>
      <li>
        {user.name} - {user.age} years old
      </li>
      </>
    })}
  </ul>
  <p>Total User: {TotalUser}</p>
  <p>Average Age: {AverageAge}</p>
  </>
)}