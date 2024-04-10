import React, { useEffect, useState } from 'react'
import logo1 from "../assets/11.jpg";
import logo2 from "../assets/s2.jpg";
import logo3 from "../assets/s3.jpg";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";


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
    useEffect(() => {
        const timer=setTimeout(()=>{
            setfirst((prev)=>(prev+1)%slidedata.length)
        },5500)
        return () => clearTimeout(timer);
    }, [first])
    

        function plus(){    
            setfirst((prev)=>(prev+1)%slidedata.length)
        }
        function minus(){
            setfirst((prev)=> prev === 0 ? slidedata.length - 1 : prev - 1)
        }
  return (
    <div className=' w-full select-none    '>
        <div className=' relative ring-neutral-900   w-[100%] lg:w-[100%] mx-auto  '>
          <img src={slidedata[first].img} alt=""  className=' w-[100%] mx-auto   object-cover   max-h-[40rem] ' />
          <span className=' flex absolute md:text-2xl  z-10 top-[45%]     justify-around gap-[40%]     my-auto    w-[100%]     text-slate-600 opacity-80   mix-blend-screen '>
              <button onClick={plus} className=' relative text-2xl md:text-4xl  lg:text-5xl'><HiChevronLeft  />  </button>
              <button className=' text-2xl md:text-4xl  lg:text-5xl' onClick={minus}> <HiChevronRight/> </button>
          </span>
        </div>
    </div>
  )
}

export default Slide
