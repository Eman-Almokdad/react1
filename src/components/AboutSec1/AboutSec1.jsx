import React from 'react'
import './AboutSec1.css'

const AboutSec1 = ({img , t1 , t2 , t3 , btn}) => {
  return (
    <div className='AboutSec1'>
        <div className='coll-1 '>
            <h4 className='coll-1-h4 '>{t1}</h4>
            <h1 className='coll-1-h1 text-center'>{t2}</h1>
            <p className='coll-1-p text-center'>{t3}</p>
            <button className='coll-1-btn'>{btn}</button>
        </div>
        <div className='coll-2'>
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default AboutSec1