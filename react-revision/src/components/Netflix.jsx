import React from 'react'
import seriesData from '../api/seriesData.json'
import { SeriesCard } from './SeriesCard';
import './Netflix.css'



const Netflix = () => {
  return (
    <ul>
      <p className='heading'>List of Best Netflix Series</p>
      <div className='card'>
    {seriesData.map((curElem)=>{
      return <SeriesCard key={curElem.id} curElem={curElem}/>
    })}
  
    </div>
    </ul>
  )
}

export default Netflix
