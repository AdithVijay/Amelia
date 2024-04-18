import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className='parent bg-[#F8F4ED] min-h-[22rem]  flex flex-col  justify-center '>
        <div className=' flex justify-center md:pb-5  pt-10'>
          <div className='top flex justify-around  flex-col md:flex-row md:gap-36 gap-5 items-center'>
            <div className='left flex gap-4'>
              <NavLink to="/" className="font-Cheesebase text-xl ">Home</NavLink>
              <NavLink to="/services" className="font-Cheesebase text-xl ">Service</NavLink>
              <NavLink to="/gallery" className="font-Cheesebase text-xl ">Gallery</NavLink>
              <NavLink to="/contact" className="font-Cheesebase text-xl ">Contact us</NavLink>
            </div>
            <div className='right flex gap-3 '>
              <div>
                <a target="blank" href="https://www.instagram.com/ameliabeautyspathiruvilla?igsh=NXp3dmZ6cDZwcWp1">
                  <CiInstagram className=' size-8' />
                </a>
              </div>
              <div>
                <FaFacebook className=' size-8' />
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-white h-1" />
        <div className='down flex  md:flex-row  flex-col justify-center items-center md:gap-10 gap-5 pt-5 pb-10'>

          <div className='left md:w-[30%] w-[90%]'>
            <div className=' font-creamcheese md:text-4xl text-3xl pb-3 '>
              Amelia Beauty
            </div>
            <div className=''>
              Experience the joy of savouring healthy, hygienic foods at Burger Lounge by Grapa Foods. Our excellent burgers, crafted with premium ingredients, promise an exceptional culinary experience. Immerse yourself in quality, sustainability, and the pure delight of every bite. Taste the difference and embrace the happiness of dining at Grapa Burger Lounge.
            </div>
          </div>

          <div>
            <img className=' w-[200px]' src={logo} alt="Amelia Beauty Logo" />
          </div>

          <div className='right md:w-[30%] w-[90%] text-pretty '>
            <div className=' md:text-3xl text-2xl pb-4'>
              Contact Adress
            </div>
            <div>
              Kaimamannil Building, Near public Stadium, Bypass Road, Thiruvalla
            </div>
            <div className=' pt-3'>
              call us
            </div>
            <div>
              9447271120
            </div>
            <div className=' pt-3'>
              email
            </div>
            <div className=' mb-10'>
              beautyspaamelia@gmail. com
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
