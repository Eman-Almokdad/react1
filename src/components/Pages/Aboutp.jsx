import React from 'react'
import NavBar from '../NavBar/NavBar.jsx'
import Hero from "../Hero/Hero.jsx"
import AboutSec1 from '../AboutSec1/AboutSec1.jsx'
import AboutSec2 from '../AboutSec2/AboutSec2.jsx'
import AboutSec3 from '../AboutSec3/AboutSec3.jsx'
import Footer from '../Footer/Footer.jsx'


import logo from '../../assets/images/logo.png'
import imgHero from '../../assets/images/about-bg.png'
import promotionImg from '../../assets/images/promotion_img.png'
import videobanner from '../../assets/images/video-banner.png'
import TourPlansimg from '../../assets/images/TourPlans-img.png'

import linkedin from "../../assets/images/linkedin.svg";
import messenger from "../../assets/images/messenger.svg";
import twitter from "../../assets/images/twitter.svg";
import twoo from "../../assets/images/twoo.svg";





const Aboutp = () => {
  return (
    <div>
        <NavBar logo={logo} menu={[ {title:"Home" , path: '/'} ,{title:"About" , path: '/About'} ,{title:"Packages" , path: '/Packages'} ,{title:"Services" , path: '/Services'}]} btn='Get in Touch'/>
        <Hero img={imgHero} title="About Us"  path ='about' />
        <AboutSec1 img={promotionImg} t1="Promotion" t2="We Provide You Best Europe Sightseeing Tours" t3="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!" btn="View Packages" />
        <AboutSec2 img={videobanner} title='Wanderlust'/>
        <AboutSec3 img={TourPlansimg} t1="Trend" t2='Our Popular Tour Plans' t3='Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium.' p1='78' p2='Vacations' p3='55' p4='Honeymoon' p5='%'/>
        <Footer img={[linkedin , messenger , twitter , twoo]}/>

    </div>
  )
}

export default Aboutp