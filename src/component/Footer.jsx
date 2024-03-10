import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className=" pt-14 flex min-h-[20rem] md:gap-14 xl:gap-40  md:flex-row flex-col md:items-stretch items-center md:justify-center bg-[#FFF6E0]">

        <div className="md:w-[30%] ">
          <img src={logo} alt="" />
        </div>

        <div className=" lg:text-xl text-xl flex md:flex-row flex-col md:gap-14 gap-16">

          <div className=" flex flex-col text-center  items-center">
            <div className="pb-4 text-primary">Site Map</div>
            <NavLink to="/" className="pb-4 ">
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
            <div className="flex flex-col md:items-stretch items-center">
            <div className=" pb-4  text-primary">Thiruvalla</div>
            <div className=" pb-4">Location</div>
            <div className=" pb-4">Near ByPass</div>
            </div>
            <div className="flex flex-col md:items-stretch items-center">
            <div className=" pb-4  text-primary">Legal</div>
            <div className=" pb-4">Privacy Policy</div>
            <div className=" pb-4">Terms & Condition</div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
