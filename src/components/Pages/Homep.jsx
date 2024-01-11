import React from 'react'
import NavBar from '../NavBar/NavBar.jsx'
import Hero from "../Hero/Hero.jsx"
import Category from '../Category/Category.jsx'
import Trendy from '../Trendy/Trendy.jsx'
import Footer from '../Footer/Footer.jsx'

import logo from '../../assets/images/logo.png'
import imgHero from '../../assets/images/header-bg.png'

import linkedin from "../../assets/images/linkedin.svg";
import messenger from "../../assets/images/messenger.svg";
import twitter from "../../assets/images/twitter.svg";
import twoo from "../../assets/images/twoo.svg";
const Homep = () => {
    return (
    <div>
        <NavBar logo={logo} menu={[ {title:"Home" , path: '/'} ,{title:"About" , path: '/About'} ,{title:"Packages" , path: '/Packages'} ,{title:"Services" , path: '/Services'}]} btn='Get in Touch'/>
        <Hero img={imgHero} title="No matter where you’re going to,we’ll take you there" path='Home'/>
        <Category/>
        <Trendy/>
        <Footer img={[linkedin , messenger , twitter , twoo]}/>
    </div>
    )
}

export default Homep