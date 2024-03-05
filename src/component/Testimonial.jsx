import React, { useState } from 'react'
import logo4 from "../assets/logo4.webp";
import logo5 from "../assets/logo5.webp";
import logo6 from "../assets/logo6.webp";
import logo7 from "../assets/logo7.webp";
import logo8 from "../assets/logo8.webp";
import logo9 from "../assets/logo9.jpg";

const Testimonial = () => {
    const slidedata=[
        {
            img:logo4
        },
        {
            img:logo5
        },
        {
            img:logo6
        },
        {
            img:logo7
        },
        {
            img:logo8
        },
        {
            img:logo9
        },
        {
            img:logo6
        },
    ]
    const [first, setfirst] = useState(0)
        function plus(){
            setfirst((prev)=>(prev+1)%slidedata.length)
        }
        function minus(){
            setfirst((prev)=> prev === 0 ? slidedata.length - 1 : prev - 1)
        }
  return (
    <div>
      <img src={slidedata[first].img} alt="" />
      <button className=' pl-6' onClick={plus}> + </button>
      <button className=' ml-10 pl-20' onClick={minus}>-</button>
    </div>
  )
}

export default Testimonial