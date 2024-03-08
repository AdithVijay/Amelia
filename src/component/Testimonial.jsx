import React, { useState } from "react";
import logo4 from "../assets/logo4.webp";
import logo5 from "../assets/logo5.webp";
import logo6 from "../assets/logo6.webp";
import logo7 from "../assets/logo7.webp";
import logo8 from "../assets/logo8.webp";
import logo9 from "../assets/logo9.jpg";

const Testimonial = () => {
const slidedata = [
    {
        img: logo4,
        name: "John | Doe",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed non mauris vitae erat consequat auctor eu in elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
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
    <div className="relative top-12  flex ">
      <div>
        <img src={slidedata[first].img} alt="" />
      </div>
      <div className="">
        <h1>{slidedata[first].name}</h1>
        <p>{slidedata[first].desc}</p>
        <button className=" " onClick={plus}>
          {"< "}
        </button>
        <button className=" " onClick={minus}>
          {" > "}
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
