import React from 'react'

const EventPropa = () => {
  function handleGrandParent(event){
    event.stopPropagation();
    console.log("GrandParent clicked")
  }

  function handleParent(){
    console.log("Parent clicked")
  }

  function handleChild(event){
    event.stopPropagation();
    console.log("Child clicked")
  }
  return (
    <>
      <div onClickCapture={handleGrandParent}>
        <div onClickCapture={handleParent}>
          <button onClickCapture={handleChild}>Child Button</button>
        </div>
      </div>
    </>
  )
}

export default EventPropa
