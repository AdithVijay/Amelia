import React from 'react'
import Hairwash from "../assets/Hairwash.jpg";
import Wax from "../assets/Wax.jpg";
import { NavLink } from 'react-router-dom'
const Explorenow = () => {
  return (
    <div>      
        <div>      {/* first explore nowww with certain comments */}   
            <NavLink to="/services" className="bg-black text-white ml-6 ">
              Explore Services
            </NavLink>
        </div>
    <div className=' flex'>
        <div>
            <img className=' w-64 mt-14'src={Hairwash} alt="" />
            <h1 className=' pt-5 pb-5'>Hair Care</h1>
            <NavLink to="/services" className="bg-black text-white rounded-sm md:text-base text-sm w-24 pl-3 p-1">
                Explore Services
            </NavLink>
        </div>
        <div className=''>
            <img className=' w-64 mt-14'src={Wax} alt="" />
            <h1 className=' pt-5 pb-5'>Hair Care</h1>
            <NavLink to="/services" className="bg-black text-white rounded-sm md:text-base text-sm w-24 pl-3 p-1">
                Explore Services
            </NavLink>
        </div>
    </div>
    </div>
  )
}

export default Explorenow
