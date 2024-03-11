import React, { useState } from "react";
import logo4 from "../assets/logo4.webp";
import logo5 from "../assets/logo5.webp";
import logo6 from "../assets/logo6.webp";
import logo7 from "../assets/logo7.webp";
import logo8 from "../assets/logo8.webp";
import logo9 from "../assets/logo9.jpg";
import { FaRegArrowAltCircleLeft,FaRegArrowAltCircleRight } from "react-icons/fa";

const Testimonial = () => {
const slidedata = [
    {
        img: logo4,
        name: "John | Doe",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vel modi similique, inventore alias sed, facere cupiditate perferendis nulla dolorum tenetur? Iure, voluptatibus minima itaque nesciunt accusantium nulla quo voluptate Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ullam velit aperiam non, exercitationem laudantium voluptatum beatae, consectetur ipsa neque esse, tempora illo enim quidem iusto quam ducimus a ab!Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vel modi similique, inventore alias sed, facere cupiditate perferendis nulla dolorum tenetur? Iure, voluptatibus minima itaque nesciunt accusantium nulla quo voluptate Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ullam velit aperiam non, exercitationem laudantium voluptatum beatae, consectetur ipsa neque esse, tempora illo enim quidem iusto quam ducimus a ab!"
    },
    {
        img: logo5,
        name: "Jane | Smith",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed non mauris vitae erat consequat auctor eu in elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
    },
    {
        img: logo6,
        name: "Michael | Johnson",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed non mauris vitae erat consequat auctor eu in elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
    },
    {
        img: logo7,
        name: "Emily | Davis",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed non mauris vitae erat consequat auctor eu in elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
    },
    {
        img: logo8,
        name: "David | Wilson",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed non mauris vitae erat consequat auctor eu in elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
    },
    {
        img: logo9,
        name: "Sarah | Thompson",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed non mauris vitae erat consequat auctor eu in elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
    },
    {
        img: logo6,
        name: "Robert | Anderson",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed non mauris vitae erat consequat auctor eu in elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
    },
];
  const [first, setfirst] = useState(0);
  function plus() {
    setfirst((prev) => (prev + 1) % slidedata.length);
  }
  function minus() {
    setfirst((prev) => (prev === 0 ? slidedata.length - 1 : prev - 1));
  }
  return (
    <div className="relative top-12  lg:right-40 flex md:flex-row flex-col   pb-28 w-full    md:justify-center ">
      <div className="   flex justify-center md:justify-end   overflow-hidden">
        <img src={slidedata[first].img} alt=""  className=" relative   lg:w-[60%]  w-[90%]  "/>
      </div>
      <div className=" md:w-[80%] lg:w-[40%] flex flex-col gap-6  items-center  pt-2     ">
        <h1 className="text-2xl lg:text-4xl ">{slidedata[first].name}</h1>
        <p className=" font-thin  lg:text-xl w-[90%]  md:text-justify   ">{slidedata[first].desc}</p>
        <div className=" flex gap-9 text-4xl   text-slate-600 opacity-80      ">
          <button className=" " onClick={plus}>
           <FaRegArrowAltCircleLeft/>
          </button>
          <button className=" " onClick={minus}>
            <FaRegArrowAltCircleRight/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
