import React from 'react';
import img1 from '../assets/service1.png';
import img2 from '../assets/service2.png';
import hr from '../assets/hr.png';
import Card from '../component/Card';
import Hair from '../component/Hair';
import MyBook from '../component/MyBook';
import Footer from '../component/Footer';
import Priceing from '../component/Priceing';
const Services = () => {
  return (
    <>
      <header>
        {/* Add meta tags here */}
        <title>Services - Amalia Thiruvalla</title>
        <meta name="description" content="Explore the best  beauty services near thiruvalla and book an appointment today. We offer a variety of services including bridal, hair, skincare, and nail treatments."></meta>
      </header>
      <main>
        <div className=' my-2 flex flex-col  items-center  '>
      
        </div>
        <Hair />
        
        <Priceing />
        <div className="flex justify-center m-12">
          <div className=" md:text-4xl text-2xl font-bold  ">Explore Our Full Beauty <span className=' text-primary font-extrabold '>Services</span></div>
        </div>
        <div className='mb-14'>
          <MyBook id="book" />
        </div>

      </main>
      <Footer />
    </>
  );
};

export default Services;
