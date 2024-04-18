import React, { useEffect, useState } from "react";
import { NavLink,useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
    const location = useLocation();
    const [mylocation, setmylocation] = useState(location.pathname)
    const [open, setopen] = useState(false)
    useEffect(() => {
        setmylocation(location.pathname)
       
        // window.location.pathname === "/services" ? document.title = "Services" : window.location.pathname === "/gallery" ? document.title = "Gallery" : window.location.pathname === "/contact" ? document.title = "Contact" : document.title = "Home"
    }, [location.pathname])
    function menu(){
   
        setopen((prev)=>!prev)
    }
  return (
    <header className={`shadow-md fixed w-full md:h-20  h-14 bg-white z-20 ${open?"  h-52 select-none":""} ` }  >
      <div className={`flex md:flex-row md:justify-between             `}>
        <div className=" relative md:top-2 top-3  xl:left-20 flex-shrink-0  ">
          <NavLink to="/" >
            <img src={logo} className=" flex-shrink-0   md:h-16 h-8 "></img>
          </NavLink>{" "}
          {/* this is the left side AMELIA LOGO */}
        </div>
        <nav className=" w-full   md:inline-block flex items-center justify-end">
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
            <NavLink to="/booknow" className="bg-black text-white rounded-sm md:text-base text-sm w-24 pl-3 p-1 md:visible  invisible  ">
              Book Now
            </NavLink>
            
            {/* this is the end of right side */}
          </ul>
          <IoMdMenu className="  relative right-3    text-2xl top-3  md:invisible visible  cursor-pointer " onClick={menu}/>
        </nav>
        
      </div>
      <div className={`${open?" visible pb-10  flex  flex-col items-center  m-6 text-xl":" invisible"}`} >
      <NavLink to="/" onClick={menu} className={`${mylocation === "/" ? "text-primary" : ""}`}>Home </NavLink>
      <NavLink to="/services" onClick={menu}   className={`${mylocation === "/services" ? "text-primary" : ""}`}>Service </NavLink>
      <NavLink to="/gallery" onClick={menu}   className={`${mylocation === "/gallery" ? "text-primary" : ""}`}>Gallery </NavLink>
      <NavLink to="/contact"  onClick={menu}  className={`${mylocation === "/contact" ? "text-primary" : ""}`}>Contact us </NavLink>
      <NavLink to="/booknow"  onClick={menu}  className={`${mylocation === "/booknow" ? "text-primary" : ""}`}>Book Now </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
