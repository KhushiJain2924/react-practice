import { useState } from 'react'
import './ToggleSwitch.css'

export const ToggleSwitch = ()=>{
  const [isOn,setIsOn] = useState(false);

  const handleToggle= ()=>{
    setIsOn(!isOn);
  }
  const checkIsOn = isOn?"on":"off";
  const BGcolor = {backgroundColor:isOn?"#4caf50":"#f44336"};
  return(
    <>
    <div className="toggle-switch"
     style = {BGcolor}
     onClick={handleToggle}>
      <div className={`switch ${checkIsOn}`}>
        <span className="switch-state">{checkIsOn}</span>
      </div>
    </div>
    </>
  )
}