import React from 'react'
import { NavLink } from 'react-router-dom'
import Slide from '../component/Slide'
import Card from '../component/Card'
import Hairwash from "../assets/Hairwash.jpg";
import Wax from "../assets/Wax.jpg";
import Skincare from "../assets/Skincare.png";
import Testimonial from '../component/Testimonial';
const Home = () => {
  return (
    <div>
        <Slide/>
        
        <div className=' mb-10'>  
            <NavLink to="/services" className="bg-black text-white ml-6 ">
              Explore Services
            </NavLink>
        </div>
        <Card img={Hairwash} description={"hairWash"}/>
        <Card img={Wax} description={"Wax"}/>
        <Card img={Skincare} description={"Skin Care"}/>
        <Testimonial/>
    </div>
  )
}

export default Home
