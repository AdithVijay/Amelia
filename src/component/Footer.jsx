import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="   min-h-[20rem]    bg-[#F8F4EF]">

        <div className="    flex rounded-lg md:gap-14 xl:gap-40 backdrop-blur-[3px]
md:flex-row flex-col md:items-stretch items-center md:justify-center md:pt-9  ">
          <div className="md:w-[30%] w-[50%] ">
            <img src={logo} alt="" />
          </div>
          <div className=" lg:text-2xl text-xl flex flex-row  md:gap-14 ">
            <div className=" flex flex-col md:flex-row md:gap-14 gap-2">
                    {/*  */}
                  <div className=" flex flex-col   ">
                    <div className="pb-4 text-primary">Site Map</div>
                    <NavLink to="/" className="pb-4  ">
                      Home
                    </NavLink>
                    <NavLink to="/services" className="pb-4 ">
                      Services
                    </NavLink>
                    <NavLink to="/gallery" className="pb-4 ">
                      Gallery
                    </NavLink>
                    <NavLink to="/contactus" className="pb-4 ">
                      Contact us
                    </NavLink>
                  </div>
                  <div className="flex flex-col md:items-stretch items-center">
                    <div className=" pb-4  text-primary">Follow US</div>
                    <div className=" pb-4 flex items-center gap-1"> <FaInstagram />Instagram</div>
                    <div className=" pb-4 flex items-center gap-1"><FaSquareFacebook /> Facebook</div>
                  </div>
            </div>
            <div className=" flex flex-col md:flex-row  md:gap-14 gap-2"> 
            {/*  */}
                <div className="flex flex-col md:items-stretch  items-center   ">
                <div className=" pb-4  text-primary  self-center">Location</div>
                <div className=" pb-4 "> Kaimamannil Building </div>
                <div className=" pb-4 self-center"> Near public Stadium</div>
                <div className=" pb-4 self-center"> Bypass Road </div>
                <div className=" pb-4 self-center">Thiruvalla</div>
                </div>
                <div className="flex flex-col md:items-stretch  items-center ">
                <div className=" pb-4  text-primary">Legal</div>
                <div className=" pb-4">Privacy Policy</div>
                <div className=" pb-4">Terms & Condition</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
