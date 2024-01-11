import './Footer.css'
import logo from "./../../assets/images/footer-logo.svg";
import linkedin from "./../../assets/images/linkedin.svg";
import messenger from "./../../assets/images/messenger.svg";
import twitter from "./../../assets/images/twitter.svg";
import twoo from "./../../assets/images/twoo.svg";


import footerbg from './../../assets/images/footer-bg.png'
import React from 'react'

const Footer = ({img}) => {
  return (
    <footer className=''style={{backgroundImage: `URL(${footerbg})` }}>
        <div className="perant-footer">
        <div className='container' >
            <img src={logo} alt="" />
            <h5>Travel helps companies manage payments easily. </h5>
            <div className='img-footer'>
            {img.map((element,index) =>{return(
                <img key={index} src={element}/>
            )})}
            </div>
        </div>
        <div className='container'>
            <h3>Company</h3>
            <h5>About Us</h5>
            <h5>Careers</h5>
            <h5>Blog</h5>
            <h5>Pricing</h5>
        </div>
        <div className='container'>
            <h3>Destinations</h3>
            <h5>Maldives</h5>
            <h5>Los Angelas</h5>
            <h5>Las Vegas</h5>
            <h5>Torronto</h5>
        </div>
        </div>
        
        <p className='footer-p'>Copyright @ Xpro 2023 All Rights Reserved.</p>
    </footer>
  )
}

export default Footer