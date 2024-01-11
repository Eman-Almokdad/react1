import React from 'react'
import './CategoryStyle.css'
import CardServ from "./../CardServ/CardServ"

import service_1 from "./../../assets/images/service-1.png"
import service_2 from "./../../assets/images/service-2.png"
import service_3 from "./../../assets/images/service-3.png"
import service_4 from "./../../assets/images/service-4.png"
import Promotion from './../Promotion/Promotion'
import e1 from "./../../assets/images/e1.png";
import e2 from "./../../assets/images/e2.png";


const Category = () => {
    
    const servicesData = [
    {
    title: "Guided Tours",
    image: service_1,
    description:
        "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
    },
    {
    title: "Best Flights Options",
    image: service_2,
    description:
        "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
    },
    {
    title: "Religious Tours",
    image: service_3,
    description:
        "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
    },
    {
    title: "Medical insurance",
    image: service_4,
    description:
        "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
    },
];
return (
    <div className='category'>
        <p className='CATEGORY-p'> CATEGORY</p>
        <h1 className='CATEGORY-h1'>We Offer Best Services</h1>
        <div className='CATEGORY-card'>
        {
                servicesData.map((element , index) =>{return(
                    <CardServ key={index} image={element.image } title={element.title } description={element.description } />
                )})
            } 
        </div>
        <div className='Explore'>
        <Promotion image={e1} title1='Promotion' title2='Explore Nature' btn='View Packages'/>
        <Promotion image={e2} title1='Promotion' title2='Explore Cities' btn='View Packages'/>
        </div>
    </div>
  )
}

export default Category