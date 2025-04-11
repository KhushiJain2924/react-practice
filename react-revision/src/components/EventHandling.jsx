import React from 'react'

const EventHandling = () => {
  function handleButton(j){
    alert(`Hey! ${j}, how's you`)
  }

  return (
    <div>
      <button onClick={()=>{handleButton("Jashan")}}>Click me</button>
    </div>
  )
}

export default EventHandling
