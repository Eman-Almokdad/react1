import React from 'react'
import NavBar from '../NavBar/NavBar.jsx'
import Hero from "../Hero/Hero.jsx"
import Footer from '../Footer/Footer.jsx'
import PackagesChild from '../PackagesChild/PackagesChild.jsx'

import logo from '../../assets/images/logo.png'
import imgHero from '../../assets/images/packages-bg.png'
import city1 from '../../assets/images/city-1.png'
import city2 from '../../assets/images/city-2.png'
import city3 from '../../assets/images/city-3.png'
import city4 from '../../assets/images/city-4.png'
import city5 from '../../assets/images/city-5.png'
import city6 from '../../assets/images/city-6.png'

import linkedin from "../../assets/images/linkedin.svg";
import messenger from "../../assets/images/messenger.svg";
import twitter from "../../assets/images/twitter.svg";
import twoo from "../../assets/images/twoo.svg";
import Vector from '../../assets/images/Vector.svg'

const Packages = () => {
  const cardsPackages =[
    {
    img1: city1,
    img2: Vector,
    title1: "27, September 2023",
    title2:"30+ People",
    title3:"Maldives",
    title4: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
    title5:"3000 $",
    title6:"5.0"
    },
    {
    img1: city2,
    img2: Vector,
    title1: "13, October 2023",
    title2:"120+ People",
    title3:"Switzerland",
    title4: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
    title5:"1290 $",
    title6:"4.9"
    },
    {
    img1: city3,
    img2: Vector,
    title1: "2, November 2022",
    title2:"139+ People",
    title3:"Berlin",
    title4: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
    title5:"2790 $",
    title6:"5.0"
    },
    {
    img1: city4,
    img2: Vector,
    title1: "14, December 2022",
    title2:"50+ People",
    title3:"Torronto",
    title4: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
    title5:"1110 $",
    title6:"4.0"
    },
    {
    img1: city5,
    img2: Vector,
    title1: "20, September 2022",
    title2:"80+ People",
    title3:"Baku",
    title4: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
    title5:"1220 $",
    title6:"4.5"
    },
    {
    img1: city6,
    img2: Vector,
    title1: "27, August 2022",
    title2:"100+ People",
    title3:"Chinese",
    title4: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
    title5:"2500 $",
    title6:"5.0"
    },
    
];
  return (
    <div>
        <NavBar logo={logo} menu={[ {title:"Home" , path: '/'} ,{title:"About" , path: '/About'} ,{title:"Packages" , path: '/Packages'} ,{title:"Services" , path: '/Services'}]} btn='Get in Touch'/>
        <Hero img={imgHero} title="Travel With Us"  path ='Packages' />
        <div className="PackagesContainer">
        {
                cardsPackages.map((element , index) =>{return(
                    <PackagesChild key={index} img1={element.img1 } 
                    title1={element.title1}  title2={element.title2}  title3={element.title3}  title4={element.title4}  title5={element.title5} img2={element.img2 } title6={element.title6}  />
                )})
            } 
        </div>
        <Footer img={[linkedin , messenger , twitter , twoo]}/>
    </div>
  )
}

export default Packages