import React from 'react'
import  hairspa from '../assets/hairspa.jpg'
import hairhighlights from '../assets/hairhighlights.png'
import keratin from '../assets/straigh.jpg'
import cut from '../assets/cut.webp'
import hair2 from '../assets/gray.webp'
import mainicure from '../assets/manicure1.png'
import pedicure from '../assets/mainicure.png'
import card1 from "../assets/t1.jpg";
import card2 from "../assets/t2.jpg";
import card3 from "../assets/t3.jpg";
function Hair() {
  return (
   
    <section class=" xl:scale-110 my-7">
           <div class="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6 lg:scale-125s  lg:my-7s ">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 ">
            <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50  md:h-full flex flex-col   ">
                <div href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                    <img src={card2} alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                    <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                    <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Bridal Works</h3>
                </div>
            </div>
            <div class="col-span-2 sm:col-span-1 md:col-span-2   ">
                <div href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4 lg:h-[30rem]">
                    <img src={hairspa} alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                    <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                    <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">HairSpa</h3>
                </div>
                <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 ">
                    <div href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                        <img src={cut} alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                        <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                        <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Hair cut</h3>
                    </div>
                    <div href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                        <img src={hairhighlights} alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                        <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                        <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Hair Highlighting</h3>
                    </div>
                </div>
            </div>
            <div class="col-span-2 sm:col-span-5 md:col-span-1  md:h-full flex flex-col lg:w-[20rem]">
                <div href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                    <img src={mainicure} alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                    <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                    <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl ">Pedicure / Manicure </h3>
                </div>
            </div>
        </div>
    </div>
    
          </section>
  )
}

export default Hair