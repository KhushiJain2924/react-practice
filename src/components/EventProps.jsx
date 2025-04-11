import React from 'react'

const EventProps = () => {

  function handleHey(j){
    console.log(`Hey! ${j}`);
  }

  function handleAlert(){
    console.log("Alert is clicked")
  }
  return (
    <div>
      <Welcome onClick={()=>handleHey("Jashan")} onMouseEnter={handleAlert}/>
    </div>
  )
}

export const Welcome = (props)=>{

  function newButton(){
    console.log("New Button is called");
    onClick();
  }

 const {onClick,onMouseEnter} = props;
return(<>
  <button onClick={onClick}>Hey button</button>
  <button onMouseEnter={onMouseEnter}>Alert Button</button>
  <button onKeyDown={newButton}>New button</button>
</>)
}

export default EventProps
