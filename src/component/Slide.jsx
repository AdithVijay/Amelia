import React, { useState } from 'react'
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";


const Slide = () => {
    const slidedata=[
        {
            img:logo1
        },
        {
            img:logo2
        },
        {
            img:logo3
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
    <div className=' w-full   '>
        <div className=' relative ring-neutral-900   w-[100%] lg:w-[70%] mx-auto '>
          <img src={slidedata[first].img} alt=""  className=' w-[80%] mx-auto  aspect-video ' />
          <span className=' flex absolute md:text-2xl  z-10 top-[45%]     justify-around gap-[40%]     my-auto    w-[100%]     text-slate-600 opacity-80   mix-blend-screen '>
              <button onClick={plus} className=' relative text-2xl md:text-4xl  lg:text-5xl'><IoIosArrowDropleft  />  </button>
              <button className=' text-2xl md:text-4xl  lg:text-5xl' onClick={minus}> <IoIosArrowDropright/> </button>
          </span>
        </div>
    </div>
  )
}

export default Slide
