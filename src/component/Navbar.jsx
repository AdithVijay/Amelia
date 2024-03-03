import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <header>
            <div>
                <div>
                    <NavLink to="/"></NavLink>   {/* this is the left side */}
                </div>
                <nav>
                    <ul>

                        <li>
                             <NavLink to="/">Home </NavLink>
                         </li>
                        <li>
                             <NavLink to="/services">Service </NavLink> 
                        </li>
                        <li>
                             <NavLink to="/gallery">Gallery </NavLink> 
                        </li>
                        <li>
                             <NavLink to="/contact">Contact us </NavLink> 
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Navbar