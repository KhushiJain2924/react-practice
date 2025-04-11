import { useState } from "react"

export const TodoPrac = () =>{
  const [input, setInput] = useState("");
  const [task,setTask] = useState([]);

  const handleInput = (value) =>{
    setInput(value);
  }

  const handleFormSubmit = (input) =>{
    if(!input) return;
    if(task.includes(input)) return;
    setTask((prevTask)=>[...prevTask,input]); 
  }

  const handleDeleteItem = (value)=>{
    const updatedTask = task.filter((curTask)=>curTask!==value);
    setTask(updatedTask);
  }

  const handleDeleteAll = () =>{
    setTask([]);
  }

  return (
    <>
    <div>
      <h1>To-do List</h1>
      <form onSubmit={handleFormSubmit}>
      <input 
      type="text"
      placeholder="Enter a Task" 
      value={input}
      onChange={(e)=>handleInput(e.target.value)}/>
      <button type="submit">Add a Task</button>
      </form>
    </div>
    <div>
      <ul>
    {task.map((curTask,index)=>{
     return( <li key={index}>
        <span>{curTask}</span>
        <buuton>Done</buuton>
        <button onClick={()=>handleDeleteItem(curTask)}>Delete</button>
      </li>
    )})}
      </ul>
    </div>
    <div>
      <button onClick={handleDeleteAll}>Clear All</button>
    </div>
    </>
  )
}