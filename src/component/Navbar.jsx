import React, { useEffect, useState } from "react";
import { NavLink,useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
    const location = useLocation();
    const [mylocation, setmylocation] = useState(location.pathname)
    useEffect(() => {
        setmylocation(location.pathname)
       
        // window.location.pathname === "/services" ? document.title = "Services" : window.location.pathname === "/gallery" ? document.title = "Gallery" : window.location.pathname === "/contact" ? document.title = "Contact" : document.title = "Home"
    }, [location.pathname])
  return (
    <header className="shadow-md fixed w-full md:h-20  h-14  backdrop-blur-3xl   z-20  ">
      <div className={`flex flex-row justify-between       `}>
        <div className=" relative md:top-2 top-3  xl:left-20 flex-shrink-0 ">
          <NavLink to="/">
            <img src={logo} className=" flex-shrink-0   md:h-16 h-8 "></img>
          </NavLink>{" "}
          {/* this is the left side AMELIA LOGO */}
        </div>
        <nav>
          <ul className="flex relative  justify-end  items-center  lg:gap-40 2xl:gap-52 md:gap-18 gap-6   md:top-[30%] top-3  md:right-10 right-2    ">
           
            
                        <div className=" md:flex gap-10  hidden lg:text-2xl text-xl relative top-1  ">
                          <li className={`${mylocation === "/" ? "text-primary" : ""}`}>
                            <NavLink to="/">Home </NavLink>
                          </li>
                          <li className={`${mylocation === "/services" ? "text-primary" : ""}`}>
                            <NavLink to="/services">Service </NavLink>
                          </li>
                          <li className={`${mylocation === "/gallery" ? "text-primary" : ""}`}>
                            <NavLink to="/gallery">Gallery </NavLink>
                          </li>
                          <li className={`${mylocation === "/contact" ? "text-primary" : ""}`}>
                            <NavLink to="/contact">Contact us </NavLink>
                          </li>
            </div>
            <button className="bg-black text-white rounded-sm md:text-base  text-sm w-24 p-1   ">
              Book Now
            </button>{" "}
            {/* this is the end of right side */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
