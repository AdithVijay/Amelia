import React, { useState } from "react";
import Footer from "../component/Footer";
import DatePicker from "react-date-picker";

import "react-datepicker/dist/react-datepicker.css";

const Booknow = () => {
  const [cdate, setcdate] = useState(new Date());
console.log(cdate.toDateString())

  return (
    <div className=" ">
      
      <div className="  flex flex-col items-center w-[80%] mx-auto gap-20 ring mb-10">

        <div className=" flex flex-col gap-3 text-center  relative top-5">
          <div>Schedule an Appointment</div>
          <div className=" text-center ">Please fill the form below, it will only take 3 minutes</div>
        </div>
          
        <div  className=" ring-black w-full flex flex-col items-center gap-9">
          <div className="  ring-red-700 w-full flex justify-around flex-col md:flex-row md:gap-0 gap-9 items-center">
            <input className=" md:w-[40%] w-[80%] min-h-10 border border-slate-500  pl-4" type="text"  placeholder="Your Name"/>
            <input className=" md:w-[40%] w-[80%] min-h-10 border border-slate-500 pl-4" type="tel" placeholder="Contact Number"/>
          </div>
          <div className="  ring-red-700 w-full flex justify-around flex-col md:flex-row md:gap-0 gap-9 items-center ">
            <input className=" md:w-[40%] w-[80%] min-h-10  border border-slate-500 pl-4" type="email" placeholder="email"/>
            <input type="text" placeholder="Service name" className=" md:w-[40%] w-[80%] min-h-10 border border-slate-500 pl-4" />
          </div>
          <div className="  ring-red-700 w-full  flex justify-around flex-col md:flex-row md:gap-0 gap-9 items-center">
            <input  className=" md:w-[40%] w-[80%] min-h-10  border border-slate-500 pl-4" type="date" defaultValue={cdate} placeholder="Your NAme"/>
            <input className=" md:w-[40%] w-[80%] min-h-10 border border-slate-500 pl-4" type="time" min="09:00"
  max="17:00" placeholder="time slot"/>
          </div>
          <input className=" w-[80%] min-h-10 border border-slate-500 mb-10 px-5" type="text" placeholder="Any Notes For Us" />

        </div>
        <button className=" relative  text-2xl -top-20 transition-all duration-300 active:scale-95 hover:scale-125 bg-black px-5 text-white">Book Now</button>
      </div>
      <Footer/>
   
    </div>
  );
};

export default Booknow;