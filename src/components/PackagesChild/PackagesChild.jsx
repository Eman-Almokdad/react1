import React from 'react'
import './PackagesChild.css'

const PackagesChild = ({img1 , img2 , title1 , title2 , title3 , title4 , title5 , title6 }) => {
  return (
    <div className=' PackagesChild'>
        <div className='child1'>
            <img src={img1} alt="" />
            <div className='row1'>
                <h4>{title1}</h4>
                <h4>{title2}</h4>
        </div>
        </div>

        <div className='child2'>
            <h1>{title3}</h1>
            <p className='child2-p'>{title4}</p>
            <div className='row3'>
                <p className='row3-p'>{title5}</p>
                <p className='row3-p'><img src={img2} alt="" />{title6}</p>
            </div>
        </div>
    </div>
  )
}

export default PackagesChild