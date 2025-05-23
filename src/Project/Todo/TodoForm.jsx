import React, { useState } from 'react'

const TodoForm = ({onAddTodo}) => {
   const [input,setInput] = useState({});

  const handleInputChange = (value)=>{
    setInput({id: value, content:value,checked:false});
  };

  const handleFormSubmit = (event)=>{
    event.preventDefault();
    onAddTodo(input);
    setInput({id: "", content:"",checked:false});
  }

  return (
    <div>
       <section className='form'>
            <form onSubmit={handleFormSubmit}>
              <div>
                <input 
                type="text" 
                className='todo-input' 
                autoComplete='off' 
                value={input.content} 
                onChange={(e)=>handleInputChange(e.target.value)} />
              </div>
              <div>
                <button type="submit" className='todo-btn'>
                  Add Task
                </button>
              </div>
            </form>
            </section>
    </div>
  )
}

export default TodoForm
