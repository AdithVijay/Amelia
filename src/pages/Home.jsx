import React from "react";
import { NavLink } from "react-router-dom";
import Slide from "../component/Slide";
import Card from "../component/Card";
import Hairwash from "../assets/Hairwash.jpg";
import Wax from "../assets/Wax.jpg";
import Skincare from "../assets/Skincare.png";
import Testimonial from "../component/Testimonial";
import Vedio from "../component/Vedio";
const Home = () => {
  return (
    <div className="">
      <Slide className=" " />
      <div  className="  text-2xl flex justify-center md:gap-20 my-16 items-center ">
        <div className="w-[35%] text-balance ">
          Enhance your inner radiance at our{" "}
          <span className=" text-primary">beauty sanctuary</span> and let your
          true beauty shine.
        </div>
        <NavLink to="/services"> <button className=" bg-black text-white p-2 text-lg w-40 h-10">Explore Services</button></NavLink>
        
      </div>

      <div className="   my-4 flex  justify-center  ">
        <div className=" flex gap-5  justify-around ">
          <Card img={Hairwash} description={"HairWash"} />
          <Card img={Wax} description={"Wax"} />
          <Card img={Skincare} description={"Skin Care"} />
        </div>
      </div>
      <Testimonial className=" " />

      <Vedio />
    </div>
  );
};

export default Home;
