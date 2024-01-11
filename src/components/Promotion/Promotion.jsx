import './Promotion.css'
import React from 'react'

const Promotion = ({image , title1 , title2 , btn}) => {
  return (
    <div className='Promotion' style={{backgroundImage:`URL(${image})`}}>
        <h3>{title1}</h3>
        <h1>{title2}</h1>
        <button>{btn}</button>
        
    </div>
  )
}

export default Promotion