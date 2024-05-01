import React from 'react'
import { NavLink } from "react-router-dom";
export default function Priceing() {
  return (
    <section class="bg-white :bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 :text-white">Choose the Best Package for you </h2>
            <p class="mb-5 font-light text-gray-500 sm:text-xl :text-gray-400">Explore our range of bridal makeup packages tailored to suit every style and budget. From our basic package for a simple, elegant look to our top-tier package offering a complete bridal transformation, find the perfect fit for your special day.</p>
        </div>
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
         
            <div class="flex flex-col p-6 mx-auto max-w-lg  w-[340px]  text-center text-gray-900 h-[30rem] bg-white rounded-lg border  border-orange-300 shadow :border-gray-600 xl:p-8 :bg-gray-800 :text-white">
                <h3 class="mb-4 text-2xl font-semibold">Essential Elegance</h3>
                <p class="font-light text-gray-500 sm:text-lg :text-gray-400"> </p>
                {/* <div class="flex justify-center items-baseline my-8">
                    <span class="mr-2 text-5xl font-extrabold">$29</span>
                    <span class="text-gray-500 :text-gray-400">/month</span>
                </div>
            */}
                <ul role="list" class="mb-8 mt-9 space-y-4 text-left h-48  ">
                    <li class="flex items-center space-x-3">
                        
                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 :text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>HD Makeup </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        
                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 :text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Facial</span>
                    </li>
                    {/* <li class="flex items-center space-x-3">
                        
                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 :text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Spa Pedicure <span class="font-semibold">1 developer</span></span>
                    </li>
                    <li class="flex items-center space-x-3">
                        
                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 :text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Hand Wax <span class="font-semibold">6 months</span></span>
                    </li>
                    <li class="flex items-center space-x-3">
                        
                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 :text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Free updates: <span class="font-semibold">6 months</span></span>
                    </li> */}
                    
                </ul>
                <NavLink to="/contact" className="  text-primary text-2xl flex justify-center relative top-24">
          Enquire Now  →
        </NavLink>
                <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center :text-white  :focus:ring-primary-900">Get started</a>
            </div>
           
            <div class="flex flex-col p-6 mx-auto max-w-lg w-[340px] text-center text-gray-900 h-[30rem] bg-white rounded-lg border  border-orange-300 shadow :border-gray-600 xl:p-8 :bg-gray-800 :text-white">
                <h3 class="mb-4 text-2xl font-semibold">Classic Charm</h3>
                <p class="font-light text-gray-500 sm:text-lg :text-gray-400"> </p>
                {/* <div class="flex justify-center items-baseline my-8">
                    <span class="mr-2 text-5xl font-extrabold">$99</span>
                    <span class="text-gray-500 :text-gray-400">/month</span>
                </div> */}
               
                <ul role="list" class="mb-8 mt-9 space-y-4 text-left h-48 ">
                    <li class="flex items-center space-x-3">
                        
                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 :text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>HD Makeup</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        
                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 :text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Premium Facial </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        
                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 :text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Spa Pedicure </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        
                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 :text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Hand Wax </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        
                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 :text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Hair Spa </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        
                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 :text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span> Extra Two person light make up </span>
                    </li>
                </ul>
                <NavLink to="/contact" className="  text-primary text-2xl flex justify-center relative top-24">
          Enquire Now  →
        </NavLink>
                <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center :text-white  :focus:ring-primary-900">Get started</a>
            </div>
            
            <div class="flex flex-col p-6 mx-auto max-w-lg w-[340px] text-center text-gray-900 h-[30rem] bg-white rounded-lg border  border-orange-300 shadow :border-gray-600 xl:p-8 :bg-gray-800 :text-white ">
                <h3 class="mb-4 text-2xl font-semibold">Pro Perfection</h3>
                {/* <p class="font-light text-gray-500 sm:text-lg :text-gray-400"> ghts.</p> */}
                {/* <div class="flex justify-center items-baseline my-8">
                    <span class="mr-2 text-5xl font-extrabold">$499</span>
                    <span class="text-gray-500 :text-gray-400">/month</span>
                </div> */}
                
                <ul role="list" class="mb-8 mt-9 space-y-4 text-left h-48 ">
                    <li class="flex items-center space-x-3">
                        
                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 :text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>HD Makeup</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        
                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 :text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Premium Facial + Hydra Facial </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        
                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 :text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Spa Pedicure </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        
                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 :text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Spa Manicure </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        
                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 :text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Hand Wax </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        
                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 :text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span> Extra Five person light make up </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        
                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 :text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span> Mehandi & Nail Art (optional) </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        
                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 :text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span> Saree changing (5-7km) </span>
                    </li>
                </ul>
                <NavLink to="/contact" className="  text-primary text-2xl flex justify-center relative top-24">
          Enquire Now  →
        </NavLink>
                <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center :text-white  :focus:ring-primary-900">Get started</a>
            </div>
        </div>
    </div>
  </section>
  )
}
