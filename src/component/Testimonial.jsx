import React, { useState } from "react";

import card1 from "../assets/t1.jpg";
import card2 from "../assets/t2.jpg";
import card3 from "../assets/t3.jpg";
import pic2 from "../assets/logo7.webp";
import pic3 from "../assets/logo8.webp";
import pic4 from "../assets/t1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";





function App() {
  const data = [
    {
      img: card1,
      name: "John | Doe",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vel modi similique, inventore alias sed, facere cupiditate perferendis nulla dolorum tenetur? Iure, "
  },
  {
      img: card2,
      name: "Jane | Smith",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed non mauris vitae erat consequat auctor eu in elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
  },
  {
      img: card3,
      name: "Michael | Johnson",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed non mauris vitae erat consequat auctor eu in elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
  },
  {
      img: pic2,
      name: "Emily | Davis",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed non mauris vitae erat consequat auctor eu in elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
  },
  {
      img: pic2,
      name: "David | Wilson",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed non mauris vitae erat consequat auctor eu in elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
  },
  {
      img: pic3,
      name: "Sarah | Thompson",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed non mauris vitae erat consequat auctor eu in elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
  },
  {
      img: pic4,
      name: "Robert | Anderson",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed non mauris vitae erat consequat auctor eu in elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
  },
    
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 768, // width to change settings
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (

    <div className='w-3/4 m-auto'>
      <div className="mt-20">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="h-[500px] text-black rounded-xl">
            <div className='h-56 flex justify-center items-center rounded-t-xl'>
              <img src={d.img} alt="" className="h-44 w-44 rounded-full object-cover"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl text-[#8E8E8E]  font-semibold">{d.name}</p>
              <p className="text-center text-[#8E8E8E] ">{d.desc}</p>
           
            </div>
          </div>
        ))}
      </Slider>

      </div>
      
    </div>
  );
}



export default App;