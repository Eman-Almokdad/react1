
import React from 'react'
import './CardServ.CSS'
const CardServ = ({image , title , description}) => {

  return (
    <div className='card-serv'>
        <img src={image} alt="" />
        <h1>{title}</h1>
        <h3>{description}</h3>
    </div>
  )
}

export default CardServ