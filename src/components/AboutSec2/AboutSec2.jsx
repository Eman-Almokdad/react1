import React from 'react'
import './AboutSec2.css'

const AboutSec2 = ({img , title}) => {
  return (
    <div className='AboutSec2' style={{backgroundImage: `URL(${img})` }}>
        <div className='child1'>
            <h1>{title}</h1>
            <div className='square'>
                <div className='triangle-right'></div>
            </div>
                
        </div>
    </div>
  )
}

export default AboutSec2