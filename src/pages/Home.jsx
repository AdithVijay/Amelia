import React from "react";
import { NavLink } from "react-router-dom";
import Slide from "../component/Slide";
import Card from "../component/Card";
import Hairwash from "../assets/Hairwash.jpg";
import Wax from "../assets/Wax.jpg";
import Skincare from "../assets/Skincare.png";
import Testimonial from "../component/Testimonial";
import Vedio from "../component/Vedio";
import Footer from "../component/Footer";
const Home = () => {
  return (
    <div className="">
      <Slide className=" " />
      <div  className="  text-2xl   lg:text-4xl flex flex-col md:flex-row justify-center md:gap-20 md:my-16 items-center ">
        <div className=" md:w-[45%] md:p-0 p-5  text-center   ">
          Enhance your inner radiance at our{" "}
          <span className="text-primary">beauty sanctuary</span> and let your
          true beauty shine.
        </div>
        <NavLink to="/services"> <button className=" bg-black text-white p-2 text-sm lg:text-2xl w-70">Explore Services</button></NavLink>
        
      </div>

      <div className="   my-4 flex  justify-center   ">
      <div className="grid grid-cols-2 md:grid-cols-4 space-x-4  ">
  <Card img={Hairwash} description={"HairWash"} />
  <Card img={Wax} description={"Waxing"} />
  <Card img={Skincare} description={"Skin Care"} />
  <Card img={Wax} description={"Wax"} />
</div>

      </div>
      <Testimonial className=" " />

      <Vedio  />
      <Footer/>
    </div>
  );
};

export default Home;
