import React from "react";
import { NavLink } from "react-router-dom";
import Slide from "../component/Slide";
import Card from "../component/Card";
import Hairwash from "../assets/Hairwash.jpg";
import Wax from "../assets/Wax.jpg";
import Skincare from "../assets/Skincare.png";
import mainicure from '../assets/manicure1.png'

import Testimonial from "../component/Testimonial";
import Vedio from "../component/Vedio";
import Footer from "../component/Footer";
import { motion } from "framer-motion"
const Home = () => {
  return (
    <div className="">
      <motion.div  initial={{ opacity: 1,y: -300}}
  animate={{ opacity: 1,y: 0 }}
  transition={{ type: "spring", stiffness: 100 }}
  >
        <Slide className=" " />
      </motion.div>
      <motion.div  initial={{ opacity: 0.6}}
  animate={{ opacity: 1 }}
  transition={{delay:0.5, type: "spring", stiffness: 100}}
  >
      <div  className="  text-2xl   lg:text-4xl flex flex-col md:flex-row justify-center md:gap-20 md:my-16 items-center ">
        <div className=" md:w-[45%] md:p-0 p-5  text-center   ">
          Enhance your inner radiance at our{" "}
          <span className="text-primary">beauty sanctuary</span> and let your
          true beauty shine.
        </div>
        <NavLink to="/services"> <button className=" hover:scale-105 transition   duration-500 bg-black text-white p-2 text-sm lg:text-2xl w-70">Explore Services</button></NavLink>
        
      </div>
</motion.div>
      <div className="   my-4 flex  justify-center   ">
      <motion.div className="grid grid-cols-2 md:grid-cols-4 space-x-4  gap-2 "
       initial={{ opacity: 0,y: 300 }}
       whileInView={{ opacity: 1 ,y: 0}}
       viewport={{ once: true,amount: 0.1, }}
        transition={{ duration: 0.2 }}
      
        >

  <Card img={Hairwash} description={"HairCare"} />
  <Card img={Wax} description={"Waxing"} />
  <Card img={Skincare} description={"Skin Care"} />
  <Card img={mainicure} description={"Nail Treatments"} />
</motion.div>

      </div>
      <div className="flex justify-center relative top-10  ">
        <div className=" md:text-4xl text-4xl font-bold  "> What Our Customers  <span className=' text-primary font-extrabold '>Speeks</span></div>
      </div>
      <Testimonial className=" " />

   

      <div className="flex justify-center relative top-20  pb-32  ">
        <div className=" md:text-4xl text-4xl font-bold  ">Here's a Quick Video Introducing  <span className=' text-primary font-extrabold '> Us.</span></div>
      </div>
      <div className=" mb-10"><Vedio className=" "  /></div>
      <Footer/>
    </div>
  );
};

export default Home;
