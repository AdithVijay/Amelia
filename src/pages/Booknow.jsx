import React from "react";
import Footer from "../component/Footer";

const Booknow = () => {
  return (
    <div className=" ring">
      <div className="  flex flex-col items-center w-[80%] mx-auto gap-20 ring mb-10">

        <div className=" flex flex-col gap-3 text-center  relative top-5">
          <div>Schedule an Appointment</div>
          <div className=" text-center ">Please fill the form below, it will only take 3 minutes</div>
        </div>
          
        <div  className=" ring-black w-full flex flex-col items-center gap-9">
          <div className="  ring-red-700 w-full flex justify-around flex-col md:flex-row md:gap-0 gap-9 items-center">
            <input className=" md:w-[40%] w-[80%] min-h-10 border border-slate-500  pl-4" type="text"  placeholder="Your NAme"/>
            <input className=" md:w-[40%] w-[80%] min-h-10 border border-slate-500 pl-4" type="text" placeholder="Your NAme"/>
          </div>
          <div className="  ring-red-700 w-full flex justify-around flex-col md:flex-row md:gap-0 gap-9 items-center ">
            <input className=" md:w-[40%] w-[80%] min-h-10  border border-slate-500 pl-4" type="text" placeholder="Your NAme"/>
            <input className=" md:w-[40%] w-[80%] min-h-10 border border-slate-500 pl-4" type="text" placeholder="Your NAme"/>
          </div>
          <div className="  ring-red-700 w-full flex justify-around flex-col md:flex-row md:gap-0 gap-9 items-center">
            <input className=" md:w-[40%] w-[80%] min-h-10  border border-slate-500 pl-4" type="text" placeholder="Your NAme"/>
            <input className=" md:w-[40%] w-[80%] min-h-10 border border-slate-500 pl-4" type="text" placeholder="Your NAme"/>
          </div>
          <input className=" w-[80%] min-h-10 border border-slate-500 mb-10" type="text" />

        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Booknow;
