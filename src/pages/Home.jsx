import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import Slide from "../component/Slide";
import Card from "../component/Card";
import Hairwash from "../assets/Hairwash.jpg";
import Wax from "../assets/Wax.jpg";
import Skincare from "../assets/Skincare.png";
import mainicure from "../assets/manicure1.png";

import Testimonial from "../component/Testimonial";
import Vedio from "../component/Vedio";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Thiruvalla's Best Beauty Parlour - Amalia</title>
        <meta
          name="description"
          content="Amalia - Best Beauty Parlour in Thiruvalla "
        />
        <meta name="keywords" content="beauty parlour, near Thiruvalla, hair care, waxing, skincare, nail treatments " />
      </Helmet>
      <div>
        <Slide />
      </div>
      <div>
        <div className="text-2xl lg:text-4xl flex flex-col md:flex-row justify-center md:gap-20 md:my-16 items-center">
          <div className="md:w-[45%] md:p-0 p-5 text-center">
            Enhance your inner radiance at our{" "}
            <span className="text-primary">beauty sanctuary</span> and let your
            true beauty shine.
          </div>
          <NavLink to="/services">
            <button className="hover:scale-105 transition duration-500 bg-black text-white p-2 text-sm lg:text-2xl w-70">
              Explore Services
            </button>
          </NavLink>
        </div>
      </div>
      <div className="my-4 flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 space-x-4 gap-2">
          <Card className="" img={Hairwash} description={"HairCare"} alt={"Hairwash Image"} />
          <Card img={Wax} description={"Waxing"} alt={"Wax Image"} />
          <Card img={Skincare} description={"Skin Care"} alt={"Skincare Image"} />
          <Card img={mainicure} description={"Nail Treatments"} alt={"Manicure Image"} />
        </div>
      </div>
      <div className="flex justify-center relative top-10">
        <div className="md:text-4xl text-2xl font-bold">
          {" "}
          What Our Customers{" "}
          <span className="text-primary font-extrabold">Speak</span>
        </div>
      </div>
      <Testimonial />
      <div className="flex justify-center relative top-20 pb-32">
        <div className="md:text-4xl text-xl font-bold">
          Here's a Quick Video Introducing{" "}
          <span className="text-primary font-extrabold">Us.</span>
        </div>
      </div>
      <div className="mb-10">
        <Vedio />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
