import React from "react";
import Footer from "../component/Footer";

import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";


const Contact = () => {
  return (
    <><div className=" mt-4 flex justify-center  flex-col items-center gap-5  ">

      <div className="    flex gap-9  md:w-[80%] w-[85%]  flex-col md:flex-row      max-h-[40rem]  ">
        <div className="left   relative   md:w-[43%] w-[95%] bg-[#F8F4EC]   px-2   ">
       

            <div className=" info  flex flex-col gap-3 ">
              <div className=" text-2xl lg:text-3xl   relative left-9 ">Contact Information</div>
              <div className=" text-lg w-[85%]   relative left-9 font-thin">
                Feel free to reach out to us for appointments, inquiries, or to
                experience the tranquility of Serene Beauty. We're here to make
                your beauty journey as serene as possible.
              </div>
            </div>
            <div className="address  relative left-9 top-4   font-thin ">
              <div> Amalia, thiruvalla 81063, Kerala</div>
              <div> info@amaliabeauty.com</div>
              <div> (629) 555-0129</div>
            </div>

            <div className="icons flex relative   left-9  gap-5 text-2xl  bottom-2 mt-9">
              <span><FaInstagram/></span>
              <span><FaSquareFacebook/></span>
              <span><FaWhatsapp/></span>
             
       

          </div>
        </div>

        <div className="right flex flex-col gap-3    md:w-[60%]       w-[95%]    ">
          <div className=" text-2xl">Have a Question?</div>
          <hr className="w-[90%]"></hr>
          <div>
            <span className=" text-primary text-xl">Business Hours:</span> Mon - Fri: <span className=" font-thin text-sm">08.00 AM To 09.00 PM</span> Sat: 09.00 AM To
            06.00 PM
          </div>
          <div className=" flex flex-col gap-3 w-[90%] ">
            <div className="flex  w-[100%]  justify-around ">
              <input
                type="text"
                className=" bg-transparent  border border-slate-500  w-[35%]  md:h-9 pl-4 "
                 placeholder="Your Name"  />
              <input
                type="text"
                className=" bg-transparent  border border-slate-500  w-[35%]  md:h-9  pl-4 "    placeholder="Email" />
            </div>
            <div className="flex  w-[100%]  justify-around ">
              <input
                type="text"   placeholder="What Service You Want?"
                className=" bg-transparent  border border-slate-500   w-[35%] md:h-9 pl-4   "  />
              <input
                type="text"
                className=" bg-transparent  border border-slate-500  w-[35%] md:h-9 pl-4  "  placeholder="Phone" />
            </div>
           
            <textarea
              className=" bg-transparent  border border-slate-500  self-center w-[85%] pl-4  md:h-24" placeholder="Message" />
          </div>
          <button className=" bg-black  text-white w-[20%] h-9 myfont  ">Send</button>
        </div>
      </div>
      <div className="  mt-10 w-full md:w-[70%] "><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.4243594028235!2d76.57542750786769!3d9.384100783296148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0625ceb946994b%3A0x7cfe253b3890afb3!2sAmelia%20Spa%20%26%20Unisex%20Makeup%20Studio!5e0!3m2!1sen!2sin!4v1710147411769!5m2!1sen!2sin" className="w-full min-h-96 pb-6"></iframe></div>
    </div><Footer /></>
  );
};

export default Contact;
