import './Trendy.css'
import TrendyCard from "../TrendyCard/TrendyCard";

import n1 from "./../../assets/images/n1.png";
import n2 from "./../../assets/images/n2.png";
import n3 from "./../../assets/images/n3.png";
import flag1 from "./../../assets/images/flag-1.png";
import flag2 from "./../../assets/images/flag-2.png";
import flag3 from "./../../assets/images/flag-3.png";
import bag from "./../../assets/images/bag.svg";
import userAvatar from "./../../assets/images/user-avatar.svg";
import star from "./../../assets/images/bi_star-fill.svg";

import React from 'react'

const Trendy = () => {
    const trendingcard =[
        {
        img1: n1,
        img2: flag1,
        imgbag: bag,
        title1: "8 days",
        imguserAvatar: userAvatar,
        title2:"30 People going",
        title3:"Switzerland",
        imgstar:star,
        title4: "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
        btn1:"Explore Now"
        },
        {
            img1: n2,
            img2: flag2,
            imgbag: bag,
            title1: "8 days",
            imguserAvatar: userAvatar,
            title2:"60 People going",
            title3:"Amazon  ",
            imgstar:star,
            title4: "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
            btn1:"Explore Now"
            },
            {
                img1: n3,
                img2: flag3,
                imgbag: bag,
                title1: "8 days",
                imguserAvatar: userAvatar,
                title2:"120 People going",
                title3:"Giza",
                imgstar:star,
                title4: "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
                btn1:"Explore Now"
                },
        
    ];
  return (
    <div className="Trendy">
        <p className='CATEGORY-p'> trendy</p>
        <h1 className='trendy-h1'>Our Trending Tour Packages</h1>
        <div className="TrendyCards">
        {
                trendingcard.map((element , index) =>{return(
                    <TrendyCard key={index} img1={element.img1 } img2={element.img2 } imgbag={element.imgbag }
                    title1={element.title1} imguserAvatar={element.imguserAvatar} title2={element.title2} 
                    title3={element.title3} imgstar={element.imgstar} title4={element.title4} btn1={element.btn1}
                    />
                )})
            } 
        </div>
    </div>
  )
}

export default Trendy