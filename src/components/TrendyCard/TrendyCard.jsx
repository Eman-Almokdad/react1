import './TrendyCard.css'
import React from 'react'

const TrendyCard = ({img1 , img2 , imgbag , title1 , imguserAvatar , title2 , title3 , imgstar , title4 , btn1 }) => {
  return (
    <div className='TrendyCard'>
        <div className='TrendyCard-child1'>
        <img src={img1} alt="" className='img1'/>
        <img src={img2} alt="" className='flag' />
        </div>
        
        <div className='TrendyCard-child2'>
            <div className='child1'>
                <span>
                    <img src={imgbag} alt="" className='ml-9'/>
                    {title1}
                    
                </span>
                <span>
                    <img src={imguserAvatar} alt="" className='ml-9'/>
                    {title2}
                </span>
            </div>
            <div className='child3'>
                <h3>{title3}</h3>
                <div>
                <img src={imgstar} alt="star" />
                <img src={imgstar} alt="star" />
                <img src={imgstar} alt="star" />
                <img src={imgstar} alt="star" />
                <img src={imgstar} alt="star" />
                </div>

            </div>
            <p className='decr'>{title4}</p>
            <button>{btn1}</button>
        </div>

    </div>
  )
}

export default TrendyCard