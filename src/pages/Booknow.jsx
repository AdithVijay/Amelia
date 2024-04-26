import React, { useState } from "react";
import Footer from "../component/Footer";
import DatePicker from "react-datepicker";
import emailjs from '@emailjs/browser';
import "react-datepicker/dist/react-datepicker.css";

const Booknow = () => {
  const today = new Date();
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    serviceName: localStorage.getItem('service') || "",
    appointmentDate: new Date(),
    notes: ""
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const appointmentDate = new Date(formData.appointmentDate);
const formattedDate = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
}).format(appointmentDate);

const formattedTime = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
}).format(appointmentDate);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      service: formData.serviceName,
      phone: formData.contactNumber,
      message: formData.notes,
      appointmentDate: `${formattedDate} ${formattedTime}`
    };
    
    emailjs
      .send('service_6ce2nhl', 'template_8u86hne', {
        ...templateParams,
      }, {
        publicKey: 'SbskET1zFJPqDlvqA',
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Appointment Booked Successfully');
          setFormData({
            name: "",
            contactNumber: "",
            email: "",
            serviceName: "",
            appointmentDate: new Date(),
            notes: ""
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
  const minTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 0, 0);
  const maxTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 21, 0, 0);
  return (
    <div className="  ">
      <div className=" p-1  flex flex-col items-center w-[80%] mx-auto gap-20  shadow-2xl shadow-orange-200 m-10 mb-24 md:mt-24 ">
        <div className=" flex flex-col gap-3 text-center  relative top-5 mt-6">
          <div className="md:text-4xl text-2xl">Schedule an Appointment</div>
          <div className=" text-center ">
            Please fill the form below, it will only take 3 minutes
          </div>
        </div>

        <form onSubmit={handleFormSubmit} className=" ring-black w-full flex flex-col items-center gap-9">
          <div className="  ring-red-700 w-full flex justify-around flex-col md:flex-row md:gap-0 gap-9 items-center">
            <input
              className=" md:w-[40%] w-[80%] min-h-10 border border-slate-500  pl-4"
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              className=" md:w-[40%] w-[80%] min-h-10 border border-slate-500 pl-4"
              type="tel"
              placeholder="Contact Number"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="  ring-red-700 w-full flex justify-around flex-col md:flex-row md:gap-0 gap-9 items-center ">
            <input
              className=" md:w-[40%] w-[80%] min-h-10  border border-slate-500 pl-4"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Service name"
              className=" md:w-[40%] w-[80%] min-h-10 border border-slate-500 pl-4"
              name="serviceName"
              value={formData.serviceName}
              onChange={handleInputChange}
            />
          </div>
          <div className="  ring-red-700  w-[80%]  flex justify-around flex-col md:flex-row md:gap-0 gap-9 items-center relative 2xl:left-[22rem] xl:left-[18rem] md:left-[12rem]  ">
            <DatePicker
              wrapperClassName="datePicker"
              showIcon
              showTimeSelect
              selected={formData.appointmentDate}
              onChange={(date) => setFormData({ ...formData, appointmentDate: date })}
              minDate={new Date()}
              minTime={minTime}
              maxTime={maxTime}
              dateFormat="MMMM d, yyyy h:mm aa"
              customInput={
                <input  
                  type="text"
                  className=" md:w-[40%] w-[100%] min-h-10  border border-slate-500 pl-4 relative"
                />
              }
            />
          </div>
          <input
            className=" w-[80%] min-h-10 border border-slate-500 mb-10 px-5"
            type="text"
            placeholder="Any Notes For Us"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
          />
          <button className=" relative md:p-3 -top-2 p-2 md:text-2xl  transition-all duration-300 active:scale-95 rounded-md hover:scale-[102%] bg-black px-5 text-white" type="submit">
            Book Now
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Booknow;
