import React from "react";

const Contact = () => {
  return (
    <div className=" ">
      <div className=" flex gap-9  md:w-[80%] w-[85%]  flex-col md:flex-row     mx-auto ring ring-black  ">
        <div className="left  mx-auto ring md:w-[40%] w-[95%] bg-[#F8F4EC]   ">
          <div className="    m-7 mx-auto w-[89%] ">
            <div className=" info  flex flex-col gap-3 ">
              <div className=" text-2xl lg:text-3xl  mx-7 ">Contact Information</div>
              <div className=" text-lg w-[85%]  mx-auto font-thin">
                Feel free to reach out to us for appointments, inquiries, or to
                experience the tranquility of Serene Beauty. We're here to make
                your beauty journey as serene as possible.
              </div>
            </div>
            <div className="address  relative left-7  ">
              <div> Amalia, thiruvalla 81063, Kerala</div>
              <div> info@amaliabeauty.com</div>
              <div> (629) 555-0129</div>
            </div>
            <div className="icons flex  gap-5">
              <span>*</span>
              <span>*</span>
              <span>*</span>
              <span>*</span>
            </div>
          </div>
        </div>

        <div className="right  ring md:w-[60%]    ">
          <div>Have a Question?</div>
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
