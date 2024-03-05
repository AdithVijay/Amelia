import React, { useState } from 'react'
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";
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
    <div>
      <img src={slidedata[first].img} alt="" />
      <button onClick={plus}> + </button>
      <button className=' ml-10 pl-20' onClick={minus}>-</button>
    </div>
  )
}

export default Slide
