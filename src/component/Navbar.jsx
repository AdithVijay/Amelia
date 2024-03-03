import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <header className="shadow"> 
            <div className={`flex flex-row justify-between pt-4 pb-4 items-center`}>
                <div>
                    <NavLink to="/">Amelia</NavLink>   {/* this is the left side AMELIA LOGO */}
                </div>
                <nav>
                    <ul className='flex justify-end  items-center'>      {/* this is the right  side AMELIA LOGO */}

                        <li className=' pr-10'>
                             <NavLink to="/">Home </NavLink>
                         </li>
                        <li className=' pr-10'>
                             <NavLink to="/services">Service </NavLink> 
                        </li>
                        <li className=' pr-10'>
                             <NavLink to="/gallery">Gallery </NavLink> 
                        </li>
                        <li className=' pr-10'>
                             <NavLink to="/contact">Contact us </NavLink> 
                        </li>
                        <button className='bg-black text-white pr-3 pl-3 pt-2 pb-2 mr-10 ml-10 '>
                            Book Now
                            </button>   {/* this is the end of right side */}
                    </ul>                 
                </nav>

            </div>
        </header>
    </>
  )
}

export default Navbar