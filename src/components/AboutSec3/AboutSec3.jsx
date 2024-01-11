import React from 'react'
import './AboutSec3.css'
const AboutSec3 = ({img , t1 , t2 , t3 , p1 , p2 , p3 , p4 , p5}) => {
  return (
    <div className='AboutSec3'>
        <div className='coll1' >
            <img src={img} alt="" />
        </div>
        <div className='coll2'>
            <h4 className='coll2-h4 center'>{t1}</h4>
            <h1 className='coll2-h1 center'>{t2}</h1>
            <p className='coll2-p center'>{t3}</p>
            <div className='group' >
                <div className='ch-group'>
                    <h6 className='ch-group-h6'>{p1} <span>{p5}</span></h6>
                    <h6 className='ch-group-hh'>{p2}</h6>
                </div>
                <div className='ch-group'>
                    <h6 className='ch-group-h6'>{p3} <span>{p5}</span> </h6>
                    <h6 className='ch-group-hh'>{p4}</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSec3