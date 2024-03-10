import React from "react";

const Contact = () => {
  return (
    <div className=" flex justify-center  ">
      <div className=" relative   flex gap-9  md:w-[80%] w-[85%]  flex-col md:flex-row      ring ring-black h-96  ">
        <div className="left   relative  ring md:w-[40%] w-[95%] bg-[#F8F4EC]   ">
          <div className="    m-7 mx-auto w-[89%] ">
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
            <div className="icons flex relative ring  left-9  top-9 gap-5">
              <span>*</span>
              <span>*</span>
              <span>*</span>
              <span>*</span>
            </div>
          </div>
        </div>

        <div className="right    md:w-[60%]   relative  ring  w-[95%]    ">
          <div className="">Have a Question?</div>
          <div>
            Business Hours: Mon - Fri: 08.00 AM To 09.00 PM Sat: 09.00 AM To
            06.00 PM
          </div>
          <div className=" w-[90%] ring  ring-red-500 ">
            <input
              type="text"
              className=" bg-transparent  border border-violet-950"
            />
            <input
              type="text"
              className=" bg-transparent  border border-violet-950"
            />
            <input
              type="text"
              className=" bg-transparent  border border-violet-950"
            />
            <input
              type="text"
              className=" bg-transparent  border border-violet-950"
            />
            <input
              type="text"
              className=" bg-transparent  border border-violet-950"
            />
          </div>
          <button className=" bg-black  text-white ">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
