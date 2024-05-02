import React, { useState } from "react";
import Footer from "../component/Footer";
import emailjs from '@emailjs/browser';
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";


const Contact = () => {


  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    phone: "",
    message: ""
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const templateParams = {
      name: formData.name,
      email: formData.email,
      service: formData.service,
      phone: formData.phone,
      message: formData.message
    };
    
    emailjs
    .send('service_6ce2nhl', 'template_xb7lnol', {
      ...templateParams,
    }, {
      publicKey: 'SbskET1zFJPqDlvqA',
    })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message Sent Successfully');
          setFormData({
            name: "",
            email: "",
            service: "",
            phone: "",
            message: ""
          });
        },
        (err) => {
          console.log('FAILED...', err);
        },
      );
    // Here you can do something with the form data, like sending it to a backend server
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
      <div className=" mt-4 flex justify-center  flex-col items-center gap-5  ">

        <div  className="    flex gap-9  md:w-[80%] w-[85%]  flex-col md:flex-row      max-h-[40rem]  ">
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
            <form onSubmit={handleFormSubmit} className=" flex flex-col gap-3 w-[90%] ">
              <div className="flex  w-[100%]  justify-around ">
                <input
                  type="text"
                  className=" bg-transparent  border border-slate-500  w-[35%]  md:h-9 pl-4 "
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className=" bg-transparent  border border-slate-500  w-[35%]  md:h-9  pl-4 "
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex  w-[100%]  justify-around ">
                <input
                  type="text"
                  placeholder="What Service You Want?"
                  className=" bg-transparent  border border-slate-500   w-[35%] md:h-9 pl-4   "
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className=" bg-transparent  border border-slate-500  w-[35%] md:h-9 pl-4  "
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <textarea
                className=" bg-transparent  border border-slate-500  self-center w-[85%] pl-4  md:h-24"
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
              <button className=" bg-black  text-white w-[20%] h-9 myfont  " type="submit">Send</button>
            </form>
          </div>
        </div>
        <div className="  md:mt-10 mt-5 md:mb-10 mb-5 p-5 w-full md:w-[70%] "><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.4243594028235!2d76.57542750786769!3d9.384100783296148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0625ceb946994b%3A0x7cfe253b3890afb3!2sAmelia%20Spa%20%26%20Unisex%20Makeup%20Studio!5e0!3m2!1sen!2sin!4v1710147411769!5m2!1sen!2sin" className="w-full min-h-96 pb-6"></iframe></div>
      </div><Footer />
    </>
  );
};

export default Contact;
