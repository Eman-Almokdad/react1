import  './NavBarStyle.css'
import menuicon from "./../../assets/images/Menu.svg";
import esc from "./../../assets/images/esc.svg";
import { useState } from 'react';

import { NavLink } from 'react-router-dom';

const NavBar = ({ logo ,menu , btn }) => {
  const [first, setfirst] = useState(false)
  return (
    <nav>
        <div className='nav'>
        <img src={logo} alt="" />
        <ul className='ul-nav'>
            {menu.map((element,index) =>{return(
                <li key={index}><NavLink to={element.path} className={({ isActive}) =>
                isActive ? "active" : ""
              }>{element.title}</NavLink></li>
            )})}
        </ul>
        <button className='nav-btn'>{btn}</button>
        <button className='menu-icon'onClick={()=>{setfirst(!first)}}>
          <div className='sidbar' style={{display: (first)? "block" : "none"}}>
            <img src= {esc} alt="" />
            <ul >
            {menu.map((element,index) =>{return(
                <li key={index}><NavLink to={element.path} className={({ isActive}) =>
                isActive ? "active" : ""
              }>{element.title}</NavLink></li>
            )})}
            </ul>
            <button className='side-btn'>{btn}</button>
          </div>
        <img src={menuicon} alt="" />
        </button>
        
        </div>

    </nav>
  )
}

export default NavBar