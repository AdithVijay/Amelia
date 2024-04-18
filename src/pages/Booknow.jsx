import React, { useState } from "react";
import Footer from "../component/Footer";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// function CustomDatePickerInput({ value, onClick }) {
//   return (
//     <input
//       type="text"
//       value={value}
//       onClick={onClick}
//       style={{ width: '800px' }} // Set the desired width
//     />
//   );
// }
const Booknow = () => {
  const currentDate = new Date();
  const [cdate, setcdate] = useState(new Date());
  const today = new Date();
  const minTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 0, 0);
  const maxTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 21, 0, 0);

  console.log(cdate.toDateString());
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="  ">
      <div className=" p-1  flex flex-col items-center w-[80%] mx-auto gap-20  shadow-2xl shadow-orange-200 m-10 mb-24 md:mt-24 ">
        <div className=" flex flex-col gap-3 text-center  relative top-5 mt-6">
          <div className="md:text-4xl text-2xl">Schedule an Appointment</div>
          <div className=" text-center ">
            Please fill the form below, it will only take 3 minutes
          </div>
        </div>

        <div className=" ring-black w-full flex flex-col items-center gap-9">
          <div className="  ring-red-700 w-full flex justify-around flex-col md:flex-row md:gap-0 gap-9 items-center">
            <input
              className=" md:w-[40%] w-[80%] min-h-10 border border-slate-500  pl-4"
              type="text"
              placeholder="Your Name"
            />
            <input
              className=" md:w-[40%] w-[80%] min-h-10 border border-slate-500 pl-4"
              type="tel"
              placeholder="Contact Number"
            />
          </div>
          <div className="  ring-red-700 w-full flex justify-around flex-col md:flex-row md:gap-0 gap-9 items-center ">
            <input
              className=" md:w-[40%] w-[80%] min-h-10  border border-slate-500 pl-4"
              type="email"
              placeholder="email"
            />
            <input
              type="text"
              placeholder="Service name"
              className=" md:w-[40%] w-[80%] min-h-10 border border-slate-500 pl-4"
            />
          </div>
          <div className="  ring-red-700  w-[80%]  flex justify-around flex-col md:flex-row md:gap-0 gap-9 items-center relative 2xl:left-[22rem] xl:left-[18rem] md:left-[12rem]  ">
            {/* <input  className=" md:w-[40%] w-[80%] min-h-10  border border-slate-500 pl-4" type="date" defaultValue={cdate} /> */}
            <DatePicker
              wrapperClassName="datePicker"
              showIcon
         
              showTimeSelect
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={currentDate}
              minTime={minTime}
              maxTime={maxTime}
              dateFormat="MMMM d, yyyy h:mm aa"
              customInput={
                <input  
                  type="text"
                  // value={value}
                  // onClick={onClick}
                  className=" md:w-[40%] w-[100%] min-h-10  border border-slate-500 pl-4 relative"
                  // Set the desired width
                />
              }
            />

          </div>
          <input
            className=" w-[80%] min-h-10 border border-slate-500 mb-10 px-5"
            type="text"
            placeholder="Any Notes For Us"
          />
        </div>
        <button className=" relative md:p-3 p-2 md:text-2xl -top-20 transition-all duration-300 active:scale-95 hover:scale-125 bg-black px-5 text-white">
          Book Now
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Booknow;
