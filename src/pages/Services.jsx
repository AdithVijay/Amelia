import React, { useEffect, useState } from 'react'
import img1 from '../assets/service1.png'
import img2 from '../assets/service2.png'
import hr from '../assets/hr.png' 
import Card from '../component/Card'
import Hair from '../component/Hair'

import MyBook from '../component/MyBook'
import Footer from '../component/Footer'

const Services = () => {
  const [selectedTab, setSelectedTab] = useState('bridal');

  // const renderContent = () => {
  //   switch(selectedTab) {
  //     case 'bridal':
  //       return (
  //         <>dfsdfsdf</>
  //       );
  //     case 'hair':
  //       return (<><Hair></Hair></>);
  //     case 'skincare':
  //       return <MyBook></MyBook>;
  //     case 'nail':
  //       return <div>
  //         <div class="  md:h-full flex flex-col md:flex-row  gap-9 mx-4 ">
  //               <div href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow h-[40rem] md:w-[40%] ">
  //                   <img src={mainicure} alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
  //                   <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
  //                   <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Mainicure</h3>
  //               </div>
  //               <div href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow h-[40rem] md:w-[40%] ">
  //                   <img src={pedicure} alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
  //                   <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
  //                   <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Pedicure</h3>
  //               </div>
  //           </div>

  //       </div>;
  //     default:
  //       return null;
  //   }
  // };


  function menu(){
    const menu = document.getElementById('book');
    menu.requestFullscreen();
    console.log("hjdhj")
  }
  return (
    <div>
      <div className=' my-2 flex flex-col  items-center  '>
        {/* <div className="flex justify-center items-center md:w-[80%] w-[97%]   md:gap-8  gap-4 overflow-clip mx-auto">
          <img src={img1} alt="" className='w-[45%]' />
          <img src={img2} alt="" className='w-[45%]' />
        </div> */}
       
        <div className="grid grid-cols-2 md:grid-cols-4 md:space-x-4  gap-2  "
        >
        </div>
        <div className='flex w-[80%]  justify-center my-4 md:gap-0 md:flex-row flex-col gap-3 items-center  '>
          <div className=" md:text-4xl text-2xl font-bold md:w-[40%] ">The Place of <span className=' text-primary font-extrabold '>Beauty</span></div>
          <div className='md:w-[30%] lg:text-2xl '>Explore our makeup types, choose the one you like and follow the link to book, we’ll be glad to have you. </div>
        </div>

        {/* <div className="flex justify-evenly items-center my-4 md:text-3xl text-xl w-[75%] h-14  bg-black text-white py-1  mt-12  rounded-xl">
  <div
    className={`cursor-pointer ${
      selectedTab === 'bridal'
        ? 'font-bold bg-primary text-white transition-colors px-4 rounded-lg '
        : 'hover:bg-gray-300 px-4 rounded-lg hover:text-black'
    }`}
    onClick={() => setSelectedTab('bridal')}
  >
    Bridal
  </div>
  <div
    className={`cursor-pointer ${
      selectedTab === 'hair'
        ? 'font-bold bg-primary text-white transition-colors px-4 rounded-lg '
        : 'hover:bg-gray-300 px-4 rounded-lg hover:text-black'
    }`}
    onClick={() => setSelectedTab('hair')}
  >
    Hair
  </div>
  <div
    className={`cursor-pointer ${
      selectedTab === 'skincare'
        ? 'font-bold bg-primary text-white transition-colors px-4 rounded-lg '
        : 'hover:bg-gray-300 px-4 rounded-lg hover:text-black'
    }`}
    onClick={() => setSelectedTab('skincare')}
  >
    Skincare
  </div>
  <div
    className={`cursor-pointer ${
      selectedTab === 'nail'
        ? 'font-bold bg-primary text-white transition-colors px-4 rounded-lg '
        : 'hover:bg-gray-300 px-4 rounded-lg hover:text-black'
    }`}
    onClick={() => setSelectedTab('nail')}
  >
    Nail
  </div>
</div> */}

      </div>
      <Hair></Hair>
      <div className="flex justify-center  m-10">
        <div className=" md:text-4xl text-2xl font-bold  ">Explore Our Full Beauty <span className=' text-primary font-extrabold '>Services</span></div>
      </div>
      <MyBook id="book"  ></MyBook>
    <Footer ></Footer>
    </div>
  )
}

export default Services;
